import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Mobile Services Performance Monitoring

interface PerformanceConfig {
  enableAnalytics?: boolean;
  enableConsoleLogging?: boolean;
  enableLocalStorage?: boolean;
  analyticsEndpoint?: string;
  businessName?: string;
}

interface MobileMetrics {
  deviceType: 'mobile' | 'tablet' | 'desktop';
  connectionType: string;
  screenSize: string;
  userAgent: string;
  timestamp: number;
}

interface StoredMetric {
  name: string;
  value: number;
  rating: string;
  delta: number;
  id: string;
  deviceType: string;
  connectionType: string;
  screenSize: string;
  userAgent: string;
  timestamp: number;
  businessName?: string;
  url: string;
  referrer: string;
}

interface MetricSummary {
  value: number;
  rating: string;
}

interface PerformanceSummary {
  totalMetrics: number;
  recentMetrics: number;
  averages: Record<string, MetricSummary>;
  deviceBreakdown: Record<string, number>;
  connectionBreakdown: Record<string, number>;
}

interface PerformanceThreshold {
  good: number;
  poor: number;
}

interface PerformanceHealth {
  overall: 'good' | 'needs-improvement' | 'poor';
  metrics: Record<string, { value: number; rating: string }>;
  recommendations: string[];
}

// Default configuration
const defaultConfig: PerformanceConfig = {
  enableAnalytics: process.env.NODE_ENV === 'production',
  enableConsoleLogging: process.env.NODE_ENV === 'development',
  enableLocalStorage: true,
  businessName: process.env.BUSINESS_NAME || 'Mobile Service Business',
};

/**
 * Get device and connection information for mobile services
 */
function getMobileMetrics(): MobileMetrics {
  const userAgent = navigator.userAgent;
  const screenWidth = window.screen.width;
  
  // Detect device type
  let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
  if (screenWidth <= 768) {
    deviceType = 'mobile';
  } else if (screenWidth <= 1024) {
    deviceType = 'tablet';
  }

  // Get connection information
  const connection = (navigator as unknown as { connection?: { effectiveType?: string } }).connection || 
                    (navigator as unknown as { mozConnection?: { effectiveType?: string } }).mozConnection || 
                    (navigator as unknown as { webkitConnection?: { effectiveType?: string } }).webkitConnection;
  const connectionType = connection ? connection.effectiveType || 'unknown' : 'unknown';

  return {
    deviceType,
    connectionType,
    screenSize: `${screenWidth}x${window.screen.height}`,
    userAgent: userAgent.substring(0, 100), // Truncate for privacy
    timestamp: Date.now(),
  };
}

/**
 * Send metrics to analytics service
 */
function sendToAnalytics(metric: Metric, mobileMetrics: MobileMetrics, config: PerformanceConfig) {
  const data: StoredMetric = {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    ...mobileMetrics,
    businessName: config.businessName,
    url: window.location.href,
    referrer: document.referrer,
  };

  // Console logging for development
  if (config.enableConsoleLogging) {
    console.log(`[Performance] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      deviceType: mobileMetrics.deviceType,
      connectionType: mobileMetrics.connectionType,
    });
  }

  // Store in localStorage for debugging
  if (config.enableLocalStorage) {
    try {
      const stored = localStorage.getItem('mobile-services-performance') || '[]';
      const metrics: StoredMetric[] = JSON.parse(stored);
      metrics.push(data);
      
      // Keep only last 50 metrics
      if (metrics.length > 50) {
        metrics.splice(0, metrics.length - 50);
      }
      
      localStorage.setItem('mobile-services-performance', JSON.stringify(metrics));
    } catch (error) {
      console.warn('Failed to store performance metrics:', error);
    }
  }

  // Send to analytics endpoint
  if (config.enableAnalytics && config.analyticsEndpoint) {
    fetch(config.analyticsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(error => {
      console.warn('Failed to send performance metrics:', error);
    });
  }

  // Send to Google Analytics 4 if available
  if (config.enableAnalytics && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag !== 'undefined') {
    const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: mobileMetrics.deviceType,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_map: {
        metric_rating: metric.rating,
        device_type: mobileMetrics.deviceType,
        connection_type: mobileMetrics.connectionType,
      },
    });
  }
}

/**
 * Initialize Core Web Vitals monitoring for mobile services
 */
export function initPerformanceMonitoring(userConfig: Partial<PerformanceConfig> = {}) {
  const config = { ...defaultConfig, ...userConfig };
  
  // Only run in browser environment
  if (typeof window === 'undefined') {
    return;
  }

  const mobileMetrics = getMobileMetrics();
  
  // Create metric handler
  const handleMetric = (metric: Metric) => {
    sendToAnalytics(metric, mobileMetrics, config);
  };

  // Monitor Core Web Vitals
  onCLS(handleMetric);
  onINP(handleMetric); // Interaction to Next Paint (replaces FID)
  onFCP(handleMetric);
  onLCP(handleMetric);
  onTTFB(handleMetric);

  // Additional mobile-specific monitoring
  monitorMobileSpecificMetrics(mobileMetrics, config);
}

/**
 * Monitor mobile-specific performance metrics
 */
function monitorMobileSpecificMetrics(mobileMetrics: MobileMetrics, config: PerformanceConfig) {
  // Monitor page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    
    if (config.enableConsoleLogging) {
      console.log(`[Performance] Page Load Time: ${Math.round(loadTime)}ms`);
    }

    // Check if load time is concerning for mobile users
    if (loadTime > 3000 && mobileMetrics.deviceType === 'mobile') {
      console.warn('Slow page load detected on mobile device');
    }
  });

  // Monitor navigation timing
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          domComplete: navigation.domComplete - navigation.fetchStart,
          loadComplete: navigation.loadEventEnd - navigation.fetchStart,
        };

        if (config.enableConsoleLogging) {
          console.log('[Performance] Navigation Timing:', metrics);
        }
      }
    }, 0);
  });

  // Monitor resource loading for mobile optimization
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'resource') {
        const resource = entry as PerformanceResourceTiming;
        
        // Flag slow-loading resources on mobile
        if (resource.duration > 1000 && mobileMetrics.deviceType === 'mobile') {
          if (config.enableConsoleLogging) {
            console.warn(`[Performance] Slow resource on mobile: ${resource.name} (${Math.round(resource.duration)}ms)`);
          }
        }
      }
    }
  });

  observer.observe({ entryTypes: ['resource'] });
}

/**
 * Get performance summary for mobile services dashboard
 */
export function getPerformanceSummary(): PerformanceSummary | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem('mobile-services-performance');
    if (!stored) return null;

    const metrics: StoredMetric[] = JSON.parse(stored);
    const recent = metrics.slice(-10); // Last 10 metrics

    const summary: PerformanceSummary = {
      totalMetrics: metrics.length,
      recentMetrics: recent.length,
      averages: {},
      deviceBreakdown: {},
      connectionBreakdown: {},
    };

    // Calculate averages for each metric type
    const metricTypes = ['CLS', 'INP', 'FCP', 'LCP', 'TTFB'];
    metricTypes.forEach(type => {
      const typeMetrics = recent.filter((m: StoredMetric) => m.name === type);
      if (typeMetrics.length > 0) {
        summary.averages[type] = {
          value: typeMetrics.reduce((sum: number, m: StoredMetric) => sum + m.value, 0) / typeMetrics.length,
          rating: typeMetrics[typeMetrics.length - 1].rating, // Latest rating
        };
      }
    });

    // Device type breakdown
    recent.forEach((metric: StoredMetric) => {
      summary.deviceBreakdown[metric.deviceType] = (summary.deviceBreakdown[metric.deviceType] || 0) + 1;
    });

    // Connection type breakdown
    recent.forEach((metric: StoredMetric) => {
      summary.connectionBreakdown[metric.connectionType] = (summary.connectionBreakdown[metric.connectionType] || 0) + 1;
    });

    return summary;
  } catch (error) {
    console.warn('Failed to get performance summary:', error);
    return null;
  }
}

/**
 * Clear stored performance metrics
 */
export function clearPerformanceMetrics() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('mobile-services-performance');
  }
}

/**
 * Export performance data for analysis
 */
export function exportPerformanceData(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem('mobile-services-performance');
    return stored;
  } catch (error) {
    console.warn('Failed to export performance data:', error);
    return null;
  }
}

// Performance thresholds for mobile services
export const PERFORMANCE_THRESHOLDS: Record<string, PerformanceThreshold> = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  INP: { good: 200, poor: 500 },   // Interaction to Next Paint (replaces FID)
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte
};

/**
 * Check if performance meets mobile service standards
 */
export function checkPerformanceHealth(): PerformanceHealth {
  const summary = getPerformanceSummary();
  if (!summary) {
    return {
      overall: 'poor',
      metrics: {},
      recommendations: ['Unable to assess performance - no data available'],
    };
  }

  const recommendations: string[] = [];
  const metrics: Record<string, { value: number; rating: string }> = {};
  let goodCount = 0;
  let totalCount = 0;

  Object.entries(PERFORMANCE_THRESHOLDS).forEach(([metric, thresholds]) => {
    const value = summary.averages[metric]?.value;
    if (value !== undefined) {
      totalCount++;
      let rating: 'good' | 'needs-improvement' | 'poor';
      
      if (value <= thresholds.good) {
        rating = 'good';
        goodCount++;
      } else if (value <= thresholds.poor) {
        rating = 'needs-improvement';
      } else {
        rating = 'poor';
      }

      metrics[metric] = { value, rating };

      // Add specific recommendations
      if (rating !== 'good') {
        switch (metric) {
          case 'LCP':
            recommendations.push('Optimize images and reduce server response time for faster loading');
            break;
          case 'INP':
            recommendations.push('Reduce JavaScript execution time and optimize event handlers');
            break;
          case 'CLS':
            recommendations.push('Add size attributes to images and avoid dynamic content insertion');
            break;
          case 'FCP':
            recommendations.push('Optimize critical rendering path and reduce render-blocking resources');
            break;
          case 'TTFB':
            recommendations.push('Optimize server response time and consider CDN implementation');
            break;
        }
      }
    }
  });

  let overall: 'good' | 'needs-improvement' | 'poor';
  const goodPercentage = totalCount > 0 ? goodCount / totalCount : 0;
  
  if (goodPercentage >= 0.8) {
    overall = 'good';
  } else if (goodPercentage >= 0.5) {
    overall = 'needs-improvement';
  } else {
    overall = 'poor';
  }

  return { overall, metrics, recommendations };
} 
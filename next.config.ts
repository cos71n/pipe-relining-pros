import type { NextConfig } from "next";

// Bundle analyzer for performance monitoring
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  /* config options here */
  
  // Security headers for mobile services business
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          // Content Security Policy - Critical for XSS prevention
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: https://pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev",
              "font-src 'self' data:",
              "connect-src 'self' https:",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // XSS Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Permissions Policy (formerly Feature Policy)
          {
            key: 'Permissions-Policy',
            value: [
              'camera=(), microphone=(), geolocation=(self)',
              'interest-cohort=()'
            ].join(', ')
          },
          // Strict Transport Security (HSTS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // Cross-Origin policies
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none'
          }
        ]
      }
    ];
  },

  // Additional security configurations
  poweredByHeader: false, // Remove X-Powered-By header
  
  // Enhanced image optimization for mobile services
  images: {
    // Trusted image domains for mobile services
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https', 
        hostname: 'cdn.21st.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-dde82a4c37944e70932bfac79eb42fc2.r2.dev',
        port: '',
        pathname: '/**',
      }
    ],
    
    // Supported formats (WebP and AVIF for better compression)
    formats: ['image/avif', 'image/webp'],
    
    // Image sizes for mobile services (mobile-first approach)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Enable static imports optimization
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Minimize layout shift
    minimumCacheTTL: 60,
    
    // Cloudflare-optimized settings (required for static export)
    unoptimized: true,
  },

  // Performance optimizations
  experimental: {
    // Enable optimized package imports for better tree shaking
    optimizePackageImports: [
      '@radix-ui/react-icons', 
      'lucide-react',
      '@radix-ui/react-avatar',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slot'
    ],
    // Reduce polyfills for modern browsers
    forceSwcTransforms: true,
  },

  // Configure for modern browsers to reduce polyfills
  env: {
    BROWSERSLIST_ENV: 'modern',
  },

  // Compiler optimizations for modern browsers
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Turbopack configuration (stable in Next.js 15)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Webpack optimizations for mobile performance
  webpack: (config, { dev, isServer }) => {
    // Target modern browsers to reduce polyfills
    if (!dev && !isServer) {
      config.target = ['web', 'es2020'];
      
      // Use custom minimal polyfills for modern browsers
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        
        // Replace default polyfills with our minimal version
        if (entries['polyfills']) {
          entries['polyfills'] = ['./src/polyfills.ts'];
        }
        
        return entries;
      };
      
      // Reduce polyfills by targeting modern environments
      config.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // Reduce core-js polyfills for modern browsers
          'core-js/modules/es.array.at': false,
          'core-js/modules/es.array.flat': false,
          'core-js/modules/es.array.flat-map': false,
          'core-js/modules/es.object.from-entries': false,
          'core-js/modules/es.object.has-own': false,
          'core-js/modules/es.string.trim-start': false,
          'core-js/modules/es.string.trim-end': false,
        },
      };
    }

    // Optimize for production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          maxAsyncRequests: 25,
          cacheGroups: {
            default: false,
            vendors: false,
            // React and React DOM
            react: {
              name: 'react',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              priority: 40,
            },
            // Radix UI components
            radix: {
              name: 'radix',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              priority: 35,
            },
            // Embla carousel (heavy component)
            embla: {
              name: 'embla',
              chunks: 'async',
              test: /[\\/]node_modules[\\/]embla-carousel/,
              priority: 30,
            },
            // Lucide icons
            lucide: {
              name: 'lucide',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              priority: 25,
            },
            // Other vendor libraries
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
            },
            // Common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
        // Improve tree shaking
        usedExports: true,
        sideEffects: false,
      }
    }

    // SVG optimization
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },

  // Output configuration for Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default withBundleAnalyzer(nextConfig);

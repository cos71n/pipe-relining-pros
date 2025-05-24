import { z } from 'zod';

// Mobile Services Security Utilities

/**
 * Input sanitization utilities for mobile service forms
 * Critical for preventing XSS and injection attacks
 */
export class SecurityUtils {
  
  // HTML sanitization - removes dangerous HTML/script tags
  static sanitizeHtml(input: string): string {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
      .replace(/<embed[^>]*>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }

  // Basic string sanitization for mobile service inputs
  static sanitizeString(input: string): string {
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/['";]/g, '') // Remove quotes and semicolons
      .slice(0, 1000); // Limit length
  }

  // Phone number sanitization and validation
  static sanitizePhoneNumber(phone: string): string {
    return phone.replace(/[^\d+()-\s]/g, '').slice(0, 20);
  }

  // Email sanitization
  static sanitizeEmail(email: string): string {
    return email.toLowerCase().trim().slice(0, 254);
  }

  // Vehicle information sanitization (for mobile mechanic services)
  static sanitizeVehicleInfo(info: string): string {
    return info
      .replace(/[<>'";&]/g, '')
      .trim()
      .slice(0, 200);
  }

  // Service description sanitization
  static sanitizeServiceDescription(description: string): string {
    return this.sanitizeHtml(description).slice(0, 2000);
  }

  // Rate limiting tracker
  private static attempts: Map<string, { count: number; resetTime: number }> = new Map();

  // Rate limiting for forms (prevent spam/abuse)
  static checkRateLimit(identifier: string, maxAttempts: number = 5, windowMs: number = 900000): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier);

    if (!userAttempts || now > userAttempts.resetTime) {
      this.attempts.set(identifier, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (userAttempts.count >= maxAttempts) {
      return false;
    }

    userAttempts.count++;
    return true;
  }

  // Clean expired rate limit entries
  static cleanupRateLimit(): void {
    const now = Date.now();
    for (const [key, value] of this.attempts.entries()) {
      if (now > value.resetTime) {
        this.attempts.delete(key);
      }
    }
  }
}

/**
 * Validation schemas for mobile service forms using Zod
 * Type-safe validation with sanitization
 */

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters')
    .transform(SecurityUtils.sanitizeString),
  
  email: z.string()
    .email('Please enter a valid email address')
    .transform(SecurityUtils.sanitizeEmail),
  
  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number too long')
    .transform(SecurityUtils.sanitizePhoneNumber),
  
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .transform(SecurityUtils.sanitizeServiceDescription),
  
  serviceType: z.enum(['mobile-mechanic', 'mobile-grooming', 'mobile-cleaning', 'other'])
    .optional(),
  
  urgency: z.enum(['low', 'medium', 'high', 'emergency']).default('medium')
});

// Mobile mechanic specific form
export const mechanicServiceSchema = z.object({
  vehicleMake: z.string()
    .min(1, 'Vehicle make is required')
    .max(50, 'Vehicle make too long')
    .transform(SecurityUtils.sanitizeVehicleInfo),
  
  vehicleModel: z.string()
    .min(1, 'Vehicle model is required')
    .max(50, 'Vehicle model too long')
    .transform(SecurityUtils.sanitizeVehicleInfo),
  
  vehicleYear: z.number()
    .min(1900, 'Invalid vehicle year')
    .max(new Date().getFullYear() + 1, 'Invalid vehicle year'),
  
  issueDescription: z.string()
    .min(10, 'Please describe the issue')
    .max(1000, 'Description too long')
    .transform(SecurityUtils.sanitizeServiceDescription),
  
  location: z.string()
    .min(5, 'Please provide your location')
    .max(200, 'Location too long')
    .transform(SecurityUtils.sanitizeString),
  
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional()
});

// Mobile grooming service form
export const groomingServiceSchema = z.object({
  petName: z.string()
    .min(1, 'Pet name is required')
    .max(50, 'Pet name too long')
    .transform(SecurityUtils.sanitizeString),
  
  petType: z.enum(['dog', 'cat', 'other']),
  
  petBreed: z.string()
    .max(50, 'Breed name too long')
    .transform(SecurityUtils.sanitizeString)
    .optional(),
  
  petSize: z.enum(['small', 'medium', 'large', 'extra-large']),
  
  services: z.array(z.enum(['bath', 'haircut', 'nail-trim', 'ear-cleaning', 'full-groom'])),
  
  specialRequests: z.string()
    .max(500, 'Special requests too long')
    .transform(SecurityUtils.sanitizeServiceDescription)
    .optional(),
  
  location: z.string()
    .min(5, 'Please provide your location')
    .max(200, 'Location too long')
    .transform(SecurityUtils.sanitizeString)
});

// Newsletter signup validation
export const newsletterSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address')
    .transform(SecurityUtils.sanitizeEmail),
  
  serviceInterests: z.array(z.string()).optional()
});

// Generic inquiry form
export const inquirySchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name too long')
    .transform(SecurityUtils.sanitizeString),
  
  email: z.string()
    .email('Please enter a valid email address')
    .transform(SecurityUtils.sanitizeEmail),
  
  subject: z.string()
    .min(5, 'Subject is required')
    .max(100, 'Subject too long')
    .transform(SecurityUtils.sanitizeString),
  
  inquiry: z.string()
    .min(10, 'Please provide more details')
    .max(1000, 'Inquiry too long')
    .transform(SecurityUtils.sanitizeServiceDescription)
});

// Type exports for forms
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type MechanicServiceData = z.infer<typeof mechanicServiceSchema>;
export type GroomingServiceData = z.infer<typeof groomingServiceSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type InquiryData = z.infer<typeof inquirySchema>;

/**
 * Security middleware utilities
 */
export const SecurityMiddleware = {
  // Validate request headers
  validateHeaders: (headers: Headers) => {
    const userAgent = headers.get('user-agent');
    
    // Basic bot detection
    if (!userAgent || userAgent.length < 10) {
      return false;
    }
    
    return true;
  },

  // Get client IP for rate limiting
  getClientIP: (headers: Headers): string => {
    return headers.get('x-forwarded-for') || 
           headers.get('x-real-ip') || 
           'unknown';
  }
}; 
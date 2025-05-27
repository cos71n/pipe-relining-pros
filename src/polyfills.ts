// Minimal polyfills for modern browsers (ES2020+)
// Excludes polyfills for features natively supported in Chrome 87+, Firefox 78+, Safari 14+

// Only include essential polyfills that might still be needed
// Most modern JavaScript features are now natively supported

// Keep only critical polyfills for very specific edge cases
// Remove polyfills for:
// - Array.prototype.at (supported in Chrome 92+, Firefox 90+, Safari 15.4+)
// - Array.prototype.flat (supported in Chrome 69+, Firefox 62+, Safari 12+)
// - Array.prototype.flatMap (supported in Chrome 69+, Firefox 62+, Safari 12+)
// - Object.fromEntries (supported in Chrome 73+, Firefox 63+, Safari 12.1+)
// - Object.hasOwn (supported in Chrome 93+, Firefox 92+, Safari 15.4+)
// - String.prototype.trimStart/trimEnd (supported in Chrome 66+, Firefox 61+, Safari 12+)

// For modern browsers, we can rely on native implementations
// This file intentionally left minimal to reduce bundle size 
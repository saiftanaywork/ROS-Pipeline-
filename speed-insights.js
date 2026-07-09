/**
 * Vercel Speed Insights Integration
 * 
 * This script integrates Vercel Speed Insights for tracking
 * web vitals and performance metrics.
 */

import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
// This will automatically track Core Web Vitals (LCP, FID, CLS, TTFB, INP)
injectSpeedInsights();

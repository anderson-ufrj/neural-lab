'use client';

import { GoogleAnalytics as GA } from '@next/third-parties/google';

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (!MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not found');
    return null;
  }

  return <GA gaId={MEASUREMENT_ID} />;
}
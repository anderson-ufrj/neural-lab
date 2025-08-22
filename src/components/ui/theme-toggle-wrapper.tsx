'use client';

import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('./theme-toggle').then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => <div className="p-2 rounded-full bg-gray-200 w-10 h-10 animate-pulse" />
});

export { ThemeToggle };
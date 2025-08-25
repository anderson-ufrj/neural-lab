'use client';

import { sendGAEvent } from '@next/third-parties/google';

export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      sendGAEvent('event', eventName, parameters);
    }
  };

  const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: url,
      });
    }
  };

  const trackClick = (category: string, label: string, value?: number) => {
    trackEvent('click', {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  const trackFormSubmit = (formName: string, success: boolean) => {
    trackEvent('form_submit', {
      form_name: formName,
      success: success,
    });
  };

  const trackProjectView = (projectName: string) => {
    trackEvent('view_project', {
      project_name: projectName,
    });
  };

  const trackChatInteraction = (action: string, message?: string) => {
    trackEvent('chat_interaction', {
      action: action,
      message: message?.substring(0, 100), // Limit message length for privacy
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackClick,
    trackFormSubmit,
    trackProjectView,
    trackChatInteraction,
  };
}
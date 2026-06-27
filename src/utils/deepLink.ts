import React from 'react';

/**
 * Intelligently routes social media clicks to native apps on mobile devices,
 * with a fallback to the standard web URL if the app is not installed.
 */
export const openDeepLink = (
  e: React.MouseEvent<HTMLAnchorElement>,
  webUrl: string,
  appScheme?: string
) => {
  // If no scheme is provided or the user is on a desktop/laptop, let the browser handle it normally
  if (!appScheme) return;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) return;

  // Intercept the default browser link click
  e.preventDefault();

  let hasRedirected = false;

  const handleVisibilityChange = () => {
    if (document.hidden) {
      hasRedirected = true;
    }
  };

  // Listen to visibilitychange: if the browser goes to the background, it means the native app opened
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Attempt to redirect the browser to the app scheme
  window.location.href = appScheme;

  // If the visibility doesn't change within 1.5 seconds, the app isn't installed. Open in the browser.
  setTimeout(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    if (!hasRedirected) {
      window.open(webUrl, '_blank', 'noopener noreferrer');
    }
  }, 1500);
};

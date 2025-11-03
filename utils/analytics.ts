import { trackEvent } from "config";
import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 * Track page view event
 */
export function trackPageView(path: string) {
  trackEvent("page_view", {
    page_path: path,
    page_title: document.title,
  });
}

/**
 * Track external link click
 */
export function trackExternalLinkClick(url: string, linkType: string) {
  trackEvent("external_link_click", {
    link_url: url,
    link_type: linkType,
  });
}

/**
 * Track ticket purchase link click
 */
export function trackTicketClick(provider: string, currency?: string) {
  trackEvent("ticket_click", {
    provider,
    currency,
    event_category: "ticket_purchase",
  });
}

/**
 * Track donation link click
 */
export function trackDonationClick(method: string) {
  trackEvent("donation_click", {
    method,
    event_category: "donation",
  });
}

/**
 * Hook to track page views on route change
 */
export function usePageTracking() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };

    // Track initial page load
    if (typeof window !== "undefined") {
      trackPageView(router.asPath);
    }

    // Track route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
}

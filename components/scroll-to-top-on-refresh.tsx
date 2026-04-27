"use client";

import { useEffect } from "react";

export function ScrollToTopOnRefresh() {
  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const navigationEntry = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    if (navigationEntry?.type === "reload") {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}`,
        );
      }

      const scrollToTop = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "auto" });
      };

      scrollToTop();
      window.requestAnimationFrame(scrollToTop);
      window.setTimeout(scrollToTop, 50);
    }

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return null;
}

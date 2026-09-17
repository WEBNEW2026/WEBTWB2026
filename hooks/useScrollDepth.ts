import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '../utils/analytics';

const MILESTONES = [25, 50, 75, 100] as const;
type Milestone = typeof MILESTONES[number];

/**
 * useScrollDepth
 * Fires trackScrollDepth at 25%, 50%, 75%, and 100% scroll milestones.
 * Each milestone fires only once per page mount.
 * Re-runs from zero when `pageName` changes (i.e. route change).
 *
 * Usage: call once in App.tsx and pass the current view/route name.
 */
export function useScrollDepth(pageName: string) {
  const firedRef = useRef<Set<Milestone>>(new Set());

  useEffect(() => {
    // Reset fired milestones on page change
    firedRef.current = new Set();

    const handleScroll = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPct = Math.round((scrollTop / docHeight) * 100);

      for (const milestone of MILESTONES) {
        if (scrollPct >= milestone && !firedRef.current.has(milestone)) {
          firedRef.current.add(milestone);
          trackScrollDepth(milestone, pageName);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once immediately in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageName]);
}

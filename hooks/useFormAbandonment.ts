import { useEffect, useRef } from 'react';
import { trackFormAbandonment } from '../utils/analytics';

interface UseFormAbandonmentOptions {
  /** Current step the user is on (1, 2, 3…) */
  step: number;
  /** ID of the selected villa/package — for segmentation */
  villaId: string;
  /** True if the user has interacted with any field */
  isDirty: boolean;
  /** True after successful submit — prevents false abandonment event */
  isSubmitted: boolean;
}

/**
 * useFormAbandonment
 * Detects when a user leaves the booking form before submitting.
 * Listens to:
 *  - `visibilitychange` (tab switch / minimize) — fires event immediately
 *  - `beforeunload`           — fires event on page close/refresh
 *
 * Only fires if `isDirty` is true and `isSubmitted` is false.
 * Uses a ref to avoid stale closures.
 *
 * Usage: mount inside BookingForm component.
 */
export function useFormAbandonment({
  step,
  villaId,
  isDirty,
  isSubmitted,
}: UseFormAbandonmentOptions) {
  // Keep latest values in a ref to prevent stale closure issues
  const stateRef = useRef({ step, villaId, isDirty, isSubmitted });
  const hasFiredRef = useRef(false);

  useEffect(() => {
    stateRef.current = { step, villaId, isDirty, isSubmitted };
  }, [step, villaId, isDirty, isSubmitted]);

  useEffect(() => {
    const maybeTrack = () => {
      const { step, villaId, isDirty, isSubmitted } = stateRef.current;
      // Only fire once, and only if form is dirty but not yet submitted
      if (isDirty && !isSubmitted && !hasFiredRef.current) {
        hasFiredRef.current = true;
        trackFormAbandonment(step, villaId);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        maybeTrack();
      }
    };

    const handleBeforeUnload = () => {
      maybeTrack();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // mount once — reads stateRef for latest values
}

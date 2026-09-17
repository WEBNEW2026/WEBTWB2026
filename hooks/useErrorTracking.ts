import { useEffect } from 'react';
import { trackErrorEvent } from '../utils/analytics';

/**
 * useErrorTracking
 * Mounts global error listeners once at App root to capture:
 *  - Runtime JS errors   → `window.onerror`
 *  - Unhandled Promises  → `window.addEventListener('unhandledrejection')`
 *
 * Deduplication: uses a Set to prevent the same error from being sent
 * repeatedly (e.g. errors inside render loops).
 *
 * Usage: call once in App.tsx (no arguments needed).
 */
export function useErrorTracking() {
  useEffect(() => {
    const reportedErrors = new Set<string>();

    const sendError = (
      type: 'js_error' | 'promise_rejection',
      message: string
    ) => {
      // Deduplicate by message to avoid spam
      const key = `${type}:${message}`;
      if (reportedErrors.has(key)) return;
      reportedErrors.add(key);

      // Limit Set size to avoid memory leak on long sessions
      if (reportedErrors.size > 50) reportedErrors.clear();

      const page = window.location.pathname || '/';
      trackErrorEvent(type, message, page);
    };

    // ── Runtime JS errors ───────────────────────────────────
    const handleError = (event: ErrorEvent) => {
      const message = event.message || 'Unknown JS error';
      // Ignore cross-origin script errors (no useful info available)
      if (message === 'Script error.') return;
      sendError('js_error', message);
    };

    // ── Unhandled Promise rejections ────────────────────────
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      let message = 'Unhandled Promise rejection';
      if (reason instanceof Error) {
        message = reason.message;
      } else if (typeof reason === 'string') {
        message = reason;
      }
      sendError('promise_rejection', message);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []); // mount once — no dependencies
}

/**
 * ============================================================
 * TAMAN WISATA BOUGENVILLE — Unified Analytics Module
 * ============================================================
 * Supports: GA4, GTM (dataLayer), Meta Pixel, TikTok Pixel,
 *           Microsoft Clarity
 * ============================================================
 * NOTE: Clarity & GTM are loaded as native script tags in index.html.
 * This module uses window.clarity() and window.dataLayer directly.
 * ============================================================
 */

// ── Type Definitions ──────────────────────────────────────────

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// ── Platform Availability Checks ──────────────────────────────

const isGA4Loaded    = (): boolean => typeof (window as any).gtag === 'function';
const isGTMLoaded    = (): boolean => Array.isArray((window as any).dataLayer);
const isFBLoaded     = (): boolean => typeof (window as any).fbq === 'function';
const isTTKLoaded    = (): boolean => typeof (window as any).ttq?.track === 'function';

// ── Internal GA4 Helper ───────────────────────────────────────

const ga4 = (eventName: string, params: Record<string, any> = {}) => {
  if (isGA4Loaded()) (window as any).gtag('event', eventName, params);
};

// ── Internal GTM dataLayer Helper ────────────────────────────

const gtm = (payload: Record<string, any>) => {
  if (isGTMLoaded()) (window as any).dataLayer.push(payload);
};

// ── Internal Meta Pixel Helper ────────────────────────────────

const fb = (event: string, data?: Record<string, any>) => {
  if (isFBLoaded()) (window as any).fbq('track', event, data);
};

const fbCustom = (event: string, data?: Record<string, any>) => {
  if (isFBLoaded()) (window as any).fbq('trackCustom', event, data);
};

// ── Internal TikTok Pixel Helper ──────────────────────────────

const ttk = (event: string, data?: Record<string, any>) => {
  if (isTTKLoaded()) (window as any).ttq.track(event, data);
};

// ── Internal Clarity Helper (via native window.clarity from index.html) ──
const clarity = (method: string, ...args: any[]) => {
  try {
    const c = (window as any).clarity;
    if (typeof c !== 'function') return;
    if (method === 'set' && args.length >= 2) {
      c('set', args[0], args[1]);
    } else if (method === 'identify' && args.length >= 1) {
      c('identify', args[0], args[1]);
    } else if (method === 'event' && args.length >= 1) {
      c('event', args[0]);
    }
  } catch (e) {
    // Silently ignore — Clarity not yet loaded
  }
};

// ════════════════════════════════════════════════════════════
// PAGE TRACKING
// ════════════════════════════════════════════════════════════

/**
 * Track page view across all platforms.
 * Call on every page mount.
 */
export const trackPageView = (url: string, title: string) => {
  // GA4
  ga4('page_view', { page_path: url, page_title: title });

  // GTM
  gtm({ event: 'page_view', page: { path: url, title } });

  // Meta Pixel
  fb('PageView');

  // TikTok
  ttk('PageView');

  // Clarity — set page tag
  clarity('set', 'page', url);
};

// ════════════════════════════════════════════════════════════
// GENERIC EVENT
// ════════════════════════════════════════════════════════════

/**
 * Generic custom event — all platforms.
 */
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  // GA4
  ga4(action, { event_category: category, event_label: label, value });

  // GTM
  gtm({ event: action, event_category: category, event_label: label, value });

  // Meta Pixel (custom event)
  fbCustom(action, { category, label, value });

  // TikTok (custom event as ClickButton equivalent)
  ttk('ClickButton', { content_name: label, content_category: category, value });
};

// ════════════════════════════════════════════════════════════
// VILLA EVENTS
// ════════════════════════════════════════════════════════════

/** Villa detail page view */
export const trackVillaView = (villaName: string) => {
  ga4('view_item', {
    event_category: 'engagement',
    event_label: villaName,
    item_name: villaName,
  });
  gtm({ event: 'villa_view', villa_name: villaName });
  fb('ViewContent', { content_name: villaName, content_category: 'Villa' });
  ttk('ViewContent', { content_name: villaName, content_type: 'villa' });
  clarity('set', 'villa_viewed', villaName);
};

/** Villa card click from listing page */
export const trackVillaCardClick = (villaName: string, clusterType: string) => {
  ga4('select_item', { item_name: villaName, item_category: clusterType });
  gtm({ event: 'villa_card_click', villa_name: villaName, cluster_type: clusterType });
  fbCustom('VillaCardClick', { villa_name: villaName, cluster_type: clusterType });
};

/** Villa listing filter tab change */
export const trackVillaFilterTab = (tabId: string) => {
  ga4('villa_filter_tab', { event_category: 'engagement', event_label: tabId });
  gtm({ event: 'villa_filter_tab', tab_id: tabId });
};

// ════════════════════════════════════════════════════════════
// BOOKING EVENTS
// ════════════════════════════════════════════════════════════

/** Booking form — step completed */
export const trackBookingStep = (step: number, itemId: string) => {
  ga4('booking_step_' + step, { event_category: 'engagement', event_label: itemId });
  gtm({ event: 'booking_step', step, item_id: itemId });
  fbCustom('BookingStep', { step, item_id: itemId });
  ttk('InitiateCheckout', { content_id: itemId, content_name: itemId });
};

/** Date selected on booking form */
export const trackDateSelected = (type: 'check_in' | 'check_out', date: string, villaId: string) => {
  ga4('date_selected', {
    event_category: 'booking',
    event_label: `${type}: ${date}`,
    item_id: villaId,
  });
  gtm({ event: 'date_selected', date_type: type, date, villa_id: villaId });
  fbCustom('DateSelected', { date_type: type, date, villa_id: villaId });
};

/** Booking initiated from villa detail card */
export const trackBookingStart = (villaName: string) => {
  ga4('begin_checkout', { event_category: 'engagement', event_label: villaName, item_name: villaName });
  gtm({ event: 'booking_start', villa_name: villaName });
  fb('InitiateCheckout', { content_name: villaName, content_category: 'Villa' });
  ttk('InitiateCheckout', { content_name: villaName });
  clarity('set', 'booking_started_for', villaName);
};

/** Booking form submitted */
export const trackBookingSubmit = (type: string, estimatedValue: number) => {
  ga4('purchase', {
    event_category: 'conversion',
    transaction_id: `TWB-${Date.now()}`,
    value: estimatedValue,
    currency: 'IDR',
    item_name: type,
  });
  gtm({ event: 'booking_submit', booking_type: type, value: estimatedValue, currency: 'IDR' });
  fb('Purchase', { value: estimatedValue, currency: 'IDR', content_name: type });
  ttk('CompletePayment', { value: estimatedValue, currency: 'IDR', content_name: type });
  clarity('set', 'booking_submitted', type);
};

/** WhatsApp booking click */
export const trackWhatsAppBooking = (source: string) => {
  ga4('whatsapp_booking', { event_category: 'conversion', event_label: source });
  gtm({ event: 'whatsapp_booking', source });
  fb('Contact', { content_name: source });
  ttk('Contact', { content_name: source });
  clarity('set', 'wa_booking_clicked', source);
};

// ════════════════════════════════════════════════════════════
// OTA EVENTS
// ════════════════════════════════════════════════════════════

/** User clicks an OTA platform (Booking.com, Airbnb, etc.) */
export const trackOTAClick = (platform: string) => {
  ga4('ota_click', { event_category: 'referral', event_label: platform });
  gtm({ event: 'ota_click', ota_platform: platform });
  fb('Lead', { content_name: `OTA: ${platform}` });
  ttk('ClickButton', { content_name: `OTA: ${platform}`, content_category: 'booking' });
  clarity('set', 'ota_clicked', platform);
};

/** User clicks on Airbnb villa unit inside modal */
export const trackAirbnbVillaClick = (villaName: string) => {
  ga4('airbnb_villa_click', { event_category: 'referral', event_label: villaName });
  gtm({ event: 'airbnb_villa_click', villa_name: villaName });
  fbCustom('AirbnbVillaClick', { villa_name: villaName });
};

// ════════════════════════════════════════════════════════════
// SPECIALIST / CONCIERGE EVENTS
// ════════════════════════════════════════════════════════════

/** Specialist contact (Jaka / Iis / Teten) clicked */
export const trackSpecialistClick = (specialistName: string) => {
  ga4('specialist_click', { event_category: 'engagement', event_label: specialistName });
  gtm({ event: 'specialist_click', specialist: specialistName });
  fb('Contact', { content_name: `Specialist: ${specialistName}` });
  ttk('Contact', { content_name: `Specialist: ${specialistName}` });
  clarity('set', 'specialist_contacted', specialistName);
};

// ════════════════════════════════════════════════════════════
// ENGAGEMENT EVENTS
// ════════════════════════════════════════════════════════════

/** Language changed */
export const trackLanguageChange = (language: string) => {
  ga4('language_change', { event_category: 'engagement', event_label: language });
  gtm({ event: 'language_change', language });
  clarity('set', 'language', language);
};

/** Phone click */
export const trackPhoneClick = () => {
  ga4('phone_click', { event_category: 'engagement', event_label: 'Footer Phone' });
  gtm({ event: 'phone_click' });
  fb('Contact', { content_name: 'Phone' });
  ttk('Contact', { content_name: 'Phone Call' });
};

/** Social media link clicked */
export const trackSocialClick = (platform: string) => {
  ga4('social_click', { event_category: 'engagement', event_label: platform });
  gtm({ event: 'social_click', platform });
  fb('Lead', { content_name: `Social: ${platform}` });
  ttk('ClickButton', { content_name: `Social: ${platform}` });
};

/** Search / filter used */
export const trackSearch = (searchTerm: string) => {
  ga4('search', { search_term: searchTerm });
  gtm({ event: 'search', search_term: searchTerm });
};

/** Villa wishlisted */
export const trackWishlist = (villaName: string, action: 'add' | 'remove') => {
  ga4(action === 'add' ? 'add_to_wishlist' : 'remove_from_wishlist', {
    event_category: 'engagement',
    event_label: villaName,
  });
  gtm({ event: action === 'add' ? 'wishlist_add' : 'wishlist_remove', villa_name: villaName });
  if (action === 'add') fb('AddToWishlist', { content_name: villaName });
};

/** Gallery opened on villa detail page */
export const trackGalleryOpen = (villaName: string) => {
  ga4('gallery_open', { event_category: 'engagement', event_label: villaName });
  gtm({ event: 'gallery_open', villa_name: villaName });
};

/** Share button clicked */
export const trackShare = (villaName: string) => {
  ga4('share', { content_type: 'villa', item_id: villaName });
  gtm({ event: 'share', villa_name: villaName });
  fbCustom('Share', { villa_name: villaName });
};

// ════════════════════════════════════════════════════════════
// SCROLL DEPTH
// ════════════════════════════════════════════════════════════

/**
 * Track scroll depth milestones (25 / 50 / 75 / 100%).
 * Called from useScrollDepth hook — fires once per milestone per page mount.
 */
export const trackScrollDepth = (depth: 25 | 50 | 75 | 100, page: string) => {
  // GA4
  ga4('scroll', { percent_scrolled: depth, page_location: page });

  // GTM
  gtm({ event: 'scroll_depth', depth_percent: depth, page_location: page });

  // Clarity
  clarity('set', 'scroll_depth', `${depth}%`);
};

// ════════════════════════════════════════════════════════════
// FORM ABANDONMENT
// ════════════════════════════════════════════════════════════

/**
 * Track when user leaves the booking form mid-way.
 * Called from useFormAbandonment hook on tab switch / visibility hidden.
 */
export const trackFormAbandonment = (step: number, villaId: string) => {
  // GA4
  ga4('form_abandonment', {
    event_category: 'engagement',
    event_label: `Step ${step} — ${villaId || 'no selection'}`,
    form_step: step,
    villa_id: villaId,
  });

  // GTM
  gtm({ event: 'form_abandonment', form_step: step, villa_id: villaId });

  // Meta Pixel
  fbCustom('FormAbandonment', { step, villa_id: villaId });

  // Clarity — tag session for funnel analysis
  clarity('set', 'form_abandoned_at_step', String(step));
};

// ════════════════════════════════════════════════════════════
// ERROR TRACKING
// ════════════════════════════════════════════════════════════

/**
 * Track JavaScript errors & unhandled promise rejections.
 * Called from useErrorTracking hook mounted once at App root.
 */
export const trackErrorEvent = (
  type: 'js_error' | 'promise_rejection' | '404',
  message: string,
  page: string
) => {
  // GA4
  ga4('exception', {
    description: `[${type}] ${message}`,
    fatal: false,
    page_location: page,
  });

  // GTM
  gtm({ event: type, error_message: message, page_location: page });

  // Clarity — tag for playback filtering
  clarity('set', 'error_type', type);
};

// ════════════════════════════════════════════════════════════
// DATE RANGE ANALYTICS
// ════════════════════════════════════════════════════════════

/**
 * Track complete date range after both check-in and check-out are filled.
 * Sends: villa ID, number of nights, check-in month name (e.g. "April"),
 * and whether it falls on a weekend.
 */
export const trackDateRange = (
  checkIn: string,
  checkOut: string,
  villaId: string,
  nights: number
) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const checkInDate = new Date(checkIn);
  const checkInMonth = monthNames[checkInDate.getMonth()];
  const checkInDayOfWeek = checkInDate.getDay(); // 0=Sun, 6=Sat
  const isWeekend = checkInDayOfWeek === 5 || checkInDayOfWeek === 6; // Fri/Sat

  // Label for quick reading in GA4
  const label = `${checkInMonth} — ${nights} night${nights !== 1 ? 's' : ''} — ${isWeekend ? 'Weekend' : 'Weekday'}`;

  // GA4
  ga4('date_range_selected', {
    event_category: 'booking',
    event_label: label,
    check_in: checkIn,
    check_out: checkOut,
    villa_id: villaId,
    nights,
    check_in_month: checkInMonth,
    is_weekend: isWeekend,
  });

  // GTM (full data for Tag Manager rules)
  gtm({
    event: 'date_range_selected',
    check_in: checkIn,
    check_out: checkOut,
    villa_id: villaId,
    nights,
    check_in_month: checkInMonth,
    is_weekend: isWeekend,
  });

  // Meta Pixel — as a custom event
  fbCustom('DateRangeSelected', {
    check_in: checkIn,
    check_out: checkOut,
    villa_id: villaId,
    nights,
  });

  // Clarity — visible in session recording filters
  clarity('set', 'booking_month', checkInMonth);
  clarity('set', 'booking_nights', String(nights));
};

// ════════════════════════════════════════════════════════════
// CLARITY SPECIFIC (Session tagging)
// ════════════════════════════════════════════════════════════

/** Tag a Clarity session with a custom key-value */
export const clarityTag = (key: string, value: string) => {
  clarity('set', key, value);
};

/** Identify a user in Clarity (e.g. after form submission) */
export const clarityIdentify = (userId: string, sessionId?: string) => {
  clarity('identify', userId, sessionId);
};

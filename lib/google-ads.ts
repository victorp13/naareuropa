export const GOOGLE_ADS_ID = "AW-978063814";
export const GOOGLE_ADS_CONTACT_CONVERSION_ID = "AW-978063814/2l-MCIPD6pAZEMajsNID";
export const MARKETING_CONSENT_STORAGE_KEY = "naareuropa_marketing_consent";

export type MarketingConsent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getStoredMarketingConsent(): MarketingConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedValue = window.localStorage.getItem(MARKETING_CONSENT_STORAGE_KEY);
    if (storedValue === "granted" || storedValue === "denied") {
      return storedValue;
    }

    return null;
  } catch {
    return null;
  }
}

export function updateGoogleConsent(consent: MarketingConsent) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", {
    ad_storage: consent,
    ad_user_data: consent,
    ad_personalization: consent,
    analytics_storage: "denied",
  });
}

export function setMarketingConsent(consent: MarketingConsent) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(MARKETING_CONSENT_STORAGE_KEY, consent);
  } catch {
    // Ignore write errors (private mode, storage restrictions, etc.)
  }

  updateGoogleConsent(consent);
}

export function hasMarketingConsent() {
  return getStoredMarketingConsent() === "granted";
}

export function trackContactFormConversion() {
  if (typeof window === "undefined") {
    return;
  }

  if (!hasMarketingConsent() || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_CONTACT_CONVERSION_ID,
  });
}

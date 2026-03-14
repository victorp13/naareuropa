"use client";

import { useEffect, useState } from "react";
import {
  getStoredMarketingConsent,
  setMarketingConsent,
  updateGoogleConsent,
} from "@/lib/google-ads";

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const storedConsent = getStoredMarketingConsent();

    if (storedConsent === null) {
      setShowBanner(true);
      return;
    }

    updateGoogleConsent(storedConsent);
  }, []);

  if (!showBanner) {
    return null;
  }

  function handleChoice(consent: "granted" | "denied") {
    setMarketingConsent(consent);
    setShowBanner(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-700">
          Wij gebruiken alleen advertentiecookies na uw toestemming om Google Ads-conversies
          te meten.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleChoice("denied")}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Weigeren
          </button>
          <button
            type="button"
            onClick={() => handleChoice("granted")}
            className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}

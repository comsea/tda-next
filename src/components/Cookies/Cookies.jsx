'use client'

import { useEffect } from "react";
import Script from "next/script";

const CookieConsent = () => {
  useEffect(() => {
    const loadConsentScript = () => {
      const script = document.createElement("script");
      script.src = "https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js";
      script.charset = "UTF-8";
      script.async = true;
      script.onload = () => {
        if (window.cookieconsent) {
          window.cookieconsent.run({
            "notice_banner_type": "simple",
            "consent_type": "express",
            "palette": "light",
            "language": "fr",
            "page_load_consent_levels": ["strictly-necessary"],
            "notice_banner_reject_button_hide": false,
            "preferences_center_close_button_hide": false,
            "page_refresh_confirmation_buttons": false,
          });
        }
      };
      document.body.appendChild(script);
    };

    loadConsentScript();
  }, []);

  return (
    <>
      <Script
        id="google-tag-manager"
        type="text/plain"
        data-cookie-consent="tracking"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6PQ9FQBFVK"
      />
      <Script id="google-analytics" type="text/plain" data-cookie-consent="tracking">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6PQ9FQBFVK');
        `}
      </Script>
      <noscript>
        Free cookie consent management tool by <a href="https://www.termsfeed.com/" rel="nofollow">TermsFeed</a>
      </noscript>
    </>
  );
};

export default CookieConsent;

import Script from "next/script";
import React from "react";

declare global {
  interface Window {
    initCookieConsent: any;
  }
}

export const Consent = () => {
  return (
    <Script
      src="/libs/cookieconsent.js"
      onLoad={() => {
        const cc = window.initCookieConsent();

        cc.run({
          current_lang: "en",
          gui_options: {
            consent_modal: {
              layout: "cloud",
              position: "bottom center",
              transition: "slide",
              swap_buttons: false,
            },
            settings_modal: {
              layout: "box",
              transition: "slide",
            },
          },
          languages: {
            en: {
              consent_modal: {
                title: null,
                description:
                  'This website uses cookies to ensure you get the best experience on our website. Read our <a href="/cookie-policy">cookie policy</a>.',
                primary_btn: {
                  text: "Yes, I accept cookies",
                  role: "accept_all",
                },
              },
              settings_modal: {
                title: "cookie title",
                save_settings_btn: "Save settings",
                accept_all_btn: "Accept all",
                reject_all_btn: "Reject all",
                close_btn_label: "Close",
                cookie_table_headers: [],
                blocks: [],
              },
            },
          },
        });
      }}
    />
  );
};

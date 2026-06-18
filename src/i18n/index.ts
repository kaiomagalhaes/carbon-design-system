/**
 * i18n for the design system's story examples.
 *
 * The components are presentational — they receive all copy via props/children —
 * so localization lives at the example layer. English and Spanish are the only
 * supported languages.
 *
 * Each story registers its own strings with `i18n.addResourceBundle(...)` under a
 * component-named namespace, so there is no central dictionary to coordinate. The
 * active language is driven by the "Language" toolbar toggle (see .storybook/preview).
 */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const SUPPORTED_LOCALES = ["en", "es"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LOCALES,
    defaultNS: "common",
    ns: ["common"],
    resources: {
      en: { common: {} },
      es: { common: {} },
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;

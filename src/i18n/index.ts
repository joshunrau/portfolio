import en from "./locales/en.json";
import fr from "./locales/fr.json";

export const languages = ["en", "fr"] as const;

export type Language = (typeof languages)[number];

export const translations: Record<Language, Partial<typeof en>> = { en, fr };

export type TranslationKey = keyof (typeof translations)[Language];

export function extractLanguage(url: URL) {
  const locale = url.pathname.split("/")[1];
  if (locale === "fr") {
    return locale;
  }
  return "en";
}

export function useTranslations(url: URL) {
  const resolvedLanguage = extractLanguage(url);
  const t = (key: TranslationKey) => {
    return translations[resolvedLanguage][key] || translations["en"][key]!;
  };
  return { resolvedLanguage, t };
}

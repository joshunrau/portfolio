import en from "./locales/en.json";
import fr from "./locales/fr.json";

export const languages = {
  en: "English",
  fr: "Français"
};

export type Locale = keyof typeof languages;

export const defaultLang = "en" satisfies Locale;

export const translations: Record<Locale, Partial<typeof en>> = { en, fr };

export function extractLocale(url: URL) {
  const locale = url.pathname.split("/")[1];
  if (locale in translations) {
    return locale as keyof typeof translations;
  }
  return defaultLang;
}

export function useTranslations(url: URL) {
  const locale = extractLocale(url);
  const t = (key: keyof (typeof translations)[typeof defaultLang]) => {
    return (translations[locale][key] || translations[defaultLang][key])!;
  };
  return { locale, t };
}

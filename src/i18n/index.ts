import en from "./locales/en.json";
import fr from "./locales/fr.json";

export const languages = {
  en: "English",
  fr: "Français"
};

export type Language = keyof typeof languages;

export const defaultLang = "en" satisfies Language;

export const translations: Record<Language, Partial<typeof en>> = { en, fr };

export function extractLanguage(url: URL) {
  const locale = url.pathname.split("/")[1];
  if (locale in translations) {
    return locale as keyof typeof translations;
  }
  return defaultLang;
}

export function useTranslations(url: URL) {
  const resolvedLanguage = extractLanguage(url);
  const t = (key: keyof (typeof translations)[typeof defaultLang]) => {
    return (translations[resolvedLanguage][key] || translations[defaultLang][key])!;
  };
  return { resolvedLanguage, t };
}

import index from './translations/index.json';
import { get } from './utils';

type ExtractTranslationKey<T extends { [key: string]: unknown }, Key = keyof T> = Key extends string
  ? T[Key] extends { [key: string]: unknown }
    ? T[Key] extends { [K in Language]: string }
      ? Key
      : `${Key}.${ExtractTranslationKey<T[Key]>}`
    : `${Key}`
  : never;

type Translations = typeof translations;

type Language = 'en' | 'fr';

type TranslationKey = ExtractTranslationKey<Translations>;

const translations = { index };

export const useTranslations = (url: URL) => {
  const resolvedLanguage = url.pathname.split('/')[1] === 'fr' ? 'fr' : 'en';
  const altLanguage = resolvedLanguage === 'en' ? 'fr' : 'en';
  return {
    altLanguage,
    altURL: new URL(url.href.replace(`/${resolvedLanguage}`, `/${altLanguage}`)),
    resolvedLanguage,
    t: (key: TranslationKey) => {
      const value = get(translations, key);
      if (typeof value === 'string') {
        return value;
      }
      return value[resolvedLanguage];
    },
    translatePath: (path: string) => {
      return `/${resolvedLanguage}${path}`;
    }
  } as const;
};

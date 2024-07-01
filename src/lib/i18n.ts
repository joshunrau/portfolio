import { page } from '$app/stores';
import { derived } from 'svelte/store';

import common from '../translations/common.json';
import index from '../translations/index.json';
import { get, isPlainObject } from './utils/core';

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

const translations = { common, index };

export const i18n = derived(page, ($page) => {
  const resolvedLanguage = $page.params.locale === 'fr' ? 'fr' : 'en';
  const altLanguage = resolvedLanguage === 'en' ? 'fr' : 'en';
  return {
    altLanguage,
    resolvedLanguage,
    t: (key: TranslationKey) => {
      const value = get(translations, key);
      if (!isPlainObject(value)) {
        return value;
      }
      return value[resolvedLanguage];
    }
  } as const;
});

export type { Language };

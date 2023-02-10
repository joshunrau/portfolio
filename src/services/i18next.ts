import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          greeting: "Hi, I'm Josh",
          slogan: 'I build websites.'
        }
      },
      fr: {
        translation: {
          greeting: "Bonjour, je m'appelle Josh",
          slogan: 'Je crée des sites web'
        }
      }
    },
    returnObjects: true,
    supportedLngs: ['en', 'fr']
  });

export default i18next;

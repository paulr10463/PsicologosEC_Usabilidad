import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';
import zhTranslation from './locales/zh/translation.json';

const resources = {
  en: { translation: enTranslation },
  fr: { translation: frTranslation },
  zh: { translation: zhTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma base (español en este caso)
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
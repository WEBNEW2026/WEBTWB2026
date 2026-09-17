import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationID from './locales/id/translation.json';
import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh/translation.json';
import translationDE from './locales/de/translation.json';
import translationJA from './locales/ja/translation.json';
import translationKO from './locales/ko/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
    id: { translation: translationID },
    en: { translation: translationEN },
    zh: { translation: translationZH },
    de: { translation: translationDE },
    ja: { translation: translationJA },
    ko: { translation: translationKO },
    fr: { translation: translationFR },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'id',
        supportedLngs: ['id', 'en', 'zh', 'de', 'ja', 'ko', 'fr'],
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

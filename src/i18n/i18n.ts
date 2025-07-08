import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import authEn from './locales/en/auth.json';
import authRu from './locales/ru/auth.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		ns: ['auth'],
		resources: {
			en: { auth: authEn },
			ru: { auth: authRu },
		},
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
		},
	});

export default i18n;

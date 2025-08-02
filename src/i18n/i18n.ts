import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import authEn from './locales/en/auth.json';
import authRu from './locales/ru/auth.json';

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		ns: ['auth', 'login'],
		resources: {
			en: { auth: authEn, login: {} },
			ru: { auth: authRu, login: {} },
		},
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ['localStorage'],
			caches: ['localStorage'],
		},
	});

export default i18n;

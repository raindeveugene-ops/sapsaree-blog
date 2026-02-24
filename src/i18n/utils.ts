import type { Lang } from '../consts';
import translations, { type TranslationKey } from './translations';

export function t(lang: Lang, key: TranslationKey): string {
	return translations[lang][key];
}

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (lang === 'en') return 'en';
	return 'ko';
}

export function getOtherLang(lang: Lang): Lang {
	return lang === 'ko' ? 'en' : 'ko';
}

export function switchLangInUrl(url: URL, targetLang: Lang): string {
	const parts = url.pathname.split('/');
	if (parts[1] === 'ko' || parts[1] === 'en') {
		parts[1] = targetLang;
	}
	return parts.join('/');
}

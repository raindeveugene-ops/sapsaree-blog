export const SITE_TITLE_KO = '삽살로그';
export const SITE_TITLE_EN = 'Sapsalog';
export const SITE_DESCRIPTION_KO = '여행, 육아, 리뷰, IT 이야기';
export const SITE_DESCRIPTION_EN = 'Travel, Parenting, Reviews, IT & Tech';

export const CATEGORIES = ['travel', 'parenting', 'review', 'tech'] as const;
export type Category = (typeof CATEGORIES)[number];
export type Lang = 'ko' | 'en';

export function getSiteTitle(lang: Lang): string {
	return lang === 'ko' ? SITE_TITLE_KO : SITE_TITLE_EN;
}

export function getSiteDescription(lang: Lang): string {
	return lang === 'ko' ? SITE_DESCRIPTION_KO : SITE_DESCRIPTION_EN;
}

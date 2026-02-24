import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE_KO, SITE_DESCRIPTION_KO } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE_KO,
		description: SITE_DESCRIPTION_KO,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${post.data.lang}/blog/${post.id}/`,
		})),
	});
}

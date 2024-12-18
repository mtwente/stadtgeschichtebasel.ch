import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		if (dev) {
			console.error(e);
		}
		error(404, `Could not find ${params.slug}`);
	}
}

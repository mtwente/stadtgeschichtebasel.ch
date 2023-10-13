import data from '$lib/data/archive.json';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad}*/
export async function load({ params }) {
	const path = params.path.endsWith('.html') ? params.path : `${params.path}.html`;
	const fullPath = `/index/${path}`;
	const foundEntry = data.find((entry) => entry.url === fullPath);

	if (foundEntry) {
		if (foundEntry.slug) {
			throw redirect(301, `/blog/${foundEntry.slug}`);
		}
		return { url: path };
	}

	throw error(404, `Could not find ${path}`);
}

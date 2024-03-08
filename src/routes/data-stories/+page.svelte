<script>
	import Container from '$lib/components/Container.svelte';
	import Head from '$lib/components/Head.svelte';
	import data from '$lib/data/datastories.json';
	import * as config from '$lib/config';
</script>

<Head title="Data Stories – {config.title}" jsonLdDataType="Article" />

<Container>
	<h1>Data Stories</h1>
	<p>Hier finden Sie alle Data Stories.</p>
	<ul class="posts">
		{#each data as { title, slug }}
			<li class="post">
				<a href="/data-stories/{slug}" class="title">{title}</a>
			</li>
		{/each}
	</ul>
</Container>

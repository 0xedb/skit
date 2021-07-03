<script context="module" lang="ts">
	// import type { Load } from '@sveltejs/kit';
	import type { JSONValue } from '@sveltejs/kit/types/endpoint';

	export async function load({ page, fetch, session, context }) {
		const js = await fetch('/test/ab', {method:'PATCH'}).then((res) => res.json());
        console.log(js)
		return { props: { age: 13, js }, status: 200 };
	}
</script>

<script lang="ts">
	export let age = 40;
	export let js = null;
</script>

<pre>yay!!</pre>
<h1>Welcome to SvelteKit--{age}!!</h1>
<pre>{JSON.stringify(js)}</pre>

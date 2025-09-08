import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/svelte-kit#configuration
	// for more information about the SvelteKit configuration options
	kit: {
		adapter: adapter()
	},

	// Consult https://svelte.dev/docs/preprocess-options
	// for more information about Svelte preprocessors
	preprocess: vitePreprocess()
};

export default config;

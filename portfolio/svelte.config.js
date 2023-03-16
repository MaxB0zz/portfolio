import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	router: {
		// ...
		link: {
			noTransition: true
		}
	}
};

export default config;

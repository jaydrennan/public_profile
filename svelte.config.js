// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/kit/vite';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess(),

// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter({
// 			out: 'build',
// 			env: {
// 			  host: '0.0.0.0', // This line is key
// 			  port: 5173
// 			}
// 		  }),
// 	}
// };

// export default config;


import adapter from '@sveltejs/adapter-node';
 
export default {
  kit: {
    adapter: adapter()
  }
};
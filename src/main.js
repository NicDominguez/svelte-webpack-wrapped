import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";
import "../node_modules/astro-in-svelte/dist/cjs/index";

import App from "./App.svelte";

const app = new App({
  target: document.body,
});

export default app;

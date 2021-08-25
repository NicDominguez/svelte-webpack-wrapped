import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";

import { defineCustomElements } from "@astrouxds/astro-web-components/loader";
defineCustomElements();

import App from "./App.svelte";

const app = new App({
  target: document.body,
});

export default app;

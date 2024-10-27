import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), icon()],
  site: 'https://alejando.github.io',
  base: '/wedding-y-and-g',
  site: 'https://yulisaygilberto.com'
});
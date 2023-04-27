import solid from "solid-start/vite";
import staticAdapter from "solid-start-static";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/solid-pages/",
  plugins: [solid({adapter: staticAdapter()})],
});

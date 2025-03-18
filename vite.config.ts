/// <reference types="vitest" />

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: { allowedHosts: true },
  plugins: [
    tailwindcss(),
    !process.env.VITEST ? reactRouter() : react(),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});

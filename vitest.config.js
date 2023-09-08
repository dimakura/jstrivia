/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  test: {
    globals: false,
    environment: "node",
    setupFiles: [],
    include: ["./src/**/*.test.js"],
    watchExclude: [".*\\/node_modules\\/.*", ".*\\/dist\\/.*"],
  },
});

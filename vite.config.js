import { execFileSync } from "node:child_process";
import { cpSync, rmSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function copySamples() {
  return {
    name: "copy-samples",
    buildStart() {
      rmSync("public/samples", { recursive: true, force: true });
      cpSync("samples", "public/samples", {
        recursive: true,
        filter: (src) => !src.includes("__pycache__") && !src.endsWith(".pyc"),
      });
      execFileSync("python3", ["scripts/pack_samples.py"], { stdio: "inherit" });
    },
  };
}

export default defineConfig({
  plugins: [react(), copySamples()],
  base: "./",
  server: {
    host: "127.0.0.1",
    port: 4173,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
  },
});

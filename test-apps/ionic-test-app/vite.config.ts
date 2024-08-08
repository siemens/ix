/// <reference types="vitest" />

import path from 'path';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import fs from 'fs-extra';

async function copyOptionalThemeStyle() {
  let style = '';
  try {
    const themePackage = await import.meta.resolve('@siemens/ix-brand-theme');
    const theme = path.join(themePackage.replace('file://', ''), '..', '..');

    fs.copySync(
      theme,
      path.join(__dirname, 'public', 'additional-theme', 'ix-brand-theme'),
      {
        filter: (src) => {
          return !src.includes('node_modules');
        },
      }
    );

    return true;
  } catch (e) {
    console.warn('Could not resolve ix-brand-theme package');
    console.error(e);
  }

  return false;
}

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    base: './',
    plugins: [react(), legacy()],
    define: {
      hasOptionalThemeInstalled: await copyOptionalThemeStyle(),
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  };
});

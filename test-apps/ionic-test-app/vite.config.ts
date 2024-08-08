/// <reference types="vitest" />

import path from 'path';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  let style = '';
  try {
    const themePackage = await import.meta.resolve('@siemens/ix-brand-theme');
    const cssPath = path.join(
      themePackage.replace('file://', ''),
      '..',
      'ix-brand-theme',
      'ix-brand-theme.css'
    );
    style = fs.readFileSync(cssPath, 'utf-8');
  } catch (e) {
    console.warn('Could not resolve ix-brand-theme package');
    console.error(e);
  }

  return {
    base: './',
    plugins: [react(), legacy()],
    define: {
      __THEME__: {
        style,
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  };
});

/// <reference types="vitest" />

import path from 'path';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import fs from 'fs-extra';

function copyAdditionalThemeIfPresent() {
  try {
    const additionalTheme = import.meta.resolve('@siemens/ix-corporate-theme');
    const basePath = path.join(
      additionalTheme.replace('file://', ''),
      '..',
      '..'
    );
    const targetPath = path.join(
      __dirname,
      'public',
      'additional-theme',
      'ix-corporate-theme'
    );
    const distPath = path.join(basePath, 'dist');

    fs.ensureDirSync(targetPath);
    fs.copySync(distPath, path.join(targetPath, 'dist'));

    return true;
  } catch (e) {
    console.log('Skip injecting additional theme');
    return false;
  }
}

// https://vitejs.dev/config/
export default defineConfig(async () => {
  copyAdditionalThemeIfPresent();
  return {
    base: './',
    plugins: [react(), legacy()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  };
});

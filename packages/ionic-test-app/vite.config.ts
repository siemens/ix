import path from 'path';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import fs from 'fs-extra';

function copyAdditionalThemeIfPresent() {
  try {
    const additionalTheme = import.meta.resolve('@siemens/ix-brand-theme');
    const basePath = path.join(
      additionalTheme.replace('file://', ''),
      '..',
      '..'
    );
    const targetPath = path.join(
      __dirname,
      'public',
      'additional-theme',
      'ix-brand-theme'
    );
    const distPath = path.join(basePath, 'dist');
    const loaderPath = path.join(basePath, 'loader');

    fs.ensureDirSync(targetPath);

    fs.copySync(distPath, path.join(targetPath, 'dist'));
    fs.copySync(loaderPath, path.join(targetPath, 'loader'));

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
  };
});

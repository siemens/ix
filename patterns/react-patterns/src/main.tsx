import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { corporateThemeAvailable } from './generated/corporate-theme-availability';

import Index from './routes/index';
import LoginOverlay from './routes/login-overlay/login-overlay';
import ChangePassword from './routes/change-password/change-password';
import PasswordCriteria from './routes/password-criteria/password-criteria';
import Upload from './routes/upload/upload';
import ErrorPage from './routes/error-page/error-page';

const getQueryParamsFromHash = () => {
  const [, queryString] = window.location.hash.split('?');
  return new URLSearchParams(queryString ?? '');
};

const applyThemeFromQueryParams = () => {
  const queryParams = getQueryParamsFromHash();
  const rawTheme = queryParams.get('theme');
  const rawColorSchema = queryParams.get('colorSchema');

  const fallbackTheme = corporateThemeAvailable ? 'brand' : 'classic';
  const resolvedTheme =
    rawTheme === 'brand' && !corporateThemeAvailable
      ? 'classic'
      : rawTheme ?? fallbackTheme;

  document.documentElement.setAttribute('data-ix-theme', resolvedTheme);

  if (rawColorSchema) {
    document.documentElement.setAttribute(
      'data-ix-color-schema',
      rawColorSchema
    );
    return;
  }

  document.documentElement.removeAttribute('data-ix-color-schema');
};

const ensureCorporateThemeLoaded = () => {
  if (!corporateThemeAvailable) {
    return Promise.resolve();
  }

  const href = `${import.meta.env.BASE_URL}brand-theme.css`;
  const alreadyLoaded = document.querySelector<HTMLLinkElement>(
    `link[data-ix-corporate-theme="true"]`
  );

  if (alreadyLoaded?.sheet) {
    return Promise.resolve();
  }

  if (alreadyLoaded) {
    return new Promise<void>((resolve) => {
      alreadyLoaded.addEventListener('load', () => resolve(), { once: true });
      alreadyLoaded.addEventListener('error', () => resolve(), { once: true });
    });
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.dataset.ixCorporateTheme = 'true';

  const themeLoadPromise = new Promise<void>((resolve) => {
    link.addEventListener('load', () => resolve(), { once: true });
    link.addEventListener('error', () => resolve(), { once: true });
  });

  document.head.appendChild(link);

  return themeLoadPromise;
};

const syncPreviewFrameState = () => {
  applyThemeFromQueryParams();
  void ensureCorporateThemeLoaded();
};

syncPreviewFrameState();
window.addEventListener('hashchange', syncPreviewFrameState);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login-overlay" element={<LoginOverlay />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/password-criteria" element={<PasswordCriteria />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/error-page" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

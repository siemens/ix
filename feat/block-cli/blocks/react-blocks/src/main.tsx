import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { corporateThemeAvailable } from './generated/corporate-theme-availability';
import { showLoadingOverlay } from './loading-overlay';

import Index from './routes/index';
import LoginOverlay from './routes/login-overlay/login-overlay';
import ChangePassword from './routes/change-password/change-password';

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

applyThemeFromQueryParams();
window.addEventListener('hashchange', applyThemeFromQueryParams);

const hideLoadingOverlay = showLoadingOverlay();

let themeLoadPromise = Promise.resolve();

if (corporateThemeAvailable) {
  const href = `${import.meta.env.BASE_URL}brand-theme.css`;
  const alreadyLoaded = document.querySelector<HTMLLinkElement>(
    `link[data-ix-corporate-theme="true"]`
  );

  if (alreadyLoaded?.sheet) {
    themeLoadPromise = Promise.resolve();
  } else if (alreadyLoaded) {
    themeLoadPromise = new Promise<void>((resolve) => {
      alreadyLoaded.addEventListener('load', () => resolve(), { once: true });
      alreadyLoaded.addEventListener('error', () => resolve(), { once: true });
    });
  } else {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset.ixCorporateTheme = 'true';
    themeLoadPromise = new Promise<void>((resolve) => {
      link.addEventListener('load', () => resolve(), { once: true });
      link.addEventListener('error', () => resolve(), { once: true });
    });
    document.head.appendChild(link);
  }
}

void hideLoadingOverlay(themeLoadPromise);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login-overlay" element={<LoginOverlay />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

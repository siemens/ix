import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { corporateThemeAvailable } from './generated/corporate-theme-availability';

import Index from './routes/index';
import LoginOverlay from './routes/login-overlay/login-overlay';
import ChangePassword from './routes/change-password/change-password';

if (corporateThemeAvailable) {
  const href = `${import.meta.env.BASE_URL}brand-theme.css`;
  const alreadyLoaded = document.querySelector(
    `link[data-ix-corporate-theme="true"]`
  );

  if (!alreadyLoaded) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset.ixCorporateTheme = 'true';
    document.head.appendChild(link);
  }
}

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

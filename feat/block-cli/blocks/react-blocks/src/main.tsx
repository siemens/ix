import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import Index from './routes/index';
import LoginOverlay from './routes/login-overlay/login-overlay';
import ChangePassword from './routes/change-password/change-password';

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

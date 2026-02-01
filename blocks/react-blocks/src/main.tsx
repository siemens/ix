import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import Index from './routes/index';
import ExamplePattern from './routes/example-01/index';
import UploadFiles from './routes/upload-01/upload-files';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/ix" element={<Index />} />
        <Route path="/ix/example-01" element={<ExamplePattern />} />
        <Route path="/ix/upload-01" element={<UploadFiles />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

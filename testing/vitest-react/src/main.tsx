import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

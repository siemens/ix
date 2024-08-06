import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ScreenOrientation } from '@capacitor/screen-orientation';

const container = document.getElementById('root');
const root = createRoot(container!);

/**
 * Listen for screen orientation changes and update the body element with the current orientation.
 */
async function screenOrientation() {
  const { type } = await ScreenOrientation.orientation();
  window.document.body.setAttribute('data-screen-orientation', type);

  ScreenOrientation.addListener('screenOrientationChange', ({ type }) => {
    window.document.body.setAttribute('data-screen-orientation', type);
  });
}

screenOrientation();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css';
import '@siemens/ix-icons/dist/css/ix-icons.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import React, { Suspense, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Routing = () => {
  useLayoutEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const theme = searchParams.get('theme');
    document.body.className = theme ?? 'theme-classic-dark';
  });
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes([
        {
          path: '/blueprints/dist/',
          element: <App />,
        },
        ...routes,
      ])}
    </Suspense>
  );
};

function Bootstrap() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Bootstrap />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

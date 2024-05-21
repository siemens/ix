/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles/global.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { IxApplicationContext } from '@siemens/ix-react';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <IxApplicationContext>
      <App />
    </IxApplicationContext>
  </React.StrictMode>
);

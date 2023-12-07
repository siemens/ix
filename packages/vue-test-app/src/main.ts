/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './preview-examples/styles/global.css';

import { ixPlugin } from '@siemens/ix-vue';
import { createApp } from 'vue';
import reportWebVitals from './reportWebVitals';
import Root from './Root.vue';

const app = createApp(Root);

app.use(ixPlugin);

app.mount('#root');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import { ixPlugin } from '@siemens/ix-vue';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(ixPlugin);

app.mount('#app');

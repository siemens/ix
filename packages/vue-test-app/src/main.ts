/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './preview-examples/global.css';

import { ixPlugin } from '@siemens/ix-vue';
import { createApp } from 'vue';
import Root from './Root.vue';

const app = createApp(Root);
app.use(ixPlugin);
app.mount('#root');

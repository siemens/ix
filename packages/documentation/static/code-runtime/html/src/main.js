/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css';
import './styles/styles.css';

(async () => {
  await applyPolyfills();
  await defineCustomElements();
})();

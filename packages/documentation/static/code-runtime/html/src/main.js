/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';
import './components/placeholder-logo'

(async () => {
  await applyPolyfills();
  await defineCustomElements();
})();

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';
import React from 'react';

function _Load() {
  return <></>;
}

export default React.lazy(async () => {
  await applyPolyfills();
  await defineCustomElements();

  return {
    default: _Load,
  };
});

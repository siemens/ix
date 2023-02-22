/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { Suspense } from 'react';
import Loader from './Loader';

export default function Root({ children }) {
  return (
    <>
      <BrowserOnly>
        {() => (
          <Suspense fallback={<></>}>
            <Loader></Loader>
          </Suspense>
        )}
      </BrowserOnly>
      {children}
    </>
  );
}

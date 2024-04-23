/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useLocation } from '@docusaurus/router';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    ste_statistic: {
      action: string;
      data: unknown;
    }[];
  }
}

export default function Root({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.ste_statistic = window.ste_statistic || [];
    window.ste_statistic.push({
      action: 'page.ready',
      data: {
        page: {
          path: pathname,
          country: 'de',
          language: 'de',
        },
      },
    });
  }, [pathname]);

  return <>{children}</>;
}

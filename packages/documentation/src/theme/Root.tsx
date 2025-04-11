/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useLocation } from '@docusaurus/router';
import { useEffect, useLayoutEffect } from 'react';

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
          country: 'WW',
          language: 'en',
        },
      },
    });
  }, [pathname]);

  useLayoutEffect(() => {
    const isAlreadyLoaded = document.head.querySelector(
      'meta[name="adobe-loaded"]'
    );
    if (!isAlreadyLoaded) {
      const script = document.createElement('script');
      script.setAttribute('no-cors', '');
      script.src = '//w3.siemens.com/ote/ote_config.js';
      document.head.appendChild(script);

      const script2 = document.createElement('script');
      script2.src = '//w3.siemens.com/ote/global/ote.js';
      document.head.appendChild(script2);

      const script3 = document.createElement('script');
      script3.src =
        'https://assets.adobedtm.com/5dfc7d97c6fb/7699a47b720a/launch-2157063140e5.min.js';
      script3.async = true;
      document.head.appendChild(script3);

      const meta = document.createElement('meta');
      meta.name = 'adobe-loaded';
      meta.content = 'true';

      document.head.appendChild(meta);
    }
  }, []);

  return <>{children}</>;
}

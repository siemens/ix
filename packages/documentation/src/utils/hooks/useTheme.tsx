/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useLayoutEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DocusaurusContext } from '@docusaurus/types';

export const getDefaultTheme = (context: DocusaurusContext) => {
  if (!context) {
    return 'theme-classic-dark';
  }
  return context.siteConfig.customFields.withBrandTheme
    ? 'theme-brand-dark'
    : 'theme-classic-dark';
};

export function useTheme() {
  const context = useDocusaurusContext();
  const [theme, setTheme] = useState<string | null>(getDefaultTheme(context));

  useLayoutEffect(() => {
    const applyDefaultTheme = () => {
      const theme = getDefaultTheme(context);
      let newTheme = theme;
      document.body.classList.forEach((className) => {
        if (className.includes('theme-')) {
          newTheme = className;
        }
      });
      setTheme(newTheme);
    };

    const mutationObserver = new MutationObserver(() => applyDefaultTheme());

    mutationObserver.observe(document.body, {
      attributeFilter: ['class'],
      attributes: true,
    });

    applyDefaultTheme();

    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  return theme;
}

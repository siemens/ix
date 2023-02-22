/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { getDefaultTheme } from './config';

export interface DemoProps {
  name: string;
  theme?: string;
  height?: string;
  noMargin?: boolean;
}

export default function Demo(props: DemoProps) {
  const context = useDocusaurusContext();
  const [error] = useState(false);

  const baseUrl = useBaseUrl('/');
  const [base, setBase] = useState('');

  const [theme, setTheme] = useState<string>(getDefaultTheme(context));

  const { preferredVersion } = useDocsPreferredVersion();

  useEffect(() => {
    const currentVersion: string = preferredVersion?.name;
    if (currentVersion === undefined || currentVersion === 'current') {
      setBase(
        baseUrl +
          `webcomponent-examples/dist/preview-examples/${props.name}.html`
      );
    } else {
      setBase(
        baseUrl +
          `versioned_examples/version-${currentVersion}/webcomponent-examples/dist/preview-examples/${props.name}.html`
      );
    }
  }, [baseUrl, preferredVersion?.name, props.name]);

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

  return (
    <>
      {!error ? (
        <iframe
          src={`${base}?theme=${props.theme ? props.theme : theme}${
            props.noMargin ? '&no-margin=true' : ''
          }`}
          style={{
            width: '100%',
            height: `${props.height}`,
          }}
        ></iframe>
      ) : (
        <span>
          No component preview found for {props.name} in version{' '}
          {preferredVersion?.name}
        </span>
      )}
    </>
  );
}

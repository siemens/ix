// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { DEFAULT_THEME } from './config';
import styles from './HTMLPreview.module.css';

export default function Demo(props: {
  name: string;
  theme?: string;
  height?: string;
  noMargin?: boolean;
}) {
  const [error] = useState(false);

  const baseUrl = useBaseUrl('/');
  const [base, setBase] = useState('');

  const [theme, setTheme] = useState<string>(DEFAULT_THEME);

  const { preferredVersion } = useDocsPreferredVersion();

  useEffect(() => {
    const currentVersion: string = preferredVersion?.name;
    if (currentVersion === undefined || currentVersion === 'current') {
      setBase(baseUrl + `webcomponent-examples/${props.name}.html`);
    } else {
      setBase(
        baseUrl +
          `versioned_examples/version-${currentVersion}/webcomponent-examples/${props.name}.html`
      );
    }
  }, [baseUrl, preferredVersion?.name, props.name]);

  useLayoutEffect(() => {
    const applyDefaultTheme = () => {
      let newTheme = DEFAULT_THEME;
      document.body.classList.forEach((className) => {
        if (className.includes('theme-')) {
          newTheme = className;
        }
      });
      setTheme(newTheme);
    };

    const mutationObserver = new MutationObserver(applyDefaultTheme);

    mutationObserver.observe(document.body, {
      attributeFilter: ['class'],
      attributes: true,
    });

    applyDefaultTheme();

    return () => {
      mutationObserver.disconnect();
    };
  });

  return (
    <>
      {!error ? (
        <iframe
          src={`${base}?theme=${props.theme ? props.theme : theme}${
            props.noMargin ? '&no-margin=true' : ''
          }`}
          className={clsx(styles.preview)}
          style={{
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

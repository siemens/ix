/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useLayoutEffect, useState } from 'react';
import { getDefaultTheme } from '../config';

export interface EmbeddedIFrameProps {
  name: string;
  theme?: string;
  height?: string;
  noMargin?: boolean;
}

const EmbeddedReactIFrame = (props: EmbeddedIFrameProps) => {
  const context = useDocusaurusContext();
  const [theme, setTheme] = useState<string>(getDefaultTheme(context));
  const baseUrl = useBaseUrl('/');

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

  const url = `${baseUrl}react-test-app/#/${props.name}?theme=${
    props.theme ? props.theme : theme
  }`;

  return (
    <>
      <iframe
        style={{
          width: '100%',
          height: `${props.height}`,
        }}
        src={`${url}`}
      ></iframe>
    </>
  );
};

const EmbeddedIFrame = (props: EmbeddedIFrameProps) => {
  return <EmbeddedReactIFrame {...props} />;
};

export default EmbeddedIFrame;

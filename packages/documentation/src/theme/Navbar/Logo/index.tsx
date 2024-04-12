/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useLayoutEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function NavbarLogo(): JSX.Element {
  const base = useBaseUrl('/');
  const [logo, setLogo] = useState('');

  const updateLogo = () => {
    if (!document.body.className.includes('theme-')) {
      setLogo(`${base}img/logo.svg`);
      return;
    }
    if (document.body.className.includes('-dark')) {
      setLogo(`${base}img/logo.svg`);
    } else {
      setLogo(`${base}img/logo-dark.svg`);
    }
  };

  useLayoutEffect(() => {
    updateLogo();

    const mutationObserver = new MutationObserver(() => {
      updateLogo();
    });

    mutationObserver.observe(document.body, {
      attributeFilter: ['class'],
      attributes: true,
    });
  }, []);

  return (
    <div className="navbar__brand">
      <img
        className="navbar__logo"
        src={logo}
        alt={'Siemens Industrial Experience'}
        aria-label={'Siemens Industrial Experience'}
      ></img>
    </div>
  );
}

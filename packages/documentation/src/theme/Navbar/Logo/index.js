/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useState } from 'react';

export default function NavbarLogo() {
  const base = useBaseUrl('/');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    const isDarkVariant = () => document.body.className.includes('-dark');

    const updateLogo = () => {
      if (isDarkVariant()) {
        setLogo(`${base}img/logo.svg`);
      } else {
        setLogo(`${base}img/logo-dark.svg`);
      }
    };

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
      <a href={base} target="_self">
        <img className="navbar__logo" src={logo} alt={"Siemens Industrial Experience"} aria-label={"Siemens Industrial Experience"}></img>
      </a>
    </div>
  );
}

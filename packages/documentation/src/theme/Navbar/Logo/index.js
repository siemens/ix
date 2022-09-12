// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

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
        <img className="navbar__logo" src={logo}></img>
      </a>
    </div>
  );
}

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconMoon, iconSun } from '@siemens/ix-icons/icons';
import React from 'react';
import Button from '../Button';
import { usePlaygroundThemeVariant } from '@site/src/hooks/use-playground-theme';

export default function ThemeVariantToggle() {
  const { playgroundThemeVariant, setPlaygroundThemeVariant } =
    usePlaygroundThemeVariant();

  return (
    <Button
      onClick={() => {
        setPlaygroundThemeVariant(
          playgroundThemeVariant === 'light' ? 'dark' : 'light'
        );
      }}
    >
      {React.createElement('ix-icon', {
        name: playgroundThemeVariant === 'light' ? iconSun : iconMoon,
      })}
      <span className="ButtonText">
        {playgroundThemeVariant === 'light' ? 'Light' : 'Dark'}
      </span>
    </Button>
  );
}

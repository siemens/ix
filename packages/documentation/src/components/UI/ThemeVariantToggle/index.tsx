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

export default function ThemeVariantToggle({
  isLight,
  onChangeColorMode,
}: Readonly<{
  isLight?: boolean;
  onChangeColorMode: () => void;
}>) {
  return (
    <Button onClick={onChangeColorMode}>
      {React.createElement('ix-icon', {
        name: isLight ? iconSun : iconMoon,
        size: '16',
      })}
      <span className="ButtonText">{isLight ? 'Light' : 'Dark'}</span>
    </Button>
  );
}

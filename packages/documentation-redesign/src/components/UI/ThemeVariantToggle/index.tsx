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
export default function ThemeVariantToggle({ isLight }: { isLight?: boolean }) {
  return (
    <Button>
      {React.createElement('ix-icon', {
        name: isLight ? iconSun : iconMoon,
      })}
      {isLight ? 'Light' : 'Dark'}
    </Button>
  );
}

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ReactFrameworkDelegate } from '../delegate';

export const IxContext = React.createContext<{
  delegate: ReactFrameworkDelegate;
} | null>(null);

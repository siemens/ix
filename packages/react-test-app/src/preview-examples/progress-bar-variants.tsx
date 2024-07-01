/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxProgressBar } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxProgressBar value={50} variant='primary'></IxProgressBar>

      <IxProgressBar value={50} variant='alarm'></IxProgressBar>

      <IxProgressBar value={50} variant='critical'></IxProgressBar>

      <IxProgressBar value={50} variant='warning'></IxProgressBar>

      <IxProgressBar value={50} variant='info'></IxProgressBar>

      <IxProgressBar value={50} variant='neutral'></IxProgressBar>

      <IxProgressBar value={50} variant='success'></IxProgressBar>
    </>
  );
};

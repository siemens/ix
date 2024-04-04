/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { IxButton } from '../../components';

const Index = () => {
  return (
    <>
      <IxButton onClick={() => console.log('Hallo')}>Hallo</IxButton>
    </>
  );
};

export default Index;

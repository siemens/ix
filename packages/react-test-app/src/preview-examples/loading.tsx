/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { showModalLoading } from '@siemens/ix';
import { IxButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  const startLoading = () => {
    let count = 0;
    const progress = showModalLoading('Loading 0/2');
    const interval = setInterval(() => {
      count++;
      progress.update(`Loading ${count}/2`);

      if (count === 2) {
        progress.finish('Done');
        clearInterval(interval);
      }
    }, 1000);
  };
  return <IxButton onClick={() => startLoading()}>Show loading</IxButton>;
};

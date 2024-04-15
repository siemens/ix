/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton } from '@siemens/ix-react';
import React from 'react';

export default () => (
  <>
    <div className="btn-group">
      <IxButton variant="primary" outline>
        Left
      </IxButton>
      <IxButton variant="primary">Middle</IxButton>
      <IxButton variant="primary" outline>
        Right
      </IxButton>
    </div>
  </>
);

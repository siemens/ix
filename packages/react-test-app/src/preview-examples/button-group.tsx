/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IxButton } from '@siemens/ix-react';
import React from 'react';

export const ButtonGroup: React.FC = () => (
  <>
    <div className="btn-group">
      <IxButton variant="Primary" outline>
        Left
      </IxButton>
      <IxButton variant="Primary">Middle</IxButton>
      <IxButton variant="Primary" outline>
        Right
      </IxButton>
    </div>
  </>
);

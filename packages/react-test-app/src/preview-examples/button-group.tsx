// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

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

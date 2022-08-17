/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
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

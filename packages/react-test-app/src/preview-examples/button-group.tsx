/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { CwButton } from '@siemens/ix-react';
import React from 'react';

export const ButtonGroup: React.FC = () => (
  <>
    <div className="btn-group">
      <CwButton variant="Primary" outline>
        Left
      </CwButton>
      <CwButton variant="Primary">Middle</CwButton>
      <CwButton variant="Primary" outline>
        Right
      </CwButton>
    </div>
  </>
);

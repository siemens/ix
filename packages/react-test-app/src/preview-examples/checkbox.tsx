// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import React from 'react';

export const Checkbox: React.FC = () => {
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <input type="checkbox" id="checkbox_01" />
        <label htmlFor="checkbox_01">Simple checkbox</label>
      </div>

      <div>
        <input type="checkbox" id="checkbox_02" disabled />
        <label htmlFor="checkbox_02">Disabled checkbox</label>
      </div>
    </>
  );
};

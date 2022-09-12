// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import React from 'react';

export const TextareaReadonly: React.FC = () => {
  return (
    <textarea
      className="form-control"
      placeholder="Enter text here"
      readOnly
    ></textarea>
  );
};

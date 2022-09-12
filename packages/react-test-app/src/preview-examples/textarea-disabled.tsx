// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import React from 'react';

export const TextareaDisabled: React.FC = () => {
  return (
    <textarea
      className="form-control"
      placeholder="Enter text here"
      disabled
    ></textarea>
  );
};

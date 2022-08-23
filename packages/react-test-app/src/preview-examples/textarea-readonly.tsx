/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
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

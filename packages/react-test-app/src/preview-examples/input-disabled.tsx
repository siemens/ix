/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import React from 'react';

export const InputDisabled: React.FC = () => {
  return (
    <form className="needs-validation m-2">
      <input
        className="form-control"
        defaultValue="Some example text"
        placeholder="Enter text here"
        type="text"
        disabled
      />
    </form>
  );
};

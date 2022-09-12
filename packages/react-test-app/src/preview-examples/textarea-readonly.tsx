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

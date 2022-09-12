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

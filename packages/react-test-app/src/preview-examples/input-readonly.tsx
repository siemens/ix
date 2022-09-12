import React from 'react';

export const InputReadonly: React.FC = () => {
  return (
    <form className="needs-validation m-2">
      <input
        className="form-control"
        defaultValue="Some example text"
        placeholder="Enter text here"
        type="text"
        readOnly
      />
    </form>
  );
};

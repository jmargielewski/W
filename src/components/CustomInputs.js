import React from 'react';

const getValidClassName = (meta) => {
  if (meta.active) {
    return 'active';
  }
  if (meta.touched && meta.invalid) {
    return 'invalid';
  }
  if (meta.touched && meta.valid) {
    return 'valid';
  }
  return null;
};

const customInput = (props) => {
  const {
    label, type, input, meta, autocomplete,
  } = props;
  return (
    <div
      className={
        `input-container
        ${meta.dirty && 'filledIn'}
        ${getValidClassName(meta)}`
      }
    >
      <input
        { ...input }
        type={ type }
        autoComplete={autocomplete}
      />
      <label>{label}</label>
      {(meta.error && meta.touched) && (
        <div className="error-text" >
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default customInput;

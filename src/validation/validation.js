/* eslint consistent-return: 0 */

export const isRequire = value => (
  value ? undefined : 'Required field'
);

// !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
export const validateEmail = value => (
  value.includes('@') ? undefined : 'Email is invalid'
);

export const matchesPassword = (value, bothValues) => (
  value === bothValues.password ? undefined : 'Passwords doesn/\'t match'
);

// !/^(0|[1-9][0-9]{9})$/i
export const isNumber = value => (
  !Number.isNaN(Number(value)) ? undefined : 'Pass only numbers'
);

import { useState } from 'react';

export default (key: string): [string, any] => {
  const [value, setValue] = useState<string>(() => {
    return localStorage.getItem(key) || '';
  });
  return [
    value,
    (value: string) => {
      setValue(value);
      localStorage.setItem(key, value);
    },
  ];
};

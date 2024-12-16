import { useState } from 'react';

/**
 * Custom hook for managing a text input field
 * @param initialValue - The initial value of the text input
 * @returns An array with value, onChange handler, and reset function
 */
const useTextInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, onChange, reset] as const;
};

export default useTextInput;

import { useState } from 'react';

const useRadioButtonGroup = (initialValue: string) => {
  const [selectedValue, setSelectedValue] = useState<string>(initialValue);

  const onSelect = (value: string) => {
    setSelectedValue(value);
  };

  const reset = () => {
    setSelectedValue(initialValue);
  };

  return [selectedValue, onSelect, reset] as const;
};

export default useRadioButtonGroup;

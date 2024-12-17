interface PTextInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export default function TextInput({ value, onChange, placeholder = '', className = '' }: PTextInput) {
  return (
    <input
      className={
        'rounded-sm border border-input px-4 py-2.5 text-body2 placeholder:text-disabled focus:outline-activate ' +
        className
      }
      value={value}
      onChange={onChange}
      type='text'
      placeholder={placeholder}
    />
  );
}

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
        'text-body2 px-4 py-2.5 border border-input rounded-sm focus:outline-none placeholder:text-disabled' + className
      }
      value={value}
      onChange={onChange}
      type='text'
      placeholder={placeholder}
    />
  );
}

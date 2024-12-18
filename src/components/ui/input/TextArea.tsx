import React, { useRef } from 'react';

interface PTextArea {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
}

const TextArea: React.FC<PTextArea> = ({ value, onChange, placeholder = '', className = '' }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <textarea
      className={
        'border-input text-body2 placeholder:text-disabled focus:outline-activate w-full resize-none overflow-hidden rounded-sm border px-4 py-2.5 ' +
        className
      }
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default TextArea;

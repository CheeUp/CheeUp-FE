import React, { useRef } from 'react';

interface PTextArea {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
}

export default function TextArea({ value, onChange, placeholder = '', className = '' }: PTextArea) {
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
        'w-full resize-none overflow-hidden rounded-sm border border-input px-4 py-2.5 text-body2 placeholder:text-disabled focus:outline-activate ' +
        className
      }
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

import { PropsWithChildren } from 'react';

interface PButton extends PropsWithChildren {
  type?: 'filled' | 'outlined' | 'delete-filled' | 'delete-outlined' | 'cancle-outlined';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const Button = ({ children, type = 'filled', onClick, className = '' }: PButton) => {
  const { borderColor, bgColor, textColor } = buttonStyles[type];

  return (
    <button
      className={`cursor-pointer rounded-sm border px-4 py-2 text-body2 ${borderColor} ${bgColor} ${textColor} ${className} ease duration-300 hover:scale-110 active:scale-100`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const buttonStyles = {
  filled: { borderColor: 'border-primary', bgColor: 'bg-primary', textColor: 'text-white' },
  outlined: { borderColor: 'border-primary', bgColor: 'bg-white', textColor: 'text-primary' },
  'delete-filled': { borderColor: 'border-action', bgColor: 'bg-action', textColor: 'text-white' },
  'delete-outlined': { borderColor: 'border-action', bgColor: 'bg-white', textColor: 'text-action' },
  'cancle-outlined': { borderColor: 'border-input', bgColor: 'bg-white', textColor: 'text-disabled' },
};

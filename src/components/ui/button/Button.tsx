import { ReactNode } from 'react';

interface PButton {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'filled' | 'outlined' | 'delete-filled' | 'delete-outlined' | 'cancel-outlined';
  className?: string;
}

const Button: React.FC<PButton> = ({ children, type = 'filled', onClick, className = '' }) => {
  const { borderColor, bgColor, textColor } = buttonStyles[type];

  return (
    <button
      className={`text-body2 cursor-pointer rounded-sm border px-4 py-2 ${borderColor} ${bgColor} ${textColor} ${className} hover:opacity-90`}
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
  'cancel-outlined': { borderColor: 'border-input', bgColor: 'bg-white', textColor: 'text-disabled' },
};

export default Button;

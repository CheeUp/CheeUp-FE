interface PButton {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export default function Button({
  value,
  onClick,
  borderColor = 'border-primary',
  bgColor = 'bg-white',
  textColor: fontColor = 'text-primary',
  className = '',
}: PButton) {
  return (
    <button
      className={`px-4 py-2 rounded-sm text-body2 cursor-pointer border ${borderColor} ${bgColor} ${fontColor} ${className}
      duration-300 ease hover:scale-110 active:scale-100`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

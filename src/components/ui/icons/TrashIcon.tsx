import React from 'react';

const TrashIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={`h-5 w-5 ${className}`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 18M9 18H15M19.5 6.75L17.25 20.25C17.25 21.0784 16.5784 21.75 15.75 21.75H8.25C7.42157 21.75 6.75 21.0784 6.75 20.25L4.5 6.75M15 10.5V15M9 10.5V15M10.5 6.75V5.25C10.5 4.42157 11.1716 3.75 12 3.75H15C15.8284 3.75 16.5 4.42157 16.5 5.25V6.75'
      />
    </svg>
  );
};

export default TrashIcon;

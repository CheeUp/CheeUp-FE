import React from 'react';

interface PSidebarItem {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<PSidebarItem> = ({ label, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-sm px-4 py-3 text-body2 transition-all ${isActive ? 'bg-primary font-semibold text-white' : 'text-deepgray hover:text-primary-light hover:font-semibold'} `}
    >
      {label}
    </div>
  );
};

export default SidebarItem;

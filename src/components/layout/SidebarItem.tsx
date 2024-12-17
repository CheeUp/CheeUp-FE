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
      className={`cursor-pointer rounded-md px-3 py-2 text-body2 transition-all ${isActive ? 'bg-primary font-semibold text-white' : 'hover:bg-primary-light hover:text-white'} `}
    >
      <span>{label}</span>
    </div>
  );
};

export default SidebarItem;

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
      className={`text-body2 cursor-pointer rounded-sm px-4 py-3 transition-all ${isActive ? 'bg-primary font-semibold text-white' : 'text-deepgray hover:font-semibold hover:text-primary-light'} `}
    >
      {label}
    </div>
  );
};

export default SidebarItem;

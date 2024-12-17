import React from "react";

interface SidebarItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
      group py-2 px-3 rounded-md cursor-pointer transition-all text-body2 
      ${isActive ? "bg-primary text-white font-semibold" : "hover:bg-primary-light hover:text-white"}
    `}
    >
      <span>{label}</span>
    </div>
  );
};

export default SidebarItem;

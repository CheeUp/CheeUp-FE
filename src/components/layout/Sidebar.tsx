import React, { useState } from "react";
import SidebarItem from "./SidebarItem";

interface SidebarSection {
  title: string;
  items: string[];
}

interface SidebarProps {
  sections: SidebarSection[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <div className="w-64 p-4 bg-white rounded-lg">
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-body2 font-semibold text-primary mb-2 px-3">
            {section.title}
          </h3>
          {section.items.map((item) => (
            <SidebarItem
              key={item}
              label={item}
              isActive={activeItem === item}
              onClick={() => setActiveItem(item)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

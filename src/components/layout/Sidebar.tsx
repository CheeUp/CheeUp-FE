import React, { useState } from 'react';
import SidebarItem from './SidebarItem';

interface SidebarSection {
  title: string;
  items: string[];
}

interface PSidebar {
  sections: SidebarSection[];
}

const Sidebar: React.FC<PSidebar> = ({ sections }) => {
  const [activeItem, setActiveItem] = useState<string>('');

  return (
    <div className='w-64 rounded-lg bg-white p-4'>
      {sections.map((section) => (
        <div key={section.title} className='mb-4'>
          <h3 className='mb-2 px-3 text-body2 font-semibold text-primary'>{section.title}</h3>
          {section.items.map((item) => (
            <SidebarItem key={item} label={item} isActive={activeItem === item} onClick={() => setActiveItem(item)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

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
    <div className='flex flex-col gap-8 w-64 rounded-lg bg-white py-6 px-2'>
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className='mb-2 px-4 text-detail font-semibold text-primary'>{section.title}</h3>
          {section.items.map((item) => (
            <SidebarItem key={item} label={item} isActive={activeItem === item} onClick={() => setActiveItem(item)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

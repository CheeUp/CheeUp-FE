import SidebarItem from '@/components/layout/SidebarItem';
import React, { useState } from 'react';

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
    <div className='flex w-64 flex-col gap-8 rounded-lg bg-white px-2 py-6'>
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

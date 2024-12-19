import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import { H1 } from '@/components/ui/typography/Heading';
import Button from '@/components/ui/button/Button';

const sections = [
  {
    title: '소셜',
    items: ['인기 게시판', '익명 게시판', '자유 게시판'],
  },
  {
    title: '학습 게시판',
    items: ['알고리즘 문제 추천 게시판', 'Q&A'],
  },
];

interface PCommunityLayout {
  children: React.ReactNode;
}

const CommunityLayout: React.FC<PCommunityLayout> = ({ children }) => {
  const [activeItem, setActiveItem] = useState<string>('');

  useEffect(() => {
    if (!activeItem) {
      setActiveItem(sections[0].items[0]);
    }
  }, [activeItem]);

  const handleCreatePost = () => {};

  return (
    <div className='flex w-screen justify-center'>
      <div className='flex w-[1080px] justify-between'>
        <div className='mt-9'>
          <Sidebar sections={sections} activeItem={activeItem} onItemClick={setActiveItem} />
        </div>
        <div className='w-[766px]'>
          <div className='mb-6 mt-9 flex justify-between'>
            <H1>{activeItem}</H1>
            <div>
              <Button onClick={handleCreatePost}>글쓰기</Button>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityLayout;

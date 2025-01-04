import React, { useState } from 'react';
import { DownArrowIcon, UpArrowIcon } from '@/components/ui/icons/ArrowIcon';

interface PBoardDropdown {
  boards: string[];
  selectedBoard: string;
  onSelectBoard: (board: string) => void;
}

const BoardDropdown: React.FC<PBoardDropdown> = ({ boards, selectedBoard, onSelectBoard }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBoardSelect = (board: string) => {
    onSelectBoard(board);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <div className='flex h-[38px] w-[200px] items-center justify-between rounded-[8px] border border-border bg-white px-[16px] py-[12px]'>
        <div className={`text-body2 ${selectedBoard ? 'text-deepgray' : 'text-disabled'}`}>
          {selectedBoard || '카테고리'}
        </div>
        <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <UpArrowIcon size={18} color='#e9e9e9' /> : <DownArrowIcon size={18} color='#e9e9e9' />}
        </div>
      </div>
      {isOpen && (
        <div className='absolute z-10 mt-[4px] w-[200px] rounded-[6px] border border-border bg-white shadow-sm'>
          {boards.map((board) => (
            <div
              key={board}
              onClick={() => handleBoardSelect(board)}
              className='cursor-pointer px-[16px] py-[8px] text-body2 text-deepgray hover:bg-background'
            >
              {board}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BoardDropdown;

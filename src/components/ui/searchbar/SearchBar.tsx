import React from 'react';
import FiSearch from '@/components/ui/icons/FiSearch';

const SearchBar: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  className?: string;
}> = ({ value, onChange, onSearch, className = '' }) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      {/* 입력 필드 */}
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder='기술 스택 검색'
        className={`w-full ${className ? '' : 'rounded-full border border-blue-400 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
          }`}
      />
      {/* 커스텀 검색 아이콘 */}
      <button
        onClick={onSearch}
        className='absolute right-2 flex items-center justify-center text-blue-400 hover:text-blue-600'
      >
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBar;

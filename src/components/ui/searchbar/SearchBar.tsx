import React from 'react';
import FiSearch from '@/components/FiSearch'; // 새로 만든 FiSearch 컴포넌트를 import

const SearchBar: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}> = ({ value, onChange, onSearch }) => {
  return (
    <div className="relative flex items-center">
      {/* 입력 필드 */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="기술 스택 검색"
        className="w-full px-4 py-2 text-sm border border-blue-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {/* 커스텀 검색 아이콘 */}
      <button
        onClick={onSearch}
        className="absolute right-2 flex items-center justify-center text-blue-400 hover:text-blue-600"
      >
        <FiSearch /> {/* 새로 만든 FiSearch 컴포넌트를 사용 */}
      </button>
    </div>
  );
};

export default SearchBar;

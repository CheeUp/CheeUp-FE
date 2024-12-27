import Dropdown from '@/components/ui/dropdown/Dropdown';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import LabeledContent from '@/components/ui/LabeledContent';
import useClickOutsideRef from '@/hooks/useClickOutsideRef';
import { businessScaleList, jobList, recruitTypeList } from '@/lib/recruit';
import { useRecruitFilterStore } from '@/store/recruitFilter';
import { useState } from 'react';

const RecruitFilter: React.FC = () => {
  const {
    selectedBusinessScale,
    selectedJob,
    selectedRecruitType,
    searchWord,
    setSelectedBusinessScale,
    setSelectedJob,
    setSelectedRecruitType,
    setSearchWord,
  } = useRecruitFilterStore();

  const [dropdownOpen, setDropdownOpen] = useState<number>(0);

  const dropdownRef = useClickOutsideRef<HTMLDivElement>(() => {
    setDropdownOpen(0);
  });

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='mt-8 flex h-20 items-center divide-x-2 divide-border rounded-md border-2 border-border bg-white'>
      <div ref={dropdownRef} className='flex w-3/5 items-center divide-x-2 divide-border'>
        <div className='w-1/3'>
          <Dropdown
            label='기업 규모'
            placeholder='기업 규모 선택'
            options={businessScaleList}
            selected={businessScaleList.filter((item) => selectedBusinessScale.includes(item))}
            setSelected={setSelectedBusinessScale}
            isOpen={dropdownOpen === 1}
            handleOpen={() => {
              setDropdownOpen((prev) => (prev === 1 ? 0 : 1));
            }}
          />
        </div>
        <div className='w-1/2'>
          <Dropdown
            label='직무'
            placeholder='직무 선택'
            options={jobList}
            selected={jobList.filter((item) => selectedJob.includes(item))}
            setSelected={setSelectedJob}
            isOpen={dropdownOpen === 2}
            handleOpen={() => setDropdownOpen((prev) => (prev === 2 ? 0 : 2))}
          />
        </div>
        <div className='w-1/6'>
          <Dropdown
            label='채용 형태'
            placeholder='채용 형태 선택'
            options={recruitTypeList}
            selected={recruitTypeList.filter((item) => selectedRecruitType.includes(item))}
            setSelected={setSelectedRecruitType}
            isOpen={dropdownOpen === 3}
            handleOpen={() => setDropdownOpen((prev) => (prev === 3 ? 0 : 3))}
          />
        </div>
      </div>
      <form className='flex flex-grow items-center justify-between px-5' onSubmit={search}>
        <LabeledContent
          label='공고 검색'
          icon={
            <button type='submit'>
              <SearchIcon />
            </button>
          }
        >
          <input
            type='text'
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder='공고명이나 기업명을 검색하세요.'
            className='w-full border-none px-0 py-0 text-body1 placeholder:text-disabled focus:outline-none'
          />
        </LabeledContent>
      </form>
    </div>
  );
};

export default RecruitFilter;

import React, { useState } from 'react';
import SearchBar from '@/components/ui/searchbar/SearchBar';
import Button from '@/components/ui/button/Button';
import TextInput from '@/components/ui/input/TextInput';

interface ProfileEditFormProps {
  initialValues: {
    이름: string;
    닉네임: string;
    이메일: string;
    전화번호: string;
    조직: string;
    기술스택: string[];
    희망직무: string[];
  };
  onSubmit: (values: any) => void;
  onCancel: () => void; // onCancel 추가
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ initialValues, onSubmit, onCancel }) => {
  const [values, setValues] = useState(initialValues);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStacks, setSelectedStacks] = useState<string[]>(initialValues.기술스택);
  const [selectedJobs, setSelectedJobs] = useState<string[]>(initialValues.희망직무);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...values, 기술스택: selectedStacks, 희망직무: selectedJobs });
  };

  const handleAddStack = () => {
    if (searchTerm && !selectedStacks.includes(searchTerm)) {
      setSelectedStacks((prev) => [...prev, searchTerm]);
      setSearchTerm('');
    }
  };

  const toggleJobSelection = (job: string) => {
    if (selectedJobs.includes(job)) {
      setSelectedJobs((prev) => prev.filter((j) => j !== job));
    } else {
      setSelectedJobs((prev) => [...prev, job]);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6 rounded-md bg-white p-6 shadow-md'>
      <div>
        <label className='block text-sm font-medium text-gray-700'>프로필 사진</label>
        <input
          type='file'
          accept='image/*'
          onChange={(e) => console.log(e.target.files)}
          className='block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white'
        />
      </div>

      {Object.keys(initialValues).map((key) =>
        ['기술스택', '희망직무'].includes(key) ? null : (
          <div key={key}>
            <label htmlFor={key} className='mb-2 block text-sm font-medium text-gray-700'>
              {key}
            </label>
            <TextInput
              value={(values as any)[key]}
              onChange={handleChange}
              placeholder={`${key}을(를) 입력하세요`}
              className='w-full'
            />
          </div>
        ),
      )}

      <div className='mb-6'>
        <label className='mb-2 block text-sm font-medium text-gray-700'>기술 스택</label>
        <div className='w-1/3'>
          <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onSearch={handleAddStack} />
        </div>
        <div className='mt-2 flex flex-wrap gap-2'>
          {selectedStacks.map((stack) => (
            <div
              key={stack}
              className='group relative cursor-pointer rounded-md bg-primary px-4 py-2 text-white group-hover:text-white'
              onClick={() => setSelectedStacks((prev) => prev.filter((s) => s !== stack))}
            >
              {/* 기술 스택 이름 */}
              <span className='transition-opacity group-hover:opacity-0'>{stack}</span>

              {/* 쓰레기통 부분 */}
              <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 18M9 18H15M19.5 6.75L17.25 20.25C17.25 21.0784 16.5784 21.75 15.75 21.75H8.25C7.42157 21.75 6.75 21.0784 6.75 20.25L4.5 6.75M15 10.5V15M9 10.5V15M10.5 6.75V5.25C10.5 4.42157 11.1716 3.75 12 3.75H15C15.8284 3.75 16.5 4.42157 16.5 5.25V6.75'
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700'>희망 직무</label>
        <div className='mt-2 flex gap-2'>
          {['백엔드', '프론트엔드', '모바일', '인공지능', '임베디드', '로봇', '디자인', 'PM'].map((job) => (
            <Button
              key={job}
              type={selectedJobs.includes(job) ? 'filled' : 'outlined'}
              onClick={() => toggleJobSelection(job)}
            >
              {job}
            </Button>
          ))}
        </div>
      </div>

      <div className='flex justify-end gap-4'>
        <Button type='outlined' onClick={handleCancel}>
          취소하기
        </Button>
        <Button type='filled' onClick={handleSubmit}>
          정보 수정
        </Button>
      </div>
    </form>
  );
};

export default ProfileEditForm;

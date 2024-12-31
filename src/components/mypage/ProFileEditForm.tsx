import React, { useState } from 'react';
import SearchBar from '@/components/ui/searchbar/SearchBar';
import TrashIcon from '@/components/ui/icons/TrashIcon';
import Button from '@/components/ui/button/Button';
import TextInput from '@/components/ui/input/TextInput';
import { jobList } from '@/lib/recruit';

interface ProfileEditFormProps {
  initialValues: {
    이름: string;
    닉네임: string;
    이메일: string;
    전화번호: string;
    조직: string;
    기술스택: string[];
    희망직무: string[];
    프로필사진?: string | null;
  };
  onSubmit: (values: {
    이름: string;
    닉네임: string;
    이메일: string;
    전화번호: string;
    조직: string;
    기술스택: string[];
    희망직무: string[];
    프로필사진?: string | null;
  }) => void;
  onCancel: () => void;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ initialValues, onSubmit, onCancel }) => {
  const [values, setValues] = useState(initialValues);
  const [searchStack, setSearchStack] = useState('');
  const [selectedStacks, setSelectedStacks] = useState<string[]>(initialValues.기술스택);
  const [selectedJobs, setSelectedJobs] = useState<string[]>(initialValues.희망직무);
  const [profileImage, setProfileImage] = useState<string | null>(initialValues.프로필사진 || null);

  const handleChange = (key: keyof ProfileEditFormProps['initialValues']) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValues((prev) => ({ ...prev, [key]: value }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...values, 기술스택: selectedStacks, 희망직무: selectedJobs, 프로필사진: profileImage, });
  };

  const handleAddStack = () => {
    if (searchStack && !selectedStacks.includes(searchStack)) {
      setSelectedStacks((prev) => [...prev, searchStack]);
      setSearchStack('');
    }
  };

  const toggleJobSelection = (job: string) => {
    if (selectedJobs.includes(job)) {
      setSelectedJobs((prev) => prev.filter((j) => j !== job));
    } else {
      setSelectedJobs((prev) => [...prev, job]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6 rounded-md bg-white p-6 shadow-md'>
      <div className="flex flex-col items-center">
        {/* 프로필 이미지 */}
        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border border-gray-300">
          {profileImage ? (
            <img src={profileImage} alt="프로필 사진" className="w-full h-full object-cover" />
          ) : (
            <img
              src="/default.png"
              alt="디폴트 프로필 사진"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* 파일 등록 버튼 */}
        <Button
          type="outlined"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("profile-upload")?.click();
          }}
          className="text-sm font-medium"
        >
          사진 등록
        </Button>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {Object.keys(initialValues).map((key) => {
        const fieldKey = key as keyof ProfileEditFormProps['initialValues'];
        return ['기술스택', '희망직무','프로필사진'].includes(fieldKey) ? null : (
          <div key={fieldKey}>
            <label htmlFor={fieldKey} className='mb-2 block text-sm font-medium text-gray-700'>
              {fieldKey}
            </label>
            <TextInput
              value={values[fieldKey] as string}
              onChange={handleChange(fieldKey)}
              placeholder={`${fieldKey}을(를) 입력하세요`}
              className='w-full'
              id={fieldKey}
            />
          </div>
        );
      })}


      <div className='mb-6'>
        <label className='mb-2 block text-sm font-medium text-gray-700'>기술 스택</label>
        <div className='w-1/3'>
          <SearchBar value={searchStack} onChange={(e) => setSearchStack(e.target.value)} onSearch={handleAddStack} />
        </div>
        <div className='mt-2 flex flex-wrap gap-2'>
          {selectedStacks.map((stack) => (
            <div
              key={stack}
              className='group relative cursor-pointer rounded-md bg-primary px-4 py-2 text-white group-hover:text-white'
              onClick={() => setSelectedStacks((prev) => prev.filter((s) => s !== stack))}
            >
              {/* 기술 스택 이름 */}
              <span className='transition-opacity text-white group-hover:opacity-0 '>{stack}</span>

              {/* 쓰레기통 부분 */}
              <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100'>
                <TrashIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-2'>희망 직무</label>
        <div className='flex flex-wrap gap-2'>
          {jobList.map((job) => (
            <Button
              key={job}
              type={selectedJobs.includes(job) ? 'filled' : 'outlined'}
              onClick={(e) => {
                e.preventDefault();
                toggleJobSelection(job);
              }}
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

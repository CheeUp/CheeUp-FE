import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import SearchBar from '@/components/ui/searchbar/SearchBar';
import TrashIcon from '@/components/ui/icons/TrashIcon';
import Button from '@/components/ui/button/Button';
import TextInput from '@/components/ui/input/TextInput';
import { jobList } from '@/lib/recruit';

const ProfileEditForm: React.FC = () => {
  const { userData, handleSave, setIsEditing } = useOutletContext<{
    userData: {
      이름: string;
      닉네임: string;
      이메일: string;
      전화번호: string;
      조직: string;
      기술스택: string[];
      희망직무: string[];
      프로필사진?: string | null;
    };
    handleSave: (updatedData: any) => void;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  }>();

  const navigate = useNavigate();

  // 초기값 설정
  const [values, setValues] = useState(userData);
  const [searchStack, setSearchStack] = useState('');
  const [selectedStacks, setSelectedStacks] = useState<string[]>(userData.기술스택);
  const [selectedJobs, setSelectedJobs] = useState<string[]>(userData.희망직무);
  const [profileImage, setProfileImage] = useState<string | null>(userData.프로필사진 || null);

  const handleChange = (key: keyof typeof userData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  // 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave({ ...values, 기술스택: selectedStacks, 희망직무: selectedJobs, 프로필사진: profileImage });
    navigate('/mypage/profile');
  };

  // 기술 스택 추가 핸들러
  const handleAddStack = () => {
    if (searchStack && !selectedStacks.includes(searchStack)) {
      setSelectedStacks((prev) => [...prev, searchStack]);
      setSearchStack('');
    }
  };

  // 직무 선택 핸들러
  const handleJobSelection = (job: string) => {
    if (selectedJobs.includes(job)) {
      setSelectedJobs((prev) => prev.filter((j) => j !== job));
    } else {
      setSelectedJobs((prev) => [...prev, job]);
    }
  };

  // 파일 업로드 핸들러
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

  // 취소 핸들러
  const handleCancel = () => {
    setIsEditing(false);
    navigate('/mypage/profile');
  };

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold'>내 정보</h2>
      </div>
      <form onSubmit={handleSubmit} className='space-y-6 border bg-white p-6'>
        <label className='mx-auto mb-2 mt-8 block w-4/5 text-sm text-deepgray'>프로필 사진</label>
        <div className='flex flex-col items-center'>
          {/* 프로필 이미지 */}
          <div className='mb-4 h-32 w-32 overflow-hidden rounded-full border border-gray-300'>
            {profileImage ? (
              <img src={profileImage} alt='프로필 사진' className='h-full w-full object-cover' />
            ) : (
              <img src='/default.png' alt='디폴트 프로필 사진' className='h-full w-full object-cover' />
            )}
          </div>

          {/* 파일 등록 버튼 */}
          <Button
            type='outlined'
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('profile-upload')?.click();
            }}
            className='text-sm font-medium'
          >
            사진 등록
          </Button>
          <input id='profile-upload' type='file' accept='image/*' onChange={handleFileChange} className='hidden' />
        </div>

        {Object.keys(userData).map((key) => {
          const fieldKey = key as keyof typeof userData;
          return ['기술스택', '희망직무', '프로필사진'].includes(fieldKey) ? null : (
            <div key={fieldKey} className='mx-auto w-4/5'>
              <label htmlFor={fieldKey} className='mb-2 block text-sm text-deepgray'>
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

        <div className='mx-auto mb-6 w-4/5'>
          <label className='mb-2 block text-sm text-deepgray'>기술 스택</label>
          <div className='w-1/2'>
            <SearchBar value={searchStack} onChange={(e) => setSearchStack(e.target.value)} onSearch={handleAddStack} />
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {selectedStacks.map((stack) => (
              <div
                key={stack}
                className='group relative cursor-pointer rounded-md bg-primary px-4 py-2 text-white group-hover:text-white'
                onClick={() => setSelectedStacks((prev) => prev.filter((s) => s !== stack))}
              >
                {/* 기술 스택 이름 */}
                <span className='text-white transition-opacity group-hover:opacity-0'>{stack}</span>

                {/* 쓰레기통 부분 */}
                <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100'>
                  <TrashIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mx-auto w-4/5'>
          <label className='mb-2 block text-sm text-deepgray'>희망 직무</label>
          <div className='flex flex-wrap gap-2'>
            {jobList.map((job) => (
              <Button
                key={job}
                type={selectedJobs.includes(job) ? 'filled' : 'outlined'}
                onClick={(e) => {
                  e.preventDefault();
                  handleJobSelection(job);
                }}
              >
                {job}
              </Button>
            ))}
          </div>
        </div>

        <div className='mx-auto flex w-4/5 justify-end gap-4'>
          <Button type='outlined' onClick={handleCancel}>
            취소하기
          </Button>
          <Button type='filled' onClick={handleSubmit}>
            정보 수정
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;

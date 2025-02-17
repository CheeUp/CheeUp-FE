import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import TextInput from '@/components/ui/input/TextInput';
import Button from '@/components/ui/button/Button';

const ProfileView: React.FC = () => {
  const { userData, setIsEditing, handleDelete } = useOutletContext<{
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
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    handleDelete: () => void;
  }>();

  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
    navigate('/mypage/edit'); // 수정 페이지로 이동
  };

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold'>내 정보</h2>
      </div>
      <div className='space-y-6 rounded-md border bg-white p-6'>
        <label className='mx-auto mb-2 mt-8 block w-4/5 text-sm text-deepgray'>프로필 사진</label>
        {/* 프로필 사진 */}
        <div className='flex flex-col items-center'>
          <div className='mb-4 h-32 w-32 overflow-hidden rounded-full border border-gray-300'>
            {userData.프로필사진 ? (
              <img src={userData.프로필사진} alt='프로필 사진' className='h-full w-full object-cover' />
            ) : (
              <img src='temp.jpg' alt='디폴트 프로필 사진' className='h-full w-full object-cover' />
            )}
          </div>
        </div>

        {/* 기본 정보 */}
        {Object.keys(userData)
          .filter((key) => !['기술스택', '희망직무', '프로필사진'].includes(key))
          .map((key) => (
            <div key={key} className='mx-auto w-4/5'>
              <label className='mb-2 block text-sm text-deepgray'>{key}</label>
              <TextInput
                value={(userData as any)[key]}
                onChange={() => {}}
                placeholder=''
                disabled
                className='w-full'
              />
            </div>
          ))}

        {/* 기술 스택 */}
        <div className='mx-auto w-4/5'>
          <label className='mb-2 block text-sm text-deepgray'>기술 스택</label>
          <div className='flex flex-wrap gap-2'>
            {userData.기술스택.map((stack) => (
              <Button key={stack} type='filled' onClick={() => {}} className='cursor-default'>
                {stack}
              </Button>
            ))}
          </div>
        </div>

        {/* 희망 직무 */}
        <div className='mx-auto w-4/5'>
          <label className='mb-2 block text-sm text-deepgray'>희망 직무</label>
          <div className='flex flex-wrap gap-2'>
            {userData.희망직무.map((job) => (
              <Button key={job} type='filled' onClick={() => {}} className='cursor-default'>
                {job}
              </Button>
            ))}
          </div>
        </div>

        {/* 수정 & 탈퇴 버튼 */}
        <div className='mx-auto flex w-4/5 justify-between'>
          <Button
            type='outlined'
            onClick={handleDelete}
            className='border-red-500 bg-white text-red-500 hover:bg-red-100'
          >
            탈퇴하기
          </Button>
          <Button type='filled' onClick={handleEditClick}>
            수정하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;

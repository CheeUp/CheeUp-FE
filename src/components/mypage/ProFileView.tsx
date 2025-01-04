import React from 'react';
import TextInput from '@/components/ui/input/TextInput';
import Button from '@/components/ui/button/Button';

interface ProfileViewProps {
  user: {
    이름: string;
    닉네임: string;
    이메일: string;
    전화번호: string;
    조직: string;
    기술스택: string[];
    희망직무: string[];
    프로필사진?: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, onEdit, onDelete }) => {
  return (
    <div className='space-y-6 rounded-md bg-white p-6'>
      <label className='mx-auto mb-2 mt-8 block w-4/5 text-sm text-deepgray'>프로필 사진</label>
      {/* 프로필 사진 */}
      <div className='flex flex-col items-center'>
        <div className='mb-4 h-32 w-32 overflow-hidden rounded-full border border-gray-300'>
          {user.프로필사진 ? (
            <img src={user.프로필사진} alt='프로필 사진' className='h-full w-full object-cover' />
          ) : (
            <img src='/default-profile.png' alt='디폴트 프로필 사진' className='h-full w-full object-cover' />
          )}
        </div>
      </div>

      {/* 기본 정보 */}
      {Object.keys(user)
        .filter((key) => !['기술스택', '희망직무', '프로필사진'].includes(key))
        .map((key) => (
          <div key={key} className='mx-auto w-4/5'>
            <label className='mb-2 block text-sm text-deepgray'>{key}</label>
            <TextInput
              value={(user as any)[key]}
              onChange={() => {}} // 변경 불가능
              placeholder=''
              disabled // 비활성화 상태
              className='w-full'
            />
          </div>
        ))}

      {/* 기술 스택 */}
      <div className='mx-auto w-4/5'>
        <label className='mb-2 block text-sm text-deepgray'>기술 스택</label>
        <div className='flex flex-wrap gap-2'>
          {user.기술스택.map((stack) => (
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
          {user.희망직무.map((job) => (
            <Button key={job} type='filled' onClick={() => {}} className='cursor-default'>
              {job}
            </Button>
          ))}
        </div>
      </div>

      {/* 수정 & 탈퇴 버튼 */}
      <div className='mx-auto flex w-4/5 justify-between'>
        <Button type='outlined' onClick={onDelete} className='border-red-500 bg-white text-red-500 hover:bg-red-100'>
          탈퇴하기
        </Button>
        <Button type='filled' onClick={onEdit}>
          수정하기
        </Button>
      </div>
    </div>
  );
};

export default ProfileView;

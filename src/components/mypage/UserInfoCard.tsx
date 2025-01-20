import { Avatar } from '@/components/ui/Avatar';
import React from 'react';
import Tier from '@/components/ui/Tier';
import { TTier } from '@/model/tier';

interface UserInfoCardProps {
  profileImage: string;
  nickname: string;
  tier: TTier;
  level: number;
  exp: number;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ profileImage, nickname, tier, level, exp }) => {
  return (
    <div className='flex flex-col items-start rounded-md bg-primary-light p-4 text-white shadow-md'>
      <div className='flex items-center gap-2'>
        {/* 프로필 이미지 */}
        <div className='mb-4 flex flex-col items-center'>
          <Avatar src={profileImage} size='sm' />
        </div>

        {/* 닉네임, 티어 */}
        <div className='flex items-center gap-2'>
          <p className='text-lg font-bold'>{nickname}</p>
          <Tier tier={tier} tierNum={2} />
        </div>
      </div>
      {/* 경험치 바와 현재 경험치 텍스트 */}
      <div className='flex w-full items-center gap-2'>
        {/* 경험치 바 */}
        <div className='h-4 w-full rounded-full bg-white'>
          <div className='h-4 rounded-full bg-primary' style={{ width: `${exp}%` }}></div>
        </div>

        {/* 현재 경험치 텍스트 */}
        <span className='text-sm text-white'>{`${exp}%`}</span>
      </div>
    </div>
  );
};

export default UserInfoCard;

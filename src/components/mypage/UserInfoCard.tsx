import { Avatar } from '@/components/ui/Avatar';
import React from 'react';

interface UserInfoCardProps {
  profileImage: string;
  nickname: string;
  tier: string;
  level: number;
  exp: number;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ profileImage, nickname, tier, level, exp }) => {
  return (
    <div className="bg-primary-light text-white rounded-md p-4 shadow-md flex flex-col items-start">
      <div className='flex items-center gap-2'>
        {/* 프로필 이미지 */}
        <div className="flex flex-col items-center mb-4">
          <Avatar
            src={profileImage}
            size='sm'
          />
        </div>

        {/* 닉네임, 티어 */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold">{nickname}</p>
          <p className="text-sm ">{tier}</p>
        </div>
      </div>
      {/* 경험치 바와 현재 경험치 텍스트 */}
      <div className="flex items-center gap-2 w-full">
        {/* 경험치 바 */}
        <div className="w-full bg-white rounded-full h-4">
          <div
            className="bg-blue-700 h-4 rounded-full"
            style={{ width: `${exp}%` }}
          ></div>
        </div>

        {/* 현재 경험치 텍스트 */}
        <span className="text-white text-sm font-medium">{`${exp}%`}</span>
      </div>
    </div>
  );
};

export default UserInfoCard;

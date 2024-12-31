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
    <div className="flex items-center gap-4 p-4">
      <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full" />
      <div>
        <p className="text-lg font-bold">{nickname}</p>
        <p className="text-sm text-gray-500">{tier} • 레벨 {level}</p>
        <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
          <div
            className="bg-primary h-2 rounded-full"
            style={{ width: `${exp}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;

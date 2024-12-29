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
  };
  onEdit: () => void; // 수정 버튼 클릭 핸들러
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, onEdit }) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{user.이름}의 마이페이지</h1>

      {/* 기본 정보 */}
      {Object.keys(user)
        .filter((key) => !['기술스택', '희망직무'].includes(key))
        .map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-2">{key}</label>
            <TextInput
              value={(user as any)[key]}
              onChange={() => {}} // 변경 불가능
              placeholder=""
              disabled // 비활성화 상태
              className="w-full"
            />
          </div>
        ))}

      {/* 기술 스택 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">기술 스택</label>
        <div className="flex flex-wrap gap-2">
          {user.기술스택.map((stack) => (
            <Button key={stack} type="filled" onClick={() => {}} className="cursor-default">
              {stack}
            </Button>
          ))}
        </div>
      </div>

      {/* 희망 직무 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">희망 직무</label>
        <div className="flex flex-wrap gap-2">
          {user.희망직무.map((job) => (
            <Button key={job} type="filled" onClick={() => {}} className="cursor-default">
              {job}
            </Button>
          ))}
        </div>
      </div>

      {/* 수정 버튼 */}
      <div className="flex justify-end">
        <Button type="filled" onClick={onEdit}>
          수정하기
        </Button>
      </div>
    </div>
  );
};

export default ProfileView;

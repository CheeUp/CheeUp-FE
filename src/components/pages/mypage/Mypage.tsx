import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import UserInfoCard from '@/components/mypage/UserInfoCard';
import ProfileEditForm from '@/components/mypage/ProFileEditForm';

const MyPage: React.FC = () => {
  const initialProfile = {
    name: '김싸피',
    nickname: '싸피킴',
    email: 'kim@gmail.com',
    phone: '010-1234-5678',
    organization: 'SSAFY 12기',
  };

  const sidebarSections = [
    {
      title: '마이페이지',
      items: ['내 정보', '작성한 글', '스크랩한 글'],
    },
    {
      title: '취업 관리',
      items: ['스크랩한 공고', '내 프로젝트'],
    },
  ];

  const handleSubmit = (values: any) => {
    console.log('수정된 값:', values);
    // API 호출 등을 처리
  };

  return (
    <div>
      <div className="flex">
        <Sidebar sections={sidebarSections} />
        <div className="flex-1 p-6">
          {/* 사용자 정보 */}
          <UserInfoCard
            profileImage='../../assets/temp.jpg'
            nickname="김사용"
            tier="Gold"
            level={40}
            exp={75}
          />
          {/* 프로필 수정 폼 */}
          <ProfileEditForm initialValues={initialProfile} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default MyPage;

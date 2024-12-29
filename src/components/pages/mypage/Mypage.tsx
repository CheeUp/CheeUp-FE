import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import UserInfoCard from '@/components/mypage/UserInfoCard';
import ProfileEditForm from '@/components/mypage/ProFileEditForm';
import ProfileView from '@/components/mypage/ProFileView';
const MyPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false); // 수정 상태 관리

  const user = {
    이름: '김싸피',
    닉네임: '싸피킴',
    이메일: 'kim@gmail.com',
    전화번호: '010-1234-5678',
    조직: 'SSAFY 12기',
    기술스택: ['React', 'TypeScript'], // 초기 기술 스택
    희망직무: ['백엔드'], // 초기 희망 직무
  };

  const sidebarSections = [
    {
      title: '마이페이지',
      items: ['내 정보'],
    },
    {
      title: '취업 준비',
      items: ['스크랩한 공고', '나의 포트폴리오'],
    },
    {
      title: '나의 커뮤니티',
      items: ['내가 작성한 글', '스크랩한 글'],
    },
  ];

  // 수정 완료 핸들러
  const handleSave = (updatedValues: any) => {
    console.log('수정된 값:', updatedValues);
    setIsEditing(false); // 수정 완료 후 보기 상태로 변경
  };

  return (
    <div className='flex h-full items-start justify-center bg-background'>
      <div className='flex w-4/5 max-w-screen-lg bg-background pt-8'>
        {/* 왼쪽 영역: 사이드바와 유저 카드 */}
        <div>
          <UserInfoCard profileImage='../../assets/temp.jpg' nickname='김사용' tier='Gold' level={40} exp={75} />
          <Sidebar sections={sidebarSections} />
        </div>

        {/* 오른쪽 영역: 유저 폼 */}
        <div className='flex-1 p-6'>
          {/* 제목 추가 */}
          <h2 className='-mt-6 mb-4 text-2xl font-bold text-gray-800'>내 정보</h2>
          {isEditing ? (
            <ProfileEditForm
              initialValues={user}
              onSubmit={handleSave}
              onCancel={() => setIsEditing(false)} // onCancel 추가
            />
          ) : (
            <ProfileView user={user} onEdit={() => setIsEditing(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPage;

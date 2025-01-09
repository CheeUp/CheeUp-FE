import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import UserInfoCard from '@/components/mypage/UserInfoCard';
import userDataMock from '@/mocks/data/userdata';
import postsDataMock from '@/mocks/data/postsdata';

const MyPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false); // 수정 상태 관리
  const [activeItem, setActiveItem] = useState('내 정보');
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(userDataMock);

  const [posts, setPosts] = useState(postsDataMock);

  //사이드바 목록
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
  useEffect(() => {
    const pathToItem: Record<string, string> = {
      '/mypage/profile': '내 정보',
      '/mypage/scrap': '스크랩한 글',
      '/mypage/posts': '내가 작성한 글',
      '/mypage/scrap-notice': '스크랩한 공고',
    };

    const newItem = pathToItem[location.pathname] || '내 정보';
    setActiveItem(newItem);
  }, [location.pathname]);

  const handleSave = (updatedData: any) => {
    setUserData(updatedData);
    setIsEditing(false);
    navigate('/mypage/profile');
  };

  const handleDelete = () => {
    if (window.confirm('정말로 탈퇴하시겠습니까?')) {
      console.log('탈퇴 처리 로직 실행');
    }
  };

  const handleSidebarItemClick = (item: string) => {
    switch (item) {
      case '내 정보':
        navigate('/mypage/profile');
        break;
      case '스크랩한 글':
        navigate('/mypage/scrap');
        break;
      case '내가 작성한 글':
        navigate('/mypage/posts');
        break;
      case '스크랩한 공고':
        navigate('/mypage/scrap-notice');
        break;
      default:
        break;
    }
  };

  return (
    <div className='flex h-full items-start justify-center bg-background'>
      <div className='flex w-4/5 max-w-screen-lg bg-background pt-8'>
        {/* 왼쪽 영역: 사이드바와 유저 카드 */}
        <div>
          <UserInfoCard profileImage='temp.jpg' nickname='김사용' tier='gold' level={40} exp={75} />
          <Sidebar sections={sidebarSections} activeItem={activeItem} onItemClick={handleSidebarItemClick} />
        </div>

        {/* 오른쪽 영역 */}
        <div className='flex-1 pl-6'>
          <Outlet
            context={{
              userData,
              handleSave,
              handleDelete,
              setIsEditing,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyPage;

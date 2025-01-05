import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import UserInfoCard from '@/components/mypage/UserInfoCard';
import ProfileEditForm from '@/components/mypage/ProFileEditForm';
import ProfileView from '@/components/mypage/ProFileView';
import PostCard, {type Tier} from '@/components/ui/post/PostCard';
import userDataMock from '@/mocks/data/userdata';
import postsDataMock from '@/mocks/data/postsdata';

const MyPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false); // 수정 상태 관리
  const [activePage, setActivePage] = useState('내 정보');


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

  
  const handleSave = (updatedData: any) => {
    console.log('수정된 값:', updatedData);
    setUserData(updatedData);
    setIsEditing(false); 
  };

  const handleDelete = () => {
    if (window.confirm('정말로 탈퇴하시겠습니까?')) {
      console.log('탈퇴 처리 로직 실행');
    }
  };

  const renderContent = () => {
    if (activePage === '내 정보') {
      return isEditing ? (
        <ProfileEditForm
          initialValues={userData}
          onSubmit={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ProfileView user={userData} onEdit={() => setIsEditing(true)} onDelete={handleDelete} />
      );
    }  else if (activePage === '내가 작성한 글') {
      return (
        <div>
          <h2 className='mb-4 text-2xl font-bold'>내가 작성한 글</h2>
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      );
    } else if (activePage === '스크랩한 공고') {
      return (
        <div>
          <h2 className='mb-4 text-2xl font-bold'>스크랩한 공고</h2>
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      );
    } else if (activePage === '스크랩한 글') {
      return (
        <div>
          <h2 className='mb-4 text-2xl font-bold'>스크랩한 글</h2>
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className='flex h-full items-start justify-center bg-background'>
      <div className='flex w-4/5 max-w-screen-lg bg-background pt-8'>
        {/* 왼쪽 영역: 사이드바와 유저 카드 */}
        <div>
          <UserInfoCard profileImage='../../assets/temp.jpg' nickname='김사용' tier='gold' level={40} exp={75} />
          <Sidebar
            sections={sidebarSections}
            onItemClick={(item) => {
              setActivePage(item);
            }}
          />
        </div>

        {/* 오른쪽 영역 */}
        <div className='flex-1 p-6'>{renderContent()}</div>
      </div>
    </div>
  );
};

export default MyPage;

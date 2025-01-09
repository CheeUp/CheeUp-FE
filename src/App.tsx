import Header from '@/components/layout/Header';
import RecruitPage from '@/components/pages/recruit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from '@/components/pages/mypage';
import PortfolioPage from '@/components/pages/portfolio';
import NewPortfolioPage from '@/components/pages/portfolio/new';
import NewRecruitPage from '@/components/pages/recruit/new';
import ProfileEditForm from '@/components/mypage/ProFileEditForm';
import ProfileView from '@/components/mypage/ProFileView';
import MyPostList from '@/components/mypage/MyPostList';
import ScrapList from '@/components/mypage/ScrapList';
<<<<<<< HEAD
import ScrapNotice from '@/components/mypage/ScrapNotice';
=======

>>>>>>> 1c3378562b56552127521941c3b64a7b1a87e5fa
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='mypage' element={<MyPage />}>
          <Route index element={<ProfileView />} />
          <Route path='profile' element={<ProfileView />} />
          <Route path='edit' element={<ProfileEditForm />} />
          <Route path='posts' element={<MyPostList />} />
          <Route path='scrap' element={<ScrapList />} />
<<<<<<< HEAD
          <Route path='scrap-notice' element={<ScrapNotice />} />
=======
>>>>>>> 1c3378562b56552127521941c3b64a7b1a87e5fa
        </Route>
        <Route path='/recruit'>
          <Route index element={<RecruitPage />} />
          <Route path='new' element={<NewRecruitPage />} />
        </Route>
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/portfolio/new' element={<NewPortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

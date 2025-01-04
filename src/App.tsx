import Header from '@/components/layout/Header';
import RecruitPage from '@/components/pages/recruit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from '@/components/pages/mypage/Mypage';
import PortfolioPage from '@/components/pages/portfolio';
import NewPortfolioPage from '@/components/pages/portfolio/new';
import NewRecruitPage from '@/components/pages/recruit/new';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/mypage' element={<MyPage />} />
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

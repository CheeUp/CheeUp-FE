import Header from '@/components/layout/Header';
import RecruitPage from '@/components/pages/recruit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PortfolioPage from '@/components/pages/portfolio';
import NewPortfolioPage from '@/components/pages/portfolio/new';
import MyPage from '@/components/pages/mypage/Mypage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/recruit' element={<RecruitPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/portfolio/new' element={<NewPortfolioPage />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

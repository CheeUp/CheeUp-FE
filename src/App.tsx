import Header from '@/components/layout/Header';
import RecruitPage from '@/components/pages/recruit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from '@/components/pages/mypage/Mypage';
import PortfolioPage from '@/components/pages/portfolio';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/recruit' element={<RecruitPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

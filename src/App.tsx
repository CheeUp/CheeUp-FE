import Header from '@/components/layout/Header';
import RecruitPage from '@/components/pages/recruit/RecruitPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/recruit' element={<RecruitPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

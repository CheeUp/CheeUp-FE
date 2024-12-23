import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import MyPage from '@/components/pages/mypage/Mypage';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/mypage' element={<MyPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

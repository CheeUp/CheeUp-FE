import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

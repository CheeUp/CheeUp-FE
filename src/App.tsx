import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/jobs" element={<div>채용공고 페이지</div>} />
        <Route path="/portfolio" element={<div>포트폴리오 페이지</div>} />
        <Route path="/community" element={<div>커뮤니티 페이지</div>} />
      </Routes>
    </Router>
  );
};

export default App;

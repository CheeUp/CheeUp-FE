import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-background p-4">
      {/* 전체 */}
      <div className="flex justify-between items-center px-[90px]">
        {/* 로고와 메뉴 */}
        <div className="flex items-center gap-[140px]">
          {/* 로고 */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Cheer Up Logo" className="h-8" />
          </a>
          {/* 메뉴 */}
          <ul className="flex gap-[114px] text-black font-Pretendard">
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "text-black hover:text-primary-light"
                }
              >
                채용공고
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "text-black hover:text-primary-light"
                }
              >
                포트폴리오
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/community"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "text-black hover:text-primary-light"
                }
              >
                커뮤니티
              </NavLink>
            </li>
          </ul>
        </div>
        <div>{/* 여기에 로그인/회원가입 버튼/검색창 추가 */}</div>
      </div>
    </nav>
  );
};

export default Navbar;

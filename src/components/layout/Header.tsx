import React from 'react';
import logo from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <header className='bg-background p-4'>
      {/* 전체 */}
      <div className='flex items-center justify-between px-[90px]'>
        {/* 로고와 메뉴 */}
        <div className='flex items-center gap-[140px]'>
          {/* 로고 */}
          <Link to='/' className='flex items-center'>
            <img src={logo} alt='Cheer Up Logo' className='h-8' />
          </Link>
          {/* 메뉴 */}
          <nav>
            <ul className='flex gap-[114px] text-black'>
              <li>
                <NavLink
                  to='/jobs'
                  className={({ isActive }) => (isActive ? 'text-primary' : 'text-black hover:text-primary-light')}
                >
                  채용공고
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/portfolio'
                  className={({ isActive }) => (isActive ? 'text-primary' : 'text-black hover:text-primary-light')}
                >
                  포트폴리오
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/community'
                  className={({ isActive }) => (isActive ? 'text-primary' : 'text-black hover:text-primary-light')}
                >
                  커뮤니티
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>{/* 여기에 로그인/회원가입 버튼/검색창 추가 */}</div>
      </div>
    </header>
  );
};

export default Navbar;

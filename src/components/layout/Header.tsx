import React from 'react';
import Logo from '../Logo';
import Button from '../ui/button/Button';
import { Link, NavLink } from 'react-router-dom';
const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 bg-background px-14 py-6 shadow-md'>
      {/* 전체 */}
      <div className='flex items-center justify-between'>
        {/* 로고와 메뉴 */}
        <div className='flex items-center gap-20'>
          {/* 로고 */}
          <Link to='/' className='flex items-center'>
            <Logo className='h-8' />
          </Link>
          {/* 메뉴 */}
          <nav>
            <ul className='flex gap-16 text-black'>
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
        <div className='flex gap-4'>
          {/* 로그인/회원가입 */}
          <Button onClick={() => {}}>로그인</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

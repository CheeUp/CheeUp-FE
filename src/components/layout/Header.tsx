import React from 'react';
import Logo from '../Logo';
import { Button } from '../ui/button/Button';
import { Link, NavLink } from 'react-router-dom';
const Navbar: React.FC = () => {
  return (
    <header className='bg-background p-6 shadow-md'>
      {/* 전체 */}
      <div className='flex items-center justify-between px-[90px]'>
        {/* 로고와 메뉴 */}
        <div className='flex items-center gap-[140px]'>
          {/* 로고 */}
          <Link to='/' className='flex items-center'>
            <Logo className='h-8' />
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
        <div className='flex gap-4'>
        {/* 로그인/회원가입 */}
          <Button  onClick={() => console.log('버튼 클릭')}>
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


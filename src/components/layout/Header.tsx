import React from 'react';
import Logo from '../Logo';
import  Button  from '../ui/button/Button';
import { Link, NavLink,useNavigate } from 'react-router-dom';

const navItems = [
  { title: '채용공고', to: '/jobs' },
  { title: '포트폴리오', to: '/portfolio' },
  { title: '커뮤니티', to: '/community' },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const onLoginClick = () => {
    navigate('/login');
  }

  return (
    <header className='bg-background p-6'>
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
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? 'text-primary' : 'text-black hover:text-primary-light'
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* 로그인/회원가입 */}
        <div className='flex gap-4'>
          <Button onClick={onLoginClick}>로그인</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

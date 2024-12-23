import React from 'react';
import PageTitle from '@/components/ui/typography/PageTitle';
import TextInput from '@/components/ui/input/TextInput';
import { PortfolioCard } from '@/components/ui/PortfolioCard';
import PortfolioSideBar from '@/components/layout/portfolio/PortfolioSideBar';
import useTextInput from '@/hooks/useTextInput';
import { portfolioData } from '@/mocks/data';

const PortfolioPage: React.FC = () => {
  const [searchText, setSearchText] = useTextInput('');

  return (
    <div className='flex w-screen justify-center'>
      <div className='flex w-base flex-row-reverse px-5'>
        <PortfolioSideBar />

        <div>
          <PageTitle>포트폴리오</PageTitle>

          <div className='px-4 pb-14'>
            <div className='pb-4'>
              <div className='text-body1 font-semibold'>🔥 HOT한 포트폴리오를 확인해보세요</div>
            </div>

            <div className='flex flex-wrap gap-4'>
              {portfolioData.map((info, index) => (
                <PortfolioCard key={index} portfolioInfo={info} />
              ))}
            </div>
          </div>

          <div className='px-4 pb-14'>
            <div className='flex flex-col gap-4 pb-4'>
              <div className='text-body1 font-semibold'>🔍 다른 사람의 포트폴리오도 찾아보세요</div>
              <TextInput
                value={searchText}
                onChange={setSearchText}
                placeholder='검색어를 입력하세요'
                className='w-full'
              />
            </div>

            <div className='flex flex-wrap gap-4'>
              {portfolioData.map((info, index) => (
                <PortfolioCard key={index} portfolioInfo={info} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

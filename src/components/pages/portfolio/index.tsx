import React from 'react';
import PageTitle from '@/components/ui/typography/PageTitle';
import Button from '@/components/ui/button/Button';
import TextInput from '@/components/ui/input/TextInput';
import { PortfolioCard } from '@/components/ui/PortfolioCard';
import useTextInput from '@/hooks/useTextInput';
import { portfolioData } from '@/mocks/data';

const PortfolioPage: React.FC = () => {
  const [searchText, setSearchText, resetSearchText] = useTextInput('');

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

/**
 * 아래 사이드바 컴포넌트를 다른 파일에 분리하는 게 좋을까요?
 * 메인 페이지에만 사용되는 것 같아서 일단 이 파일에 두었습니다!
 */
const PortfolioSideBar: React.FC = () => {
  const name = '서로';

  return (
    <div className='border-l border-border px-4 py-10'>
      <div className='text-body1 font-semibold'>{name}님의 포트폴리오</div>
      <Button onClick={() => {}} className='my-4 w-full'>
        새로 만들기
      </Button>
      <div className='flex flex-col gap-4'>
        {portfolioData.map((info, index) => (
          <PortfolioCard key={index} portfolioInfo={info} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;

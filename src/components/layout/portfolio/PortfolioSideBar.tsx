import Button from '@/components/ui/button/Button';
import { PortfolioCard } from '@/components/ui/PortfolioCard';
import { portfolioData } from '@/mocks/data';

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

export default PortfolioSideBar;

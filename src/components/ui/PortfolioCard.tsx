import { Job } from '@/model/job';
import ColorBadge from './badge/ColorBadge';

export interface PortfolioInfo {
  title: string;
  author: string;
  job: Job;
  likes: number;
  createdAt: string;
}

interface PPortfolioCard {
  portfolioInfo: PortfolioInfo;
}

export const PortfolioCard: React.FC<PPortfolioCard> = ({ portfolioInfo }) => {
  return (
    <div className='border-borderhover:opacity-90 mx-4 my-4 flex w-52 cursor-pointer flex-col gap-2 rounded-md border bg-white px-3 py-3'>
      <div className='flex items-center justify-between'>
        <ColorBadge type={portfolioInfo.job} />
        <div className='text-detail'>
          <span className='px-1 text-complementary-action'>♥</span>
          <span>{portfolioInfo.likes}</span>
        </div>
      </div>

      <div className='h-10 text-body2 font-semibold'>{portfolioInfo.title}</div>

      <div className='flex justify-between text-detail'>
        <div>{portfolioInfo.author}</div>
        <div>{portfolioInfo.createdAt}</div>
      </div>
    </div>
  );
};

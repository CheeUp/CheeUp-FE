import { TPortfolioInfo } from '@/model/portfolio';

const MportfolioInfo: TPortfolioInfo = {
  title: '프론트 포트폴리오',
  author: '서로',
  job: 'FE',
  likes: 20,
  createdAt: '2024년 12월 21일',
};

export const MportfolioData = new Array(8).fill(MportfolioInfo);

import { TJob } from '@/model/job';

export interface TPortfolioInfo {
  title: string;
  author: string;
  job: TJob;
  likes: number;
  createdAt: string;
}

export interface TPortfolioStepItem {
  id: number;
  title: string;
  content: string;
}

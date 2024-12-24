import { TJob } from '@/model/job';

export interface TPortfolioInfo {
  title: string;
  author: string;
  job: TJob;
  likes: number;
  createdAt: string;
}

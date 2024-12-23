import { TJob } from '@/model/job';

export interface PortfolioInfo {
  title: string;
  author: string;
  job: TJob;
  likes: number;
  createdAt: string;
}

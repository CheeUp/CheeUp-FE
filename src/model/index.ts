import { Job } from '@/model/job';

export interface PortfolioInfo {
  title: string;
  author: string;
  job: Job;
  likes: number;
  createdAt: string;
}

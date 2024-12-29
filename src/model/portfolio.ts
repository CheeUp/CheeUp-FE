import { TJobEng } from '@/model/job';

export interface TPortfolioInfo {
  title: string;
  author: string;
  job: TJobEng;
  likes: number;
  createdAt: string;
}

export interface TStepItem {
  id: number;
  title: string;
  content: string;
}

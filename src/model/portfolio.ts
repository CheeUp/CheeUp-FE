import { TJobEng } from '@/model/job';

export interface TPortfolioInfo {
  title: string;
  author: string;
  job: TJobEng;
  likes: number;
  createdAt: string;
}

export interface TPortfolioSkill {
  name: string;
  level: TSkillLevel;
  description: string;
}

export const SkillLevel = {
  기초: 1,
  입문: 2,
  중급: 3,
  고급: 4,
  전문가: 5,
} as const;

export type TSkillLevel = keyof typeof SkillLevel;

export interface TStepItem {
  id: number;
  title: string;
  content: string;
}

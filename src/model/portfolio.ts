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

export type TMilitaryBranch = '육군' | '해군' | '공군' | '해병' | '전경' | '의경' | '공익' | '기타';

export type TMilitaryRank = '이병' | '일병' | '상병' | '병장' | '소위' | '중위' | '대위';

export type TDisabilityGrade = '중증' | '경증' | '1급' | '2급' | '3급' | '4급' | '5급' | '6급';

export interface TStepItem {
  id: number;
  title: string;
  content: string;
}

import { TStepItem } from '@/model/portfolio';

export const militaryList = ['군필', '미필', '면제', '해당없음'] as const;

export const militaryBranchList = ['육군', '해군', '공군', '해병', '전경', '의경', '공익', '기타'] as const;

export const militaryRankList = ['이병', '일병', '상병', '병장', '소위', '중위', '대위'] as const;

export const disabilityGradeList = ['중증', '경증', '1급', '2급', '3급', '4급', '5급', '6급'] as const;

export const portfolioStepList: TStepItem[] = [
  {
    id: 1,
    title: '기본 정보',
    content: '상세 프로세스',
  },
  {
    id: 2,
    title: '개인 정보',
    content: '상세 프로세스',
  },
  {
    id: 3,
    title: '학력',
    content: '상세 프로세스',
  },
  {
    id: 4,
    title: '성과',
    content: '상세 프로세스',
  },
  {
    id: 5,
    title: '기술 스택',
    content: '상세 프로세스',
  },
  {
    id: 6,
    title: '경험',
    content: '상세 프로세스',
  },
  {
    id: 7,
    title: '프로젝트',
    content: '상세 프로세스',
  },
];

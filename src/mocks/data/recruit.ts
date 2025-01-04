import { TRecruitDetail, TRecruitPreview } from '@/model/recruit';

export const MRecruitPreview: TRecruitPreview[] = [
  {
    id: 1,
    company: '삼성그룹',
    startDate: new Date('2024-12-21 09:00:00'),
    endDate: new Date('2024-12-25 18:00:00'),
    isScraped: true,
  },
  {
    id: 2,
    company: '신한은행',
    startDate: new Date('2024-12-22 09:00:00'),
    endDate: new Date('2024-12-30 18:00:00'),
    isScraped: false,
  },
];

export const MRecruitDetail: TRecruitDetail[] = [
  {
    id: 1,
    company: '삼성그룹',
    startDate: new Date('2024-12-21 09:00:00'),
    endDate: new Date('2024-12-27 18:00:00'),
    isScraped: true,
    title: '2024년 하반기 삼성그룹 채용',
    url: 'https://www.samsungcareers.com/hr/',
    isLiked: true,
    jobNoticeFiles: ['/recruit_image.webp', '/recruit_image.webp'],
    jobDescriptions: [
      {
        id: 1,
        type: '신입',
        title: '삼성전자 DS부문 - 메모리사업부_SW개발',
        region: '경기 수원',
        description: '메모리 사업부에서 소프트웨어 개발자를 채용합니다.\n자세한 내용은 홈페이지를 참조해주세요.',
        requirement: 'C언어로 프로그래밍이 가능한 분\nC++ 또는 C#에 대한 이해가 있는 분',
        preferredRequirement: '관련 경력자\n반도체에 대한 이해가 있는 분',
        jobDescriptionSkills: [
          {
            id: 1,
            skill: 'C',
          },
          {
            id: 2,
            skill: 'C++',
          },
          {
            id: 3,
            skill: 'C#',
          },
          {
            id: 4,
            skill: 'Rust',
          },
        ],
      },
      {
        id: 2,
        type: '경력',
        title: '(경력)삼성전자 DS부문 - 메모리사업부_SW개발',
        region: '경기 수원',
        description: '메모리 사업부에서 경력 소프트웨어 개발자를 채용합니다.\n자세한 내용은 홈페이지를 참조해주세요.',
        requirement: 'C언어로 프로그래밍이 가능한 분\nC++ 또는 C#에 대한 이해가 있는 분',
        preferredRequirement: '관련 3년 이상 경력자\n반도체에 대한 이해가 있는 분',
        jobDescriptionSkills: [
          {
            id: 1,
            skill: 'C',
          },
          {
            id: 2,
            skill: 'C++',
          },
          {
            id: 3,
            skill: 'C#',
          },
          {
            id: 4,
            skill: 'Rust',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    company: '신한은행',
    startDate: new Date('2024-12-21 09:00:00'),
    endDate: new Date('2024-12-27 18:00:00'),
    isScraped: true,
    title: '2024년 하반기 신한은행 채용',
    url: 'https://shinhandigital.recruiter.co.kr/career/jobs',
    isLiked: true,
    jobNoticeFiles: ['/recruit_image.webp'],
    jobDescriptions: [
      {
        id: 1,
        type: '신입',
        title: '프론트엔드 개발',
        region: '서울 강남구',
        description: '메모리 사업부에서 소프트웨어 개발자를 채용합니다.\n자세한 내용은 홈페이지를 참조해주세요.',
        requirement: 'C언어로 프로그래밍이 가능한 분\nC++ 또는 C#에 대한 이해가 있는 분',
        preferredRequirement: '관련 경력자\n반도체에 대한 이해가 있는 분',
        jobDescriptionSkills: [
          {
            id: 1,
            skill: 'C',
          },
          {
            id: 2,
            skill: 'C++',
          },
          {
            id: 3,
            skill: 'C#',
          },
          {
            id: 4,
            skill: 'Rust',
          },
        ],
      },
      {
        id: 2,
        type: '경력',
        title: '(경력)프론트엔드 개발',
        region: '서울 강남구',
        description: '메모리 사업부에서 경력 소프트웨어 개발자를 채용합니다.\n자세한 내용은 홈페이지를 참조해주세요.',
        requirement: 'C언어로 프로그래밍이 가능한 분\nC++ 또는 C#에 대한 이해가 있는 분',
        preferredRequirement: '관련 3년 이상 경력자\n반도체에 대한 이해가 있는 분',
        jobDescriptionSkills: [
          {
            id: 1,
            skill: 'C',
          },
          {
            id: 2,
            skill: 'C++',
          },
          {
            id: 3,
            skill: 'C#',
          },
          {
            id: 4,
            skill: 'Rust',
          },
        ],
      },
    ],
  },
];

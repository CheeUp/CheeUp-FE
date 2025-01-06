export interface TRecruitPreview {
  id: number;
  company: string;
  startDate: Date;
  endDate: Date;
  isScraped: boolean;
}

export interface TRecruitDetail extends TRecruitPreview {
  title: string;
  url: string;
  isLiked: boolean;
  jobNoticeFiles: string[];
  jobDescriptions: TJobDescription[];
}

export interface TJobDescription {
  id: number;
  type: '신입' | '경력';
  title: string;
  region: string;
  description: string;
  requirement: string;
  preferredRequirement: string;
  jobDescriptionSkills: TJobDescriptionSkill[];
}

export interface TJobDescriptionSkill {
  id: number;
  skill: string;
}

export interface TRecruitCalendar {
  day: number;
  events: TRecruitPreview[];
}

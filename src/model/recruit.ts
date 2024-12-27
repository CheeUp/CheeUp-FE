export interface TRecruitPreview {
  id: number;
  company: string;
  startDate: Date;
  endDate: Date;
  isScraped: boolean;
}

export interface TRecruitCalendar {
  day: number;
  events: TRecruitPreview[];
}

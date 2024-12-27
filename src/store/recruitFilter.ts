import { recruitFilterStorageKey } from '@/lib/constants/storageKey';
import { localStorage } from '@/util/browserStorage';
import { create } from 'zustand';

interface RecruitFilterState {
  selectedBusinessScale: string[];
  selectedJob: string[];
  selectedRecruitType: string[];
  searchWord: string;
  setSelectedBusinessScale: (selectedBusinessScale: string) => void;
  setSelectedJob: (selectedJob: string) => void;
  setSelectedRecruitType: (selectedRecruitType: string) => void;
  setSearchWord: (searchWord: string) => void;
}

export const useRecruitFilterStore = create<RecruitFilterState>()((set) => ({
  selectedBusinessScale:
    (localStorage.getItem(recruitFilterStorageKey.SELECTED_BUSINESS_SCALE)?.value as string[]) ?? [],
  selectedJob: (localStorage.getItem(recruitFilterStorageKey.SELECTED_JOB)?.value as string[]) ?? [],
  selectedRecruitType: (localStorage.getItem(recruitFilterStorageKey.SELECTED_RECRUIT_TYPE)?.value as string[]) ?? [],
  searchWord: '',
  setSelectedBusinessScale: (businessScale) =>
    set((prevState) => {
      const newState = prevState.selectedBusinessScale.includes(businessScale)
        ? prevState.selectedBusinessScale.filter((item) => item !== businessScale)
        : [...prevState.selectedBusinessScale, businessScale];

      localStorage.setItem(recruitFilterStorageKey.SELECTED_BUSINESS_SCALE, newState);
      return { selectedBusinessScale: newState };
    }),
  setSelectedJob: (job) =>
    set((prevState) => {
      const newState = prevState.selectedJob.includes(job)
        ? prevState.selectedJob.filter((item) => item !== job)
        : [...prevState.selectedJob, job];

      localStorage.setItem(recruitFilterStorageKey.SELECTED_JOB, newState);
      return { selectedJob: newState };
    }),
  setSelectedRecruitType: (recruitType) =>
    set((prevState) => {
      const newState = prevState.selectedRecruitType.includes(recruitType)
        ? prevState.selectedRecruitType.filter((item) => item !== recruitType)
        : [...prevState.selectedRecruitType, recruitType];

      localStorage.setItem(recruitFilterStorageKey.SELECTED_RECRUIT_TYPE, newState);
      return { selectedRecruitType: newState };
    }),
  setSearchWord: (searchWord) => set((prevState) => ({ ...prevState, searchWord })),
}));

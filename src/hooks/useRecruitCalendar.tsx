import { MRecruitPreview } from '@/mocks/data/recruit';
import { TRecruitCalendar, TRecruitPreview } from '@/model/recruit';
import { getDaysInMonth, addDays } from 'date-fns';
import { useState } from 'react';

const CALENDER_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;

const useRecruitCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const totalMonthDays = getDaysInMonth(currentDate);
  // TODO: currentDate가 바뀔 때마다 공고 리스트 가져오기

  const getEventsForDay = (day: number) => {
    return MRecruitPreview.filter((recruit: TRecruitPreview) => {
      return (
        (recruit.startDate.getDate() === day || recruit.endDate.getDate() === day) &&
        recruit.startDate.getMonth() === currentDate.getMonth()
      );
    });
  };

  const prevDayList: TRecruitCalendar[] = Array.from(
    {
      length: Math.max(0, addDays(currentDate, -1 * (currentDate.getDate() - 1)).getDay()),
    },
    () => ({ day: DEFAULT_TRASH_VALUE, events: [] }),
  );
  const currentDayList: TRecruitCalendar[] = Array.from({ length: totalMonthDays }, (_, i) => {
    const day = i + 1;
    return {
      day,
      events: getEventsForDay(day),
    };
  });
  const nextDayList: TRecruitCalendar[] = Array.from(
    {
      length: CALENDER_LENGTH - currentDayList.length - prevDayList.length,
    },
    () => ({ day: DEFAULT_TRASH_VALUE, events: [] }),
  );

  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);

  const weekCalendarList = currentCalendarList.reduce((acc: TRecruitCalendar[][], cur, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);

  if (weekCalendarList.length === 6) {
    weekCalendarList[5] = weekCalendarList[5].concat(
      Array.from({ length: DAY_OF_WEEK - weekCalendarList[5].length }, () => ({
        day: DEFAULT_TRASH_VALUE,
        events: [],
      })),
    );
  }

  return {
    weekCalendarList,
    currentDate,
    setCurrentDate,
  };
};
export default useRecruitCalendar;

import { getDaysInMonth, addDays } from 'date-fns';
import { useState } from 'react';

const CALENDER_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const totalMonthDays = getDaysInMonth(currentDate);

  const prevDayList: number[] = Array.from(
    {
      length: Math.max(0, addDays(currentDate, -1 * (currentDate.getDate() - 1)).getDay()),
    },
    () => DEFAULT_TRASH_VALUE,
  );
  const currentDayList: number[] = Array.from({ length: totalMonthDays }, (_, i) => i + 1);
  const nextDayList: number[] = Array.from(
    {
      length: CALENDER_LENGTH - currentDayList.length - prevDayList.length,
    },
    () => DEFAULT_TRASH_VALUE,
  );

  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);

  const weekCalendarList = currentCalendarList.reduce((acc: number[][], cur, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);

  if (weekCalendarList.length === 6) {
    weekCalendarList[5] = weekCalendarList[5].concat(
      Array.from({ length: DAY_OF_WEEK - weekCalendarList[5].length }, () => DEFAULT_TRASH_VALUE),
    );
  }

  return {
    weekCalendarList,
    currentDate,
    setCurrentDate,
  };
};
export default useCalendar;

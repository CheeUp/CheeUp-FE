import CalendarNavigation from '@/components/recruit/calendar/CalendarNavigation';
import useCalendar from '@/hooks/useCalendar';
import { useEffect } from 'react';

interface PSmallCalendar {
  selectedDate?: Date | null;
  setDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  startDate?: Date | null;
}

const SmallCalendar: React.FC<PSmallCalendar> = ({ selectedDate, setDate, startDate }) => {
  const { weekCalendarList, currentDate, setCurrentDate } = useCalendar();

  useEffect(() => {
    if (startDate) {
      if (startDate > currentDate) setCurrentDate(startDate);
    } else if (selectedDate) {
      setCurrentDate(selectedDate);
    }
  }, [selectedDate, setCurrentDate, startDate]);

  const isSelectedDate = (date: number) => {
    if (!selectedDate) return false;
    return (
      currentDate.getFullYear() === selectedDate.getFullYear() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      selectedDate.getDate() === date
    );
  };

  const canSelect = (date: number) => {
    if (!startDate) return true;
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), date) > startDate;
  };

  const handleDateClick = (clickedDate: number) => {
    if (!setDate) return;
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), clickedDate);
    setDate(date);
  };

  return (
    <div className='rounded-md border border-input bg-white px-2 pb-1'>
      <CalendarNavigation currentDate={currentDate} setCurrentDate={setCurrentDate} size='sm' />
      <table className='w-full'>
        <thead>
          <tr className='grid grid-cols-7 text-body2 font-bold'>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          {weekCalendarList.map((week, rIdx) => (
            <tr key={rIdx} className='grid grid-cols-7 justify-center'>
              {week.map((date, cIdx) => (
                <td key={cIdx} className='flex justify-center'>
                  {date === 0 || !canSelect(date) ? (
                    <button disabled className='h-8 w-8 text-center text-body2 text-disabled'>
                      {date !== 0 && date}
                    </button>
                  ) : (
                    <button
                      className={`h-8 w-8 rounded-full text-center text-body2 transition-colors ${isSelectedDate(date) ? 'bg-primary-light' : ''} hover:bg-primary-light`}
                      onClick={() => handleDateClick(date)}
                    >
                      {date}
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SmallCalendar;

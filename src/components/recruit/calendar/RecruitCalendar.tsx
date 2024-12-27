import useCalendar from '@/hooks/useCalendar';
import Calendar from '@/components/recruit/calendar/Calendar';
import CalendarNavigation from '@/components/recruit/calendar/CalendarNavigation';

const RecruitCalendar: React.FC = () => {
  const { currentDate, setCurrentDate, weekCalendarList } = useCalendar();

  return (
    <section className='flex w-full flex-col items-center'>
      <CalendarNavigation currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <Calendar weekCalendarList={weekCalendarList} />
    </section>
  );
};

export default RecruitCalendar;

import Calendar from '@/components/recruit/calendar/Calendar';
import CalendarNavigation from '@/components/recruit/calendar/CalendarNavigation';
import useRecruitCalendar from '@/hooks/useRecruitCalendar';

const RecruitCalendar: React.FC = () => {
  const { currentDate, setCurrentDate, weekCalendarList } = useRecruitCalendar();

  return (
    <section className='flex w-full flex-col items-center'>
      <CalendarNavigation currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <Calendar weekCalendarList={weekCalendarList} />
    </section>
  );
};

export default RecruitCalendar;

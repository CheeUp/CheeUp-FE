import RecruitCalendar from '@/components/recruit/calendar/RecruitCalendar';
import RecruitFilter from '@/components/recruit/RecruitFilter';

const RecruitPage: React.FC = () => {
  return (
    <div className='px-14'>
      <RecruitFilter />
      <RecruitCalendar />
    </div>
  );
};

export default RecruitPage;

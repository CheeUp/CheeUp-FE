import { LeftArrowIcon, RightArrowIcon } from '@/components/ui/icons/ArrowIcon';
import { H2 } from '@/components/ui/typography/Heading';
import { subMonths } from 'date-fns';

interface PCalendarNavigation {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalendarNavigation: React.FC<PCalendarNavigation> = ({ currentDate, setCurrentDate }) => {
  return (
    <header className='my-8 flex w-full items-center justify-center gap-4'>
      <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
        <LeftArrowIcon />
      </button>
      <H2>
        {currentDate.getFullYear()}. {currentDate.getMonth() + 1}
      </H2>
      <button onClick={() => setCurrentDate(subMonths(currentDate, -1))}>
        <RightArrowIcon />
      </button>
    </header>
  );
};

export default CalendarNavigation;

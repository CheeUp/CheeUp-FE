import { LeftArrowIcon, RightArrowIcon } from '@/components/ui/icons/ArrowIcon';
import { H2, H4 } from '@/components/ui/typography/Heading';
import { subMonths } from 'date-fns';

interface PCalendarNavigation {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  size?: 'sm' | 'lg';
}

const CalendarNavigation: React.FC<PCalendarNavigation> = ({ currentDate, setCurrentDate, size = 'lg' }) => {
  return (
    <header className={'flex w-full items-center justify-center ' + (size === 'sm' ? 'my-2 gap-0.5' : 'my-8 gap-4')}>
      <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
        <LeftArrowIcon size={size === 'sm' ? 24 : 32} />
      </button>
      {size === 'sm' ? (
        <H4>
          {currentDate.getFullYear()}. {currentDate.getMonth() + 1}
        </H4>
      ) : (
        <H2>
          {currentDate.getFullYear()}. {currentDate.getMonth() + 1}
        </H2>
      )}
      <button onClick={() => setCurrentDate(subMonths(currentDate, -1))}>
        <RightArrowIcon size={size === 'sm' ? 24 : 32} />
      </button>
    </header>
  );
};

export default CalendarNavigation;

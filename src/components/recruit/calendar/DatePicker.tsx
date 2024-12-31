import SmallCalendar from '@/components/recruit/calendar/SmallCalendar';
import CalendarIcon from '@/components/ui/icons/CalendarIcon';
import useClickOutsideRef from '@/hooks/useClickOutsideRef';
import { useState } from 'react';

interface PDatePicker {
  placeholder: string;
  value: Date | null;
  setDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  startDate?: Date | null;
}

const DatePicker: React.FC<PDatePicker> = ({ placeholder, value, setDate, startDate }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useClickOutsideRef<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div className='relative w-full' ref={ref}>
      <button
        className='flex w-full items-center gap-2 rounded-sm border border-input px-4 py-2.5 text-body2 focus:outline-activate'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className={`flex-grow text-start ${value ? '' : 'text-disabled'}`}>
          {value ? `${value.getFullYear()}. ${value.getMonth() + 1}. ${value.getDate()}` : placeholder}
        </p>
        <CalendarIcon />
      </button>
      {isOpen && (
        <div className='absolute right-0 top-12 z-10'>
          <SmallCalendar selectedDate={value} setDate={setDate} startDate={startDate} />
        </div>
      )}
    </div>
  );
};

export default DatePicker;

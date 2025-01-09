import DropdownList from '@/components/ui/dropdown/DropdownList';
import { DownArrowIcon } from '@/components/ui/icons/ArrowIcon';
import DropdownIcon from '@/components/ui/icons/DropdownIcon';
import useClickOutsideRef from '@/hooks/useClickOutsideRef';
import { useState } from 'react';

interface PDropdown {
  placeholder: string;
  options: readonly string[];
  selected: string[] | string;
  setSelected: (value: string) => void;
  id?: string;
  color?: 'primary' | 'gray';
  className?: string;
}

const Dropdown: React.FC<PDropdown> = ({ placeholder, options, selected, setSelected, id, color = 'primary',className, }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useClickOutsideRef<HTMLDivElement>(() => setIsOpen(false));

  const isUnselected = (typeof selected === 'string' && selected === '') || selected.length === 0;

  const defaultClassName = 'flex w-full items-center gap-2 rounded-sm border border-input px-4 py-2.5 text-body2 focus:outline-activate';

  return (
    <div className={` flex relative w-full`} ref={ref}>
      <button
        id={id}
        className={className ? className : defaultClassName}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className={`line-clamp-1 flex-grow text-start ${isUnselected ? 'text-disabled' : ''}`}>
          {isUnselected ? placeholder : typeof selected === 'string' ? selected : selected.join(', ')}
        </p>
        <div>{color === 'primary' ? <DropdownIcon /> : <DownArrowIcon size={22} color='#9e9e9e' />}</div>
      </button>
      {isOpen && (
        <div className='absolute left-0 top-10 w-full'>
          <DropdownList options={options} selected={selected} setSelected={setSelected} />
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import DropdownList from '@/components/ui/dropdown/DropdownList';
import DropdownIcon from '@/components/ui/icons/DropdownIcon';
import InputWithTitle from '@/components/ui/InputWithTitle';

interface PDropdown {
  title: string;
  placeholder: string;
  options: string[];
  selected: string[];
  setSelected: (selected: string) => void;
  isOpen: boolean;
  handleOpen: () => void;
}

const Dropdown: React.FC<PDropdown> = ({ title, placeholder, options, selected, setSelected, isOpen, handleOpen }) => {
  return (
    <div className='relative h-10 w-full pl-5 pr-2'>
      <button className='flex h-full w-full items-center justify-between text-left' onClick={handleOpen}>
        <InputWithTitle title={title} icon={<DropdownIcon />}>
          <span className={`${selected.length === 0 ? 'text-disabled' : 'text-black'} line-clamp-1 text-body1`}>
            {selected.length === 0 ? placeholder : selected.length === options.length ? '전체' : selected.join(', ')}
          </span>
        </InputWithTitle>
      </button>
      {isOpen && <DropdownList options={options} selected={selected} setSelected={setSelected} />}
    </div>
  );
};

export default Dropdown;

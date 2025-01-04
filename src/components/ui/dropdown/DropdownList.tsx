import CheckboxIcon from '@/components/ui/icons/CheckboxIcon';

interface PDropdownList {
  options: string[];
  selected: string[] | string;
  setSelected: (selected: string) => void;
}

const DropdownList: React.FC<PDropdownList> = ({ options, selected, setSelected }) => {
  return (
    <div className='absolute left-0 z-10 mt-2 w-full rounded-sm border border-border bg-white py-1 text-body2 font-bold text-black shadow-md'>
      <ul>
        {options.map((option, idx) => (
          <li
            onClick={() => setSelected(option)}
            key={idx}
            className='flex cursor-pointer items-center gap-1 px-5 py-1.5 hover:bg-black/5'
          >
            {typeof selected !== 'string' && <CheckboxIcon filled={selected.includes(option)} />}
            <span>{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;

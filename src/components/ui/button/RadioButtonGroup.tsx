import Button from '@/components/ui/button/Button';

interface PRadioButtonGroup {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const RadioButtonGroup: React.FC<PRadioButtonGroup> = ({ options, selected, onSelect }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={() => onSelect(option)}
          type={selected === option ? 'filled' : 'disable-outlined'}
          className='text-detail'
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default RadioButtonGroup;

import RequiredInputIcon from '@/components/ui/icons/RequiredInputIcon';

interface PFieldset {
  id: string;
  label: string;
  children: React.ReactNode;
  required?: boolean;
}

const Fieldset: React.FC<PFieldset> = ({ id, label, children, required = false }) => {
  return (
    <fieldset>
      <legend className='py-2 text-detail font-semibold'>
        <label htmlFor={id}>{label}</label>
        {required && <RequiredInputIcon />}
      </legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;

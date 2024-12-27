interface PLabeledContent {
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const LabeledContent: React.FC<PLabeledContent> = ({ label, children, icon }) => {
  return (
    <>
      <div className='flex flex-grow flex-col'>
        <span className='text-body2 font-bold text-deepgray'>{label}</span>
        {children}
      </div>
      {icon}
    </>
  );
};

export default LabeledContent;

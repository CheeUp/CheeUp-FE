interface PInputWithTitle {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const InputWithTitle: React.FC<PInputWithTitle> = ({ title, children, icon }) => {
  return (
    <>
      <div className='flex flex-grow flex-col'>
        <span className='text-body2 font-bold text-deepgray'>{title}</span>
        {children}
      </div>
      {icon}
    </>
  );
};

export default InputWithTitle;

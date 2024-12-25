interface PRankBar {
  rank: number;
}

export const RankBar: React.FC<PRankBar> = ({ rank }) => {
  return (
    <div className='bg-stepper flex h-4 w-32 gap-[1px] overflow-hidden rounded-full border border-border'>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className={`flex-1 ${index < rank ? 'bg-primary' : 'bg-white'}`}></div>
      ))}
    </div>
  );
};

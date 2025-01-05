interface PLevelBar {
  level: number;
}

export const LevelBar: React.FC<PLevelBar> = ({ level: rank }) => {
  return (
    <div className='flex h-4 w-36 divide-x overflow-hidden rounded-full border border-border'>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className={`flex-1 ${index < rank ? 'bg-primary' : 'bg-white'}`}></div>
      ))}
    </div>
  );
};

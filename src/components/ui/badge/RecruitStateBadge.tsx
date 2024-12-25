interface PRecruitStateBadge {
  isStart: boolean;
}

const RecruitStateBadge: React.FC<PRecruitStateBadge> = ({ isStart }) => {
  return (
    <div
      className={`flex h-4 items-center rounded-[3px] px-1 text-center text-detail text-white ${isStart ? 'bg-complementary-lightcrimson' : 'bg-complementary-mediumpurple'}`}
    >
      {isStart ? 'start' : 'end'}
    </div>
  );
};

export default RecruitStateBadge;

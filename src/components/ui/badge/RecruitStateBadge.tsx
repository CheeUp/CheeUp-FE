interface PRecruitStateBadge {
  isStart: boolean;
}

const RecruitStateBadge: React.FC<PRecruitStateBadge> = ({ isStart }) => {
  return (
    <div
      className={`h-4 rounded-[3px] px-0.5 text-center text-detail text-white ${isStart ? 'bg-complementary-lightcrimson' : 'bg-complementary-mediumpurple'}`}
    >
      {isStart ? 'start' : 'end'}
    </div>
  );
};

export default RecruitStateBadge;

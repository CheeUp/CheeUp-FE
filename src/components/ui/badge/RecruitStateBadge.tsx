interface PRecruitStateBadge {
  isStart: boolean;
}

const RecruitStateBadge: React.FC<PRecruitStateBadge> = ({ isStart }) => {
  return (
    <div
      className={`h-4 w-4 rounded-[3px] text-center text-detail text-white ${isStart ? 'bg-complementary-lightcrimson' : 'bg-complementary-mediumpurple'}`}
    >
      {isStart ? '시' : '종'}
    </div>
  );
};

export default RecruitStateBadge;

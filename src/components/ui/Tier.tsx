import { TIER_COLORS } from '@/lib/tier';
import { TTier } from '@/model/tier';

interface PTier {
  tier: TTier;
  tierNum: number;
}

const Tier: React.FC<PTier> = ({ tier, tierNum = 1 }) => {
  const tierColor = tier && TIER_COLORS[tier];

  return (
    <div
      className='flex h-[14px] w-[14px] items-center justify-center rounded-[2px]'
      style={{ backgroundColor: tierColor }}
    >
      <span className='text-[9px] font-bold text-white'>{tierNum}</span>
    </div>
  );
};

export default Tier;

import { LevelBar } from '@/components/ui/LevelBar';
import { SkillLevel, TPortfolioSkill } from '@/model/portfolio';

interface PSkillCard {
  portfolioSkill: TPortfolioSkill;
}

export const SkillCard: React.FC<PSkillCard> = ({ portfolioSkill }) => {
  return (
    <div className='flex flex-col gap-2 rounded-md border border-border bg-white px-4 py-4'>
      <div className='text-body1 font-semibold'>{portfolioSkill.name}</div>
      <div className='flex gap-4'>
        <LevelBar level={SkillLevel[portfolioSkill.level]} />
        <span className='text-detail font-semibold'>{portfolioSkill.level}</span>
      </div>
      <div className='text-body2'>{portfolioSkill.description}</div>
    </div>
  );
};

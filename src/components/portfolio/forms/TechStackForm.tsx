import { H2 } from '@/components/ui/typography/Heading';
import { SkillCard } from '@/components/portfolio/SkillCard';
import Button from '@/components/ui/button/Button';
import { MportfolioSkills } from '@/mocks/data/portfolio';

const TechStackForm: React.FC = () => {
  return (
    <div className='divide-y divide-border'>
      <section className='pb-4'>
        <H2>기술 스택</H2>
        <div className='text-detail'>뭐라고 적지</div>
      </section>

      <section>
        <div className='flex justify-end gap-2 pt-4'>
          <Button type='disable-outlined' onClick={() => {}}>
            선택
          </Button>
          <Button onClick={() => {}}>추가</Button>
        </div>

        <div className='flex flex-col gap-4 py-4'>
          {MportfolioSkills.map((skill, index) => (
            <SkillCard key={index} portfolioSkill={skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStackForm;

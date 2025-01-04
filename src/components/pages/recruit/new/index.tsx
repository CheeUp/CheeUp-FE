import RecruitForm from '@/components/recruit/new/RecruitForm';
import { H1 } from '@/components/ui/typography/Heading';

const NewRecruitPage: React.FC = () => {
  return (
    <div className='mx-auto w-base'>
      <H1 className='mb-6 mt-9'>채용공고 등록</H1>
      <RecruitForm />
    </div>
  );
};

export default NewRecruitPage;

import { useId } from 'react';
import RadioButtonGroup from '@/components/ui/button/RadioButtonGroup';
import TextInput from '@/components/ui/input/TextInput';
import { H2 } from '@/components/ui/typography/Heading';
import useRadioButtonGroup from '@/hooks/useRadioButtonGroup';
import useTextInput from '@/hooks/useTextInput';
import { MJobList } from '@/mocks/data/job';

const BasicInfoForm: React.FC = () => {
  const [title, setTitle] = useTextInput('');
  const [job, setJob] = useRadioButtonGroup('');
  const [isPublic, setIsPublic] = useRadioButtonGroup('');

  const titleId = useId();
  const jobId = useId();
  const isPublicId = useId();

  return (
    <div className='divide-y divide-border'>
      <section className='pb-4'>
        <H2>기본 정보</H2>
        <div className='text-detail'>포트폴리오에 필요한 기본적인 정보를 입력해요.</div>
      </section>

      <section className='flex flex-col gap-4 py-4'>
        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={titleId}>제목</label>
            <span className='px-1 text-complementary-action'>*</span>
          </legend>
          <TextInput
            id={titleId}
            value={title}
            onChange={setTitle}
            placeholder='제목을 입력해 주세요.'
            className='w-full'
          />
        </fieldset>

        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={jobId}>희망 직무</label>
            <span className='px-1 text-complementary-action'>*</span>
          </legend>
          <RadioButtonGroup id={jobId} options={MJobList} selected={job} onSelect={setJob} />
        </fieldset>

        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={isPublicId}>공개 여부</label>
            <span className='px-1 text-complementary-action'>*</span>
          </legend>
          <RadioButtonGroup id={isPublicId} options={['허용', '비허용']} selected={isPublic} onSelect={setIsPublic} />
        </fieldset>
      </section>
    </div>
  );
};

export default BasicInfoForm;

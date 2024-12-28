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

  return (
    <div className='divide-y divide-border'>
      <div className='pb-4'>
        <H2>기본 정보</H2>
        <div className='text-detail'>포트폴리오에 필요한 기본적인 정보를 입력해요.</div>
      </div>

      <div className='flex flex-col gap-4 py-4'>
        <div>
          <div className='py-2 text-detail font-semibold'>
            <span>제목</span>
            <span className='px-1 text-complementary-action'>*</span>
          </div>
          <TextInput value={title} onChange={setTitle} placeholder='제목을 입력해 주세요.' className='w-full' />
        </div>

        <div>
          <div className='py-2 text-detail font-semibold'>
            <span>희망 직무</span>
            <span className='px-1 text-complementary-action'>*</span>
          </div>
          <RadioButtonGroup options={MJobList} selected={job} onSelect={setJob} />
        </div>

        <div>
          <div className='py-2 text-detail font-semibold'>
            <span>공개 여부</span>
            <span className='px-1 text-complementary-action'>*</span>
          </div>
          <RadioButtonGroup options={['허용', '비허용']} selected={isPublic} onSelect={setIsPublic} />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;

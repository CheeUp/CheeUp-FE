import { useId, useState } from 'react';
import TextInput from '@/components/ui/input/TextInput';
import { H2 } from '@/components/ui/typography/Heading';
import useTextInput from '@/hooks/useTextInput';
import useRadioButtonGroup from '@/hooks/useRadioButtonGroup';
import RadioButtonGroup from '@/components/ui/button/RadioButtonGroup';
import CheckboxIcon from '@/components/ui/icons/CheckboxIcon';

const PersonalInfoForm: React.FC = () => {
  const [name, setName] = useTextInput('');
  const [email, setEmail] = useTextInput('');
  const [introduction, setIntroduction] = useTextInput('');
  const [githubUrl, setGithubUrl] = useTextInput('');
  const [blogUrl, setBlogUrl] = useTextInput('');

  const [military, setMilitary] = useRadioButtonGroup('');
  const [veteran, setVeteran] = useRadioButtonGroup('');
  const [disablity, setDisablity] = useRadioButtonGroup('');

  const [isPrivacyConsent, setIsPrivacyConsent] = useState<boolean>(false);

  const nameId = useId();
  const emailId = useId();
  const introductionId = useId();
  const githubUrlId = useId();
  const blogUrlId = useId();

  const militaryId = useId();
  const veteranId = useId();
  const disablityId = useId();

  const handleConsentClick = () => {
    setIsPrivacyConsent((prevState) => !prevState);
  };

  return (
    <div className='divide-y divide-border'>
      <section className='pb-4'>
        <H2>개인 정보</H2>
        <div className='text-detail'>서로님에 대해 소개해주세요.</div>
      </section>

      <section className='flex flex-col gap-4 py-4'>
        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={nameId}>이름</label>
            <span className='px-1 text-complementary-action'>*</span>
          </legend>
          <TextInput
            id={nameId}
            value={name}
            onChange={setName}
            placeholder='이름을 입력해 주세요.'
            className='w-full'
          />
        </fieldset>

        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={email}>이메일</label>
            <span className='px-1 text-complementary-action'>*</span>
          </legend>
          <TextInput
            id={emailId}
            value={email}
            onChange={setEmail}
            placeholder='이메일을 입력해 주세요.'
            className='w-full'
          />
        </fieldset>

        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={introduction}>자기소개</label>
            <span className='px-1 text-complementary-action'>*</span>
          </legend>
          <TextInput
            id={introductionId}
            value={introduction}
            onChange={setIntroduction}
            placeholder='자유롭게 소개해 주세요.'
            className='w-full'
          />
        </fieldset>

        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={githubUrl}>GitHub</label>
          </legend>
          <TextInput
            id={githubUrlId}
            value={githubUrl}
            onChange={setGithubUrl}
            placeholder='깃허브 주소를 입력해 주세요.'
            className='w-full'
          />
        </fieldset>

        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={blogUrl}>기술 블로그</label>
          </legend>
          <TextInput
            id={blogUrlId}
            value={blogUrl}
            onChange={setBlogUrl}
            placeholder='블로그 주소를 입력해 주세요.'
            className='w-full'
          />
        </fieldset>
      </section>

      <section className='flex flex-col gap-4 py-4'>
        <fieldset className='flex items-center gap-1'>
          <span className='cursor-pointer' onClick={handleConsentClick}>
            <CheckboxIcon filled={isPrivacyConsent} />
          </span>
          <span className='text-body2 font-semibold'>민감 정보 수집 및 이용 동의</span>
        </fieldset>

        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={militaryId}>병역</label>
            <span className='px-1 text-complementary-action'>*</span>
          </legend>
          <RadioButtonGroup
            id={militaryId}
            options={['군필', '미필', '면제', '해당없음']}
            selected={military}
            onSelect={setMilitary}
          />
        </fieldset>

        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={veteranId}>보훈 여부</label>
            <span className='px-1 text-complementary-action'>*</span>
          </legend>
          <RadioButtonGroup id={veteranId} options={['대상', '비대상']} selected={veteran} onSelect={setVeteran} />
        </fieldset>

        <fieldset>
          <legend className='py-2 text-detail font-semibold'>
            <label htmlFor={disablityId}>장애 여부</label>
            <span className='px-1 text-complementary-action'>*</span>
          </legend>
          <RadioButtonGroup
            id={disablityId}
            options={['대상', '비대상']}
            selected={disablity}
            onSelect={setDisablity}
          />
        </fieldset>
      </section>
    </div>
  );
};

export default PersonalInfoForm;
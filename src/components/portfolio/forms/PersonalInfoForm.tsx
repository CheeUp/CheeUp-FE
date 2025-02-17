import { useId, useState } from 'react';
import TextInput from '@/components/ui/input/TextInput';
import { H2 } from '@/components/ui/typography/Heading';
import RadioButtonGroup from '@/components/ui/button/RadioButtonGroup';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import CheckboxIcon from '@/components/ui/icons/CheckboxIcon';
import Fieldset from '@/components/ui/Fieldset';
import useTextInput from '@/hooks/useTextInput';
import useRadioButtonGroup from '@/hooks/useRadioButtonGroup';
import { disabilityGradeList, militaryList, militaryBranchList, militaryRankList } from '@/lib/portfolio';

const SECTION_CLASS = 'flex flex-col gap-4 py-4';

const PersonalInfoForm: React.FC = () => {
  const [name, setName] = useTextInput('');
  const [email, setEmail] = useTextInput('');
  const [introduction, setIntroduction] = useTextInput('');
  const [githubUrl, setGithubUrl] = useTextInput('');
  const [blogUrl, setBlogUrl] = useTextInput('');

  const [military, setMilitary] = useRadioButtonGroup('');
  const [militaryBranch, setMilitaryBranch] = useState<string>('');
  const [militaryRank, setMilitaryRank] = useState<string>('');

  const [veteran, setVeteran] = useRadioButtonGroup('');
  // TODO: 보훈 관계, 비율 추가

  const [disability, setDisability] = useRadioButtonGroup('');
  const [disabilityGrade, setDisabilityGrade] = useState<string>('');
  // TODO: 장애 종류 추가

  const [isPrivacyConsent, setIsPrivacyConsent] = useState<boolean>(false);

  const ids = {
    name: useId(),
    email: useId(),
    introduction: useId(),
    githubUrl: useId(),
    blogUrl: useId(),
    military: useId(),
    veteran: useId(),
    disability: useId(),
  };

  const handleConsentClick = () => {
    setIsPrivacyConsent((prevState) => !prevState);
  };

  const handleMilitaryBranch = (militaryBranch: string) => {
    setMilitaryBranch(militaryBranch);
  };

  const handleMilitaryRank = (militaryRank: string) => {
    setMilitaryRank(militaryRank);
  };

  const handleDisabilityGrade = (disabilityGrade: string) => {
    setDisabilityGrade(disabilityGrade);
  };

  return (
    <div className='divide-y divide-border'>
      <section className='pb-4'>
        <H2>개인 정보</H2>
        <div className='text-detail'>서로님에 대해 소개해주세요.</div>
      </section>

      <section className={SECTION_CLASS}>
        <Fieldset id={ids.name} label='이름' required={true}>
          <TextInput
            id={ids.name}
            value={name}
            onChange={setName}
            placeholder='이름을 입력해 주세요.'
            className='w-full'
          />
        </Fieldset>

        <Fieldset id={ids.email} label='이메일' required={true}>
          <TextInput
            id={ids.email}
            value={email}
            onChange={setEmail}
            placeholder='이메일을 입력해 주세요.'
            className='w-full'
          />
        </Fieldset>

        <Fieldset id={ids.introduction} label='자기소개' required={true}>
          <TextInput
            id={ids.introduction}
            value={introduction}
            onChange={setIntroduction}
            placeholder='자유롭게 소개해 주세요.'
            className='w-full'
          />
        </Fieldset>

        <Fieldset id={ids.githubUrl} label='GitHub'>
          <TextInput
            id={ids.githubUrl}
            value={githubUrl}
            onChange={setGithubUrl}
            placeholder='깃허브 주소를 입력해 주세요.'
            className='w-full'
          />
        </Fieldset>

        <Fieldset id={ids.blogUrl} label='기술 블로그'>
          <TextInput
            id={ids.blogUrl}
            value={blogUrl}
            onChange={setBlogUrl}
            placeholder='블로그 주소를 입력해 주세요.'
            className='w-full'
          />
        </Fieldset>
      </section>

      {/* 이 아래로 민감 정보 수집 */}

      <section className={SECTION_CLASS}>
        <fieldset className='flex cursor-pointer items-center gap-1' onClick={handleConsentClick}>
          <CheckboxIcon filled={isPrivacyConsent} />
          <span className='text-body2 font-semibold'>민감 정보 수집 및 이용 동의</span>
        </fieldset>

        <Fieldset id={ids.military} label='병역' required={true}>
          <RadioButtonGroup id={ids.military} options={militaryList} selected={military} onSelect={setMilitary} />
          {military === '군필' && (
            <div className='flex gap-4 py-4'>
              <Dropdown
                placeholder='군별 선택'
                options={militaryBranchList}
                selected={militaryBranch}
                setSelected={handleMilitaryBranch}
              />
              <Dropdown
                placeholder='계급 선택'
                options={militaryRankList}
                selected={militaryRank}
                setSelected={handleMilitaryRank}
              />
            </div>
          )}
        </Fieldset>

        <Fieldset id={ids.veteran} label='보훈 여부' required={true}>
          <RadioButtonGroup id={ids.veteran} options={['대상', '비대상']} selected={veteran} onSelect={setVeteran} />
          {veteran === '대상' && (
            <div className='flex gap-4 py-4'>
              <Dropdown
                placeholder='관계 선택'
                options={disabilityGradeList}
                selected={disabilityGrade}
                setSelected={handleDisabilityGrade}
              />
              <Dropdown
                placeholder='비율 선택'
                options={disabilityGradeList}
                selected={disabilityGrade}
                setSelected={handleDisabilityGrade}
              />
            </div>
          )}
        </Fieldset>

        <Fieldset id={ids.disability} label='장애 여부' required={true}>
          <RadioButtonGroup
            id={ids.disability}
            options={['대상', '비대상']}
            selected={disability}
            onSelect={setDisability}
          />
          {disability === '대상' && (
            <div className='flex gap-4 py-4'>
              <Dropdown
                placeholder='장애 종류 선택'
                options={disabilityGradeList}
                selected={disabilityGrade}
                setSelected={handleDisabilityGrade}
              />
              <Dropdown
                placeholder='장애 등급 선택'
                options={disabilityGradeList}
                selected={disabilityGrade}
                setSelected={handleDisabilityGrade}
              />
            </div>
          )}
        </Fieldset>
      </section>
    </div>
  );
};

export default PersonalInfoForm;

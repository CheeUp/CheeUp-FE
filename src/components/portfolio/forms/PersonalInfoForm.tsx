import { useId, useState } from 'react';
import TextInput from '@/components/ui/input/TextInput';
import { H2 } from '@/components/ui/typography/Heading';
import RadioButtonGroup from '@/components/ui/button/RadioButtonGroup';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import CheckboxIcon from '@/components/ui/icons/CheckboxIcon';
import RequiredInputIcon from '@/components/ui/icons/RequiredInputIcon';
import useTextInput from '@/hooks/useTextInput';
import useRadioButtonGroup from '@/hooks/useRadioButtonGroup';
import { disabilityGradeList, militaryList, militaryBranchList, militaryRankList } from '@/lib/portfolio';

const SECTION_CLASS = 'flex flex-col gap-4 py-4';
const LEGEND_CLASS = 'py-2 text-detail font-semibold';

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

  const [disablity, setDisablity] = useRadioButtonGroup('');
  const [disablityGrade, setDisablityGrade] = useState<string>('');
  // TODO: 장애 종류 추가

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

  const handleMilitaryBranch = (militaryBranch: string) => {
    setMilitaryBranch(militaryBranch);
  };

  const handleMilitaryRank = (militaryRank: string) => {
    setMilitaryRank(militaryRank);
  };

  const handleDisablityGrade = (disablityGrade: string) => {
    setDisablityGrade(disablityGrade);
  };

  return (
    <div className='divide-y divide-border'>
      <section className='pb-4'>
        <H2>개인 정보</H2>
        <div className='text-detail'>서로님에 대해 소개해주세요.</div>
      </section>

      <section className={SECTION_CLASS}>
        <fieldset>
          <legend className={LEGEND_CLASS}>
            <label htmlFor={nameId}>이름</label>
            <RequiredInputIcon />
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
          <legend className={LEGEND_CLASS}>
            <label htmlFor={email}>이메일</label>
            <RequiredInputIcon />
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
          <legend className={LEGEND_CLASS}>
            <label htmlFor={introduction}>자기소개</label>
            <RequiredInputIcon />
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
          <legend className={LEGEND_CLASS}>
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
          <legend className={LEGEND_CLASS}>
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

      {/* 이 아래로 민감 정보 수집 */}

      <section className={SECTION_CLASS}>
        <fieldset className='flex cursor-pointer items-center gap-1' onClick={handleConsentClick}>
          <CheckboxIcon filled={isPrivacyConsent} />
          <span className='text-body2 font-semibold'>민감 정보 수집 및 이용 동의</span>
        </fieldset>

        <fieldset>
          <legend className={LEGEND_CLASS}>
            <label htmlFor={militaryId}>병역</label>
            <RequiredInputIcon />
          </legend>
          <RadioButtonGroup id={militaryId} options={militaryList} selected={military} onSelect={setMilitary} />
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
        </fieldset>

        <fieldset>
          <legend className={LEGEND_CLASS}>
            <label htmlFor={veteranId}>보훈 여부</label>
            <RequiredInputIcon />
          </legend>
          <RadioButtonGroup id={veteranId} options={['대상', '비대상']} selected={veteran} onSelect={setVeteran} />
          {veteran === '대상' && (
            <div className='flex gap-4 py-4'>
              <Dropdown
                placeholder='관계 선택'
                options={disabilityGradeList}
                selected={disablityGrade}
                setSelected={handleDisablityGrade}
              />
              <Dropdown
                placeholder='비율 선택'
                options={disabilityGradeList}
                selected={disablityGrade}
                setSelected={handleDisablityGrade}
              />
            </div>
          )}
        </fieldset>

        <fieldset>
          <legend className={LEGEND_CLASS}>
            <label htmlFor={disablityId}>장애 여부</label>
            <RequiredInputIcon />
          </legend>
          <RadioButtonGroup
            id={disablityId}
            options={['대상', '비대상']}
            selected={disablity}
            onSelect={setDisablity}
          />
          {disablity === '대상' && (
            <div className='flex gap-4 py-4'>
              <Dropdown
                placeholder='장애 종류 선택'
                options={disabilityGradeList}
                selected={disablityGrade}
                setSelected={handleDisablityGrade}
              />
              <Dropdown
                placeholder='장애 등급 선택'
                options={disabilityGradeList}
                selected={disablityGrade}
                setSelected={handleDisablityGrade}
              />
            </div>
          )}
        </fieldset>
      </section>
    </div>
  );
};

export default PersonalInfoForm;

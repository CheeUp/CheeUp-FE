import DatePicker from '@/components/recruit/calendar/DatePicker';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import Button from '@/components/ui/button/Button';
import TextInput from '@/components/ui/input/TextInput';
import useTextInput from '@/hooks/useTextInput';
import { businessScaleList, jobList, recruitTypeList } from '@/lib/recruit';
import { useId, useState } from 'react';

const FIELDSET_CLASS = 'flex divide-x divide-input';
const LABEL_CLASS = 'bg-deepgray flex w-36 min-w-36 items-center justify-center text-heading4 font-bold text-deepgray';
const INPUT_CLASS = 'flex-grow p-6';

const RecruitForm: React.FC = () => {
  const [title, setTitle] = useTextInput('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [company, setCompany] = useTextInput('');
  const [businessScale, setBusinessScale] = useState<string>('');
  const [job, setJob] = useState<string[]>([]);
  const [recruitType, setRecruitType] = useState<string[]>([]);
  const [link, setLink] = useTextInput('');

  const titleId = useId();
  const dateId = useId();
  const companyId = useId();
  const businessScaleId = useId();
  const jobId = useId();
  const recruitTypeId = useId();
  const linkId = useId();

  const handleBusinessScale = (businessScale: string) => {
    setBusinessScale(businessScale);
  };
  const handleJob = (clickedJob: string) => {
    setJob(job.includes(clickedJob) ? job.filter((item) => item !== clickedJob) : [...job, clickedJob]);
  };
  const handleRecruitType = (clickedRecruitType: string) => {
    setRecruitType(
      recruitType.includes(clickedRecruitType)
        ? recruitType.filter((item) => item !== clickedRecruitType)
        : [...recruitType, clickedRecruitType],
    );
  };

  return (
    <div>
      <div className='flex w-full flex-col divide-y divide-input overflow-hidden rounded-lg border border-input bg-white'>
        <fieldset className={FIELDSET_CLASS}>
          <label htmlFor={titleId} className={LABEL_CLASS}>
            공고명
          </label>
          <div className={INPUT_CLASS}>
            <TextInput
              id={titleId}
              className='w-full'
              value={title}
              onChange={setTitle}
              placeholder='공고명을 입력해 주세요.'
            />
          </div>
        </fieldset>
        <fieldset className={FIELDSET_CLASS}>
          <label htmlFor={dateId} className={LABEL_CLASS}>
            모집 날짜
          </label>
          <div className={INPUT_CLASS + ' flex gap-4'}>
            <DatePicker id={dateId} placeholder='시작' value={startDate} setDate={setStartDate} />
            <DatePicker placeholder='종료' value={endDate} setDate={setEndDate} startDate={startDate} />
          </div>
        </fieldset>
        <div className='grid grid-cols-2 divide-x divide-input'>
          <fieldset className={FIELDSET_CLASS}>
            <label htmlFor={companyId} className={LABEL_CLASS}>
              기업명
            </label>
            <div className={INPUT_CLASS}>
              <TextInput
                id={companyId}
                className='w-full'
                value={company}
                onChange={setCompany}
                placeholder='기업명을 입력해 주세요.'
              />
            </div>
          </fieldset>
          <fieldset className={FIELDSET_CLASS}>
            <label htmlFor={businessScaleId} className={LABEL_CLASS}>
              기업 규모
            </label>
            <div className={INPUT_CLASS}>
              <Dropdown
                id={businessScaleId}
                placeholder='기업 규모를 선택해 주세요.'
                options={businessScaleList}
                selected={businessScale}
                setSelected={handleBusinessScale}
                color='gray'
              />
            </div>
          </fieldset>
        </div>
        <div className='grid grid-cols-2 divide-x divide-input'>
          <fieldset className={FIELDSET_CLASS}>
            <label htmlFor={jobId} className={LABEL_CLASS}>
              직무
            </label>
            <div className={INPUT_CLASS}>
              <Dropdown
                id={jobId}
                placeholder='직무를 선택해 주세요.'
                options={jobList}
                selected={jobList.filter((item) => job.includes(item))}
                setSelected={handleJob}
                color='gray'
              />
            </div>
          </fieldset>
          <fieldset className={FIELDSET_CLASS}>
            <label htmlFor={recruitTypeId} className={LABEL_CLASS}>
              채용 형태
            </label>
            <div className={INPUT_CLASS}>
              <Dropdown
                id={recruitTypeId}
                placeholder='채용 형태를 선택해 주세요.'
                options={recruitTypeList}
                selected={recruitTypeList.filter((item) => recruitType.includes(item))}
                setSelected={handleRecruitType}
                color='gray'
              />
            </div>
          </fieldset>
        </div>
        <fieldset className={FIELDSET_CLASS}>
          <label htmlFor={linkId} className={LABEL_CLASS}>
            채용 사이트 링크
          </label>
          <div className={INPUT_CLASS}>
            <TextInput
              id={linkId}
              className='w-full'
              value={link}
              onChange={setLink}
              placeholder='링크를 입력해주세요.'
            />
          </div>
        </fieldset>
        <fieldset className={FIELDSET_CLASS}>
          <label className={LABEL_CLASS}>공고 이미지</label>
          <div className={INPUT_CLASS}>
            <TextInput className='w-full' value='' onChange={() => {}} placeholder='공고명을 입력해 주세요.' />
          </div>
        </fieldset>
        <fieldset className={FIELDSET_CLASS}>
          <label className={LABEL_CLASS}>직무 상세 요강</label>
          <div className={INPUT_CLASS}>
            <TextInput className='w-full' value='' onChange={() => {}} placeholder='공고명을 입력해 주세요.' />
          </div>
        </fieldset>
      </div>
      <div className='mt-6 flex justify-end gap-4'>
        <Button onClick={() => {}} type='outlined'>
          취소
        </Button>
        <Button onClick={() => {}} type='filled'>
          등록
        </Button>
      </div>
    </div>
  );
};

export default RecruitForm;
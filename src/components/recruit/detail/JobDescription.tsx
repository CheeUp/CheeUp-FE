import TechBadge from '@/components/ui/badge/TechBadge';
import { DownArrowIcon } from '@/components/ui/icons/ArrowIcon';
import { TJotDescription } from '@/model/recruit';
import { useState } from 'react';

interface PJobDescription {
  jobDescription: TJotDescription;
}

const JobDescription: React.FC<PJobDescription> = ({
  jobDescription: { type, title, region, description, requirement, preferredRequirement, jobDescriptionSkills },
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);

  return (
    <div className='w-full divide-y divide-border rounded-lg border border-border bg-background'>
      <div
        className='flex cursor-pointer items-center justify-between gap-3 px-7 py-4 text-body2 font-bold'
        onClick={() => setIsOpened(!isOpened)}
      >
        <p className='w-24 text-deepgray'>{type}</p>
        <p className='grow text-deepgray'>{title}</p>
        <p className='text-deepgray'>{region}</p>
        <div className={`${isOpened ? 'rotate-180' : ''} transition-all duration-200`}>
          <DownArrowIcon />
        </div>
      </div>
      {isOpened && (
        <div className='flex flex-col gap-4 px-7 py-4'>
          <dl>
            <dt className='mb-1 text-body2 font-bold'>상세 내용</dt>
            <dd className='whitespace-pre text-body2 text-deepgray'>{description}</dd>
          </dl>
          <dl>
            <dt className='mb-1 text-body2 font-bold'>자격 요건</dt>
            <dd className='whitespace-pre text-body2 text-deepgray'>{requirement}</dd>
          </dl>
          <dl>
            <dt className='mb-1 text-body2 font-bold'>우대 사항</dt>
            <dd className='whitespace-pre text-body2 text-deepgray'>{preferredRequirement}</dd>
          </dl>
          <dl>
            <dt className='mb-1 text-body2 font-bold'>기술</dt>
            <div className='flex flex-wrap gap-4'>
              {jobDescriptionSkills.map(({ id, skill }) => (
                <dd key={id}>
                  <TechBadge>{skill}</TechBadge>
                </dd>
              ))}
            </div>
          </dl>
        </div>
      )}
    </div>
  );
};

export default JobDescription;

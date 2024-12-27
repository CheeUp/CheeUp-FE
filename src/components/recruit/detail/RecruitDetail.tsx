import JobDescription from '@/components/recruit/detail/JobDescription';
import Button from '@/components/ui/button/Button';
import BookmarkIcon from '@/components/ui/icons/BookmarkIcon';
import CloseIcon from '@/components/ui/icons/CloseIcon';
import LikeIcon from '@/components/ui/icons/LikeIcon';
import LinkIcon from '@/components/ui/icons/LinkIcon';
import { H2 } from '@/components/ui/typography/Heading';
import { MRecruitDetail } from '@/mocks/data/recruit';
import { dateToKor, getDDay } from '@/util/date';
import { allowScroll, preventScroll } from '@/util/scroll';
import { useEffect, useRef } from 'react';

interface PRecruitDetail {
  id: number;
  close: () => void;
}

const RecruitDetail: React.FC<PRecruitDetail> = ({ id, close }) => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollY = preventScroll();
    return () => {
      allowScroll(scrollY);
    };
  }, []);

  const recruitDetail = MRecruitDetail.find((recruit) => recruit.id === id);
  if (!recruitDetail) return null;
  const { title, company, startDate, endDate, url, jobNoticeFiles, jobDescriptions } = recruitDetail;

  const toggleScrap = () => {};

  const toggleLike = () => {};

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== backgroundRef.current) return;
    const urlWithoutHash = window.location.pathname + window.location.search;
    window.history.replaceState(null, '', urlWithoutHash);
    close();
  };

  return (
    <div
      className='fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-modal'
      ref={backgroundRef}
      onMouseDown={closeModal}
    >
      <div className='drop-shadow-modal mx-auto my-16 flex w-[55rem] flex-col gap-6 rounded-xl bg-white px-10 py-8'>
        <button className='absolute right-5 top-5' onClick={close}>
          <CloseIcon />
        </button>
        <div className='flex flex-col gap-1'>
          <H2>{title}</H2>
          <p className='text-body1 font-bold'>{company}</p>
          <p className='text-body2 font-bold text-deepgray'>
            {dateToKor(startDate)} ~ {dateToKor(endDate)}{' '}
            <span className='text-complementary-lightcrimson'>({getDDay(endDate)})</span>
          </p>
        </div>
        <div className='flex gap-4'>
          <a className='grow' href={url} target='_blank' rel='noreferrer'>
            <Button className='flex w-full items-center justify-center gap-2' type='outlined' onClick={() => {}}>
              <LinkIcon />
              채용사이트
            </Button>
          </a>
          <Button className='flex grow items-center justify-center gap-2' type='outlined' onClick={toggleScrap}>
            <BookmarkIcon filled={false} />
            공고 스크랩
          </Button>
          <Button className='flex grow items-center justify-center gap-2' type='outlined' onClick={toggleLike}>
            <LikeIcon />
            좋아요
          </Button>
        </div>
        <ul className='flex flex-col gap-4'>
          {jobNoticeFiles.map((src, idx) => (
            <li key={idx}>
              <img className='h-full w-full' src={src} alt={`채용 공고 이미지 ${idx + 1}`} />
            </li>
          ))}
        </ul>
        <ul className='flex flex-col gap-4'>
          {jobDescriptions.map((description) => (
            <li key={description.id}>
              <JobDescription jobDescription={description} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecruitDetail;

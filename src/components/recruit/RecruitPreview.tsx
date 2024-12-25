import RecruitStateBadge from '@/components/ui/badge/RecruitStateBadge';
import BookmarkIcon from '@/components/ui/icons/BookmarkIcon';
import { Link } from 'react-router-dom';

interface PRecruitPreview {
  id: number;
  isStart: boolean;
  company: string;
  isScraped: boolean;
  isHovered?: boolean;
}

const RecruitPreview: React.FC<PRecruitPreview> = ({ id, isStart, company, isScraped, isHovered }) => {
  const handleBookmark = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <Link
      to={`#${id}`}
      className={`flex items-center justify-between gap-1 rounded-[0.3rem] pl-2 pr-1 ${isHovered ? 'bg-black/5' : ''}`}
    >
      <RecruitStateBadge isStart={isStart} />
      <p className='grow'>{company}</p>
      <button onClick={handleBookmark}>
        <BookmarkIcon filled={isScraped} />
      </button>
    </Link>
  );
};

export default RecruitPreview;

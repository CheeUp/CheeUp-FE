import RecruitCalendar from '@/components/recruit/calendar/RecruitCalendar';
import RecruitDetail from '@/components/recruit/detail/RecruitDetail';
import RecruitFilter from '@/components/recruit/RecruitFilter';
import { isNaturalNumber } from '@/util/number';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RecruitPage: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  const pathname = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.hash) {
      if (isNaturalNumber(pathname.hash.slice(1))) setModal(true);
      else {
        setModal(false);
        navigate('/recruit');
      }
    } else {
      setModal(false);
    }
  }, [pathname, navigate]);

  return (
    <div className='px-14'>
      <RecruitFilter />
      <RecruitCalendar />
      {modal && <RecruitDetail close={() => setModal(false)} id={Number(pathname.hash.slice(1))} />}
    </div>
  );
};

export default RecruitPage;

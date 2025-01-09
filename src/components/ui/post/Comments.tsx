import { RightBottomArrowIcon } from '@/components/ui/icons/ArrowIcon';
import Profile from '@/components/ui/Profile';
import { TTier } from '@/model/tier';

interface PComment {
  data: {
    profileImage: string;
    nickname: string;
    tier: TTier;
  };
  content: string;
  time: string;
  isReply?: boolean;
}

export const Comment = ({ data, content, time, isReply = false }: PComment) => {
  return (
    <div className={`flex flex-col gap-[8px] ${isReply ? 'bg-background' : 'bg-white'} px-[24px] py-[14px]`}>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
          {isReply && <RightBottomArrowIcon />}
          <Profile {...data} />
        </div>
        <div className='text-detail text-deepgray'>{time}</div>
      </div>
      <div>
        <div className='text-body2'>{content}</div>
      </div>
      {!isReply && (
        <div>
          <div className='text-detail text-deepgray'>답글쓰기</div>
        </div>
      )}
    </div>
  );
};

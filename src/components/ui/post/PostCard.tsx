import { CommentIcon, HitIcon, LikeIcon } from '@/components/ui/icons/PostIcon';
import Profile from '@/components/ui/Profile';
import { TPostCard } from '@/mocks/data/post';
import React from 'react';

const PostCard: React.FC<TPostCard> = ({
  profileImage,
  nickname,
  tier,
  title,
  content,
  views,
  likes,
  comments,
  timestamp,
}) => {
  return (
    <div className='flex justify-center'>
      <div className='flex h-[133px] w-[766px] gap-[20px] border bg-white px-[40px] py-[24px]'>
        {profileImage && nickname && tier && <Profile profileImage={profileImage} nickname={nickname} tier={tier} />}
        <div className='flex flex-1 justify-between'>
          <div className='flex flex-col justify-between'>
            <div className='text-body2 font-bold'>{title}</div>
            <div className='text-detail text-deepgray'>{content}</div>
            <div className='flex items-center text-detail font-bold'>
              <div className='mr-[10px] flex items-center'>
                <HitIcon />
                <span className='ml-[4px] text-disabled'>{views}</span>
              </div>
              <div className='mr-[10px] flex items-center'>
                <LikeIcon />
                <span className='ml-[4px] text-disabled'>{likes}</span>
              </div>
              <div className='mr-[10px] flex items-center'>
                <CommentIcon />
                <span className='ml-[4px] text-disabled'>{comments}</span>
              </div>
            </div>
          </div>

          <div className='text-detail text-deepgray'>{timestamp}</div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;

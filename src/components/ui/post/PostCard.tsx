import { Avatar } from '@/components/ui/Avatar';
import { CommentIcon, HitIcon, LikeIcon } from '@/components/ui/icons/PostIcon';
import React from 'react';

const TIER_COLORS: Record<Tier, string> = {
  bronze: '#9D4900',
  silver: '#38546E',
  gold: '#D28500',
  platinum: '#00C78B',
  diamond: '#009EE5',
  ruby: '#E0004C',
};

type Tier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'ruby';

interface PPostCard {
  profileImage?: string;
  nickname?: string;
  tier?: Tier;
  title: string;
  content: string;
  views: number;
  likes: number;
  comments: number;
  timestamp: string;
}

const PostCard: React.FC<PPostCard> = ({
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
  const tierColor = tier && TIER_COLORS[tier];

  return (
    <div className='flex justify-center'>
      <div className='flex h-[133px] w-[766px] justify-between border bg-white px-[40px] py-[32px]'>
        {(profileImage || nickname || tier) && (
          <div className='flex h-[36px] w-[133px] items-center justify-between'>
            {profileImage && (
              <Avatar
                src='https://i.namu.wiki/i/lOuQyz5W-tCsGMZx-ifAObAy0F__cjQuJb632FPWAuDhqRFzFb40tSijKE1xChUJ8Mb0K48iHcZyH-ZLjGY89xnDLkUaSyfLiSTK50DvtCbQZL-NQmyhgpONt0VWcKIwhf1AEiTy4CYzOJJmjxXY4w.webp'
                size='sm'
              />
            )}
            <div className='flex w-[73px] items-center justify-between'>
              {nickname && <div className='text-body2 font-bold text-deepgray'>{nickname}</div>}
              {tier && (
                <div
                  className='flex h-[14px] w-[14px] items-center justify-center rounded-[2px]'
                  style={{ backgroundColor: tierColor }}
                >
                  <span className='text-[9px] font-bold text-white'>1</span>
                </div>
              )}
            </div>
          </div>
        )}
        <div className='flex h-[75px] w-[418px] flex-col justify-between'>
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
  );
};

export default PostCard;

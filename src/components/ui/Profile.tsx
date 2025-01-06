import { Avatar } from '@/components/ui/Avatar';
import Tier from '@/components/ui/Tier';
import { TTier } from '@/model/tier';

interface PProfile {
  profileImage: string;
  nickname: string;
  tier: TTier;
}

const Profile: React.FC<PProfile> = ({ profileImage, nickname, tier }) => {
  return (
    <div className='flex h-[36px] w-[170px] items-center gap-[10px]'>
      <div>{profileImage && <Avatar src={profileImage} size='sm' />}</div>
      <div className='flex w-[128px] items-center'>
        <div>{nickname && <div className='mr-[5px] text-body2 font-bold text-deepgray'>{nickname}</div>}</div>
        <div>{tier && <Tier tier={tier} tierNum={1} />}</div>
      </div>
    </div>
  );
};

export default Profile;

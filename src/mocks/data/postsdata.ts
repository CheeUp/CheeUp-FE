import { Tier } from '@/components/ui/post/PostCard';

const postsData = [
  {
    profileImage: '/default-profile.png',
    nickname: '싸피킴',
    tier: 'gold' as Tier,
    title: '제목1',
    content: '글 내용1',
    views: 123,
    likes: 45,
    comments: 10,
    timestamp: '2시간 전',
  },
  {
    profileImage: '/default-profile.png',
    nickname: '김싸피',
    tier: 'silver' as Tier,
    title: '제목2',
    content: '글 내용2',
    views: 89,
    likes: 22,
    comments: 5,
    timestamp: '1일 전',
  },
];

export default postsData;
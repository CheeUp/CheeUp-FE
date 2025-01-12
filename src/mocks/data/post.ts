import { TTier } from '@/model/tier';

export interface TPostCard {
  profileImage?: string;
  nickname?: string;
  tier?: TTier;
  title: string;
  content: string;
  views: number;
  likes: number;
  comments: number;
  timestamp: string;
}

export const postData: TPostCard = {
  profileImage: 'https://via.placeholder.com/50',
  nickname: '홍길동',
  tier: 'gold' as TTier,
  title: 'React Hooks',
  content: '안녕안녕안녕하세요!!!!!!! ...',
  views: 1234,
  likes: 256,
  comments: 12,
  timestamp: '2시간 전',
};

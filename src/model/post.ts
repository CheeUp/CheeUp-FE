export interface TPostCard {
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

export type Tier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'ruby';

import { TTier } from "@/model/tier";

const postsData = [
  {
    profileImage: 'temp.jpg',
    nickname: '싸피킴',
    tier: 'gold' as TTier,
    title: '제목1',
    content: '글 내용1',
    views: 123,
    likes: 45,
    comments: 10,
    timestamp: '2시간 전',
  },
  {
    profileImage: 'temp.jpg',
    nickname: '김싸피',
    tier: 'silver' as TTier,
    title: '제목2',
    content: '글 내용2',
    views: 89,
    likes: 22,
    comments: 5,
    timestamp: '1일 전',
  },
];

export default postsData;
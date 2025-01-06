import React from 'react';
import PostCard from '@/components/ui/post/PostCard';
import postsDataMock from '@/mocks/data/postsdata';

const ScrapList: React.FC = () => (
  <div>
    <h2 className="mb-4 text-2xl font-bold">스크랩한 글</h2>
    {postsDataMock.map((post, index) => (
      <PostCard key={index} {...post} />
    ))}
  </div>
);

export default ScrapList;
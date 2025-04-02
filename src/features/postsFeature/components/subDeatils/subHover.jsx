import { Button } from '@mantine/core';
import React from 'react';
import { Route } from '../../../../routes/r.$slug';
import Rounder from '../../../../utils/rounder';

function SubHover() {
  const { posts } = Route.useLoaderData();
  const roundedMember = Rounder(posts.post.topic.memberCount);
  const roundedOnline = Rounder(posts.post.topic.onlineCount);
  return (
    <div className="flex flex-col gap-5 absolute bg-[var(--mantine-color-default-hover)] w-50 z-50 p-2 translate-y-4 rounded text-white shadow-lg">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              className="rounded-full size-10"
              src={posts.post.topic.imageUrl}
            />
            <p>r/{posts.post.topic.slug}</p>
          </div>
          <div>
            <Button color="gray">Join</Button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm">{posts.post.topic.description}</p>
      </div>
      <div className="flex gap-2 text-sm">
        <p>
          {roundedMember} <br /> members
        </p>
        <p>
          {roundedOnline} <br /> online
        </p>
      </div>
    </div>
  );
}

export default SubHover;

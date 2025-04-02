import { Button } from '@mantine/core';
import React from 'react';
import { Route } from '../../../../routes/r.$slug';

function UserHover() {
  const { posts } = Route.useLoaderData();
  return (
    <div className="flex flex-col gap-5 absolute bg-[var(--mantine-color-default-hover)] w-50 z-50 p-2 translate-y-4 rounded text-white shadow-lg">
      <div className="flex gap-2">
        <div>
          <img
            className="rounded-full size-10 "
            src={posts.post.user.imageUrl}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-bold">{posts.post.user.username}</p>
          <p>{posts.post.user.joinDate}</p>
        </div>
      </div>
      <div className="flex gap-2 text-sm">
        <p>
          {posts.post.user.postKarma} <br /> post karma
        </p>
        <p>
          {posts.post.user.commentKarma} <br /> comment karma
        </p>
      </div>
      <div className="flex gap-2">
        <Button>Follow</Button> <Button color="gray">Start Chat</Button>
      </div>
    </div>
  );
}

export default UserHover;

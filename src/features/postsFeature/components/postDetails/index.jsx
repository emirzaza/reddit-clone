import { Button } from '@mantine/core';
import React from 'react';
import { IconArrowBigUp, IconArrowBigDown } from '@tabler/icons-react';
import { Route } from '../../../../routes/r.$slug';
import Rounder from '../../../../utils/rounder';

function PostDetails() {
  const { posts } = Route.useLoaderData();
  const roundedNumber = Rounder(posts.post.upvoteCount);

  return (
    <div>
      <div className="flex flex-col gap-3  p-5 ">
        <h1 className="text-2xl font-bold">{posts.post.title}</h1>
        <p>{posts.post.description}</p>
      </div>
      <div className="flex gap-3 mt-5 bg-[]">
        <div className="flex bg-[var(--mantine-color-default-hover)] rounded-2xl p-1">
          <Button variant="subtle" size="xs" color="gray">
            <IconArrowBigUp />
          </Button>
          <p>{roundedNumber}</p>
          <Button size="xs" variant="subtle" color="gray">
            <IconArrowBigDown />
          </Button>
        </div>

        <Button color="gray">232</Button>
        <Button color="gray">Share</Button>
      </div>
    </div>
  );
}

export default PostDetails;

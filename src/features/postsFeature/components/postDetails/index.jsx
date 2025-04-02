import { Button } from '@mantine/core';
import React from 'react';
import { IconArrowBigUp, IconArrowBigDown } from '@tabler/icons-react';

function PostDetails() {
  return (
    <div>
      <div className="flex flex-col gap-3  p-5 ">
        <h1 className="text-2xl font-bold">This is a header</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
          molestias illo veniam obcaecati alias cum maxime, culpa placeat nulla
          quisquam a velit similique? Officiis ratione suscipit dolore inventore
          explicabo atque.
        </p>
      </div>
      <div className="flex gap-3 mt-5 bg-[]">
        <div className="flex bg-[var(--mantine-color-default-hover)] rounded-2xl p-1">
          <Button variant="subtle" size="xs" color="gray">
            <IconArrowBigUp />
          </Button>
          <p>18</p>
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

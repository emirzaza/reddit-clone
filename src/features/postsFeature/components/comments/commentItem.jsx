import { Button } from '@mantine/core';
import React from 'react';
import { IconArrowBigUp, IconArrowBigDown } from '@tabler/icons-react';

function CommentItem() {
  return (
    <div className="flex flex-col gap-1 p-3 rounded-2xl ">
      <div className="flex items-center gap-1">
        <img className="rounded-full size-10" src="/sct.jpg" />
        <p>brianjenjins94 -</p>
        <p>10mo ago</p>
      </div>
      <div>
        <p className="text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ea!
          Molestias officiis, praesentium, in nihil, fuga earum rerum
          perspiciatis unde nobis sequi reiciendis fugit consectetur assumenda
          dicta recusandae asperiores quibusdam!
        </p>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="subtle" color="gray" size="xs" radius="xl">
          <IconArrowBigUp />
        </Button>
        <p className="text-xs">31</p>
        <Button variant="subtle" color="gray" size="xs" radius="xl">
          <IconArrowBigDown />
        </Button>
        <Button variant="subtle" color="gray" size="xs" radius="xl">
          reply
        </Button>
        <Button variant="subtle" color="gray" size="xs" radius="xl">
          share
        </Button>
      </div>
    </div>
  );
}

export default CommentItem;

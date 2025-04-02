import { Button } from '@mantine/core';
import React from 'react';

function UserHover() {
  return (
    <div className="flex flex-col gap-5 absolute bg-[var(--mantine-color-default-hover)] w-50 z-50 p-2 translate-y-4 rounded text-white shadow-lg">
      <div className="flex gap-2">
        <div>
          <img className="rounded-full " src="/sct.jpg" />
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-bold">PatternFar2288</p>
          <p>may 8 ,2023</p>
        </div>
      </div>
      <div className="flex gap-2 text-sm">
        <p>
          640 <br /> post karma
        </p>
        <p>
          222 <br /> comment karma
        </p>
      </div>
      <div className="flex gap-2">
        <Button>Follow</Button> <Button color="gray">Start Chat</Button>
      </div>
    </div>
  );
}

export default UserHover;

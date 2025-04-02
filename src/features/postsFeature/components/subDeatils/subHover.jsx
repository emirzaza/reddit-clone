import { Button } from '@mantine/core';
import React from 'react';

function SubHover() {
  return (
    <div className="flex flex-col gap-5 absolute bg-[var(--mantine-color-default-hover)] w-50 z-50 p-2 translate-y-4 rounded text-white shadow-lg">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img className="rounded-full size-10" src="/image0.jpg" />
            <p>r/webdev</p>
          </div>
          <div>
            <Button color="gray">Join</Button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
        </p>
      </div>
      <div className="flex gap-2 text-sm">
        <p>
          3M <br /> members
        </p>
        <p>
          12 <br /> online
        </p>
      </div>
    </div>
  );
}

export default SubHover;

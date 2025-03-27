import { Button } from '@mantine/core';
import Rounder from '../../../../utils/rounder';

function CommunityItems({ img, name, memberCount }) {
  const roundedNumber = Rounder(memberCount);
  return (
    <div className="flex justify-between p-2 items-center  w-70 text-xs my-2 hover:bg-[var(--mantine-color-default-hover)] rounded-2xl">
      <div className="flex gap-2 ">
        <div>
          <img className="rounded-full h-10" src={img} />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p>{roundedNumber}</p>
        </div>
      </div>
      <div>
        <Button size="xs" color="gray">
          Join
        </Button>
      </div>
    </div>
  );
}

export default CommunityItems;

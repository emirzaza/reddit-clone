import { Button } from '@mantine/core';

function Post({ img, prg, profile, user, date }) {
  return (
    <div className="flex flex-col mt-5 p-3 rounded-2xl hover:bg-[var(--mantine-color-default-hover)]">
      <div className="flex justify-between items-center ">
        <div className="flex flex-row h-10 gap-2">
          <img src={profile} className="rounded-full  size-9" />
          <p>{user}</p>
          <p>{date}</p>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col">
        <p>{prg}</p>
        <img className="rounded-xl" src={img} />
      </div>

      <div className="flex gap-3 mt-1">
        <Button color="gray" radius={20}>
          3.46
        </Button>
        <Button color="gray" radius={20}>
          46
        </Button>
        <Button color="gray" radius={20}>
          *
        </Button>
        <Button color="gray" radius={20}>
          Share
        </Button>
      </div>
    </div>
  );
}

export default Post;

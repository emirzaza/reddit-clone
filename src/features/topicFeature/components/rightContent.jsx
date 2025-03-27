import { Button } from '@mantine/core';
import { Route } from '../../../routes/t.$slug';

function RightContent() {
  return (
    <div className=" hidden sm:flex flex-col bg-black p-2 rounded-2xl">
      <h1 className="text-gray-500 mb-2 text-xs">COMMUNITIES</h1>
      <div>
        <Communities></Communities>
      </div>
    </div>
  );
}

function SimilarItems() {
  return (
    <div>
      <ul className="flex flex-col gap-3  text-sm w-70">
        <li>Hello this is similar items</li>
        <li>Hello s sems</li>
        <li>Hello this is similar items</li>
        <li>Hello this iitems</li>
        <li>Hello s items</li>
      </ul>
    </div>
  );
}

function CommunityItem({ img, name, num }) {
  return (
    <div className="flex justify-between p-2 items-center  w-70 text-xs my-2 hover:bg-[var(--mantine-color-default-hover)] rounded-2xl">
      <div className="flex gap-2 ">
        <div>
          <img className="rounded-full h-10" src={img} />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p>{num}</p>
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

function Communities() {
  const { info } = Route.useLoaderData();

  return (
    <div>
      {info.communities.map((com, index) => {
        return (
          <CommunityItem
            key={index}
            img={com.imageUrl}
            name={com.slug}
            num={com.members}
          />
        );
      })}
    </div>
  );
}

export default RightContent;

import { Route } from '../../../../routes/t.$slug';
import CommunityItems from './CommunityItems';

function RightTab() {
  const { info } = Route.useLoaderData();

  return (
    <div className="bg-black rounded-2xl p-2 hidden sm:flex flex-col">
      {info.communities.map((com, index) => {
        return (
          <CommunityItems
            key={index}
            img={com.imageUrl}
            name={com.slug}
            memberCount={com.members}
          />
        );
      })}
    </div>
  );
}

export default RightTab;

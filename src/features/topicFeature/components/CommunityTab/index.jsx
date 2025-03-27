import { Route } from '../../../../routes/t.$slug';
import ComItem from './ComItem';

function CommunityTab() {
  const { info } = Route.useLoaderData();

  return (
    <div>
      {info.communities.map((com, index) => {
        return (
          <ComItem
            key={index}
            img={com.imageUrl}
            name={com.slug}
            num={com.members}
            p={com.description}
          />
        );
      })}
    </div>
  );
}
export default CommunityTab;

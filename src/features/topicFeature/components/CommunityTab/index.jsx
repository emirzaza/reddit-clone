import { Route } from '../../../../routes/t.$slug';
import ComItem from './ComItem';

function CommunityTab() {
  const { info } = Route.useLoaderData();

  return info.communities.map((com, index) => {
    return (
      <ComItem
        key={index}
        img={com.imageUrl}
        name={com.slug}
        memberCount={com.members}
        description={com.description}
      />
    );
  });
}
export default CommunityTab;

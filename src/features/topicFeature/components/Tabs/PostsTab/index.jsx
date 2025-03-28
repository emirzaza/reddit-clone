import { Button } from '@mantine/core';
import { Route } from '../../../../../routes/t.$slug';
import Post from './post';

const PostsTab = () => {
  const { posts } = Route.useLoaderData();
  const ara = Route.useSearch();
  const navigate = Route.useNavigate();

  const loadMore = () => {
    const newLimit = ara?.limit ? parseInt(ara.limit, 10) + 5 : 10; // Eğer limit varsa artır, yoksa 10 ata

    navigate({
      search: { limit: newLimit },
    });
  };

  const loadless = () => {
    const newLimit = 5; // Eğer limit varsa artır, yoksa 10 ata

    navigate({
      search: { limit: newLimit },
    });
  };

  return (
    <>
      {posts.posts.map(post => (
        <Post
          key={post.id}
          img={post.img}
          prg={post.content}
          date={post.date}
          profile={post.profilePic}
          user={post.username}
        />
      ))}

      <Button onClick={loadMore}>Load more...</Button>
      <Button onClick={loadless}>Show less...</Button>
    </>
  );
};

export default PostsTab;

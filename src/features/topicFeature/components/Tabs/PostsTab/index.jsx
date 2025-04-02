import { Button } from '@mantine/core';
import { Route } from '../../../../../routes/t.$slug';
import Post from './post';
import { Link } from '@tanstack/react-router';

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

  return (
    <>
      {posts.posts.map((post, index) => (
        <Link
          key={index}
          to={`/r/${post.slug}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Post
            img={post.img}
            prg={post.content}
            date={post.date}
            profile={post.profilePic}
            user={post.username}
          />
        </Link>
      ))}

      <Button
        variant="transparent"
        color="gray"
        size="xs"
        radius="xl"
        onClick={loadMore}
      >
        Load more...
      </Button>
    </>
  );
};

export default PostsTab;

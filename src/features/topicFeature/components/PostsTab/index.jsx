import { Route } from '../../../../routes/t.$slug';
import Post from './post';

const PostsTab = () => {
  const { posts } = Route.useLoaderData();

  console.log(posts);

  return posts.map(post => (
    <Post
      key={post.id}
      img={post.img}
      prg={post.content}
      date={post.date}
      profile={post.profilePic}
      user={post.username}
    />
  ));
};

export default PostsTab;

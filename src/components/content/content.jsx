import Header from './components/Header';
import Post from './components/post';
import RightContent from './components/rightContent';
import { Route } from '../../routes/t.$slug';

function Content() {
  const { data: data, posts: posts } = Route.useLoaderData();

  return (
    <div className="flex justify-center flex-row">
      <div className="flex flex-col w-3/4 sm:w-1/2 hover:'var(--mantine-color-hover)'">
        <Header title={data.title} parent={data.parentSlug}></Header>
        <Post
          img={posts.img}
          prg={posts.content}
          date={posts.date}
          profile={posts.profilePic}
          user={posts.username}
        ></Post>
      </div>
      <div className="flex items-center">
        <RightContent></RightContent>
      </div>
    </div>
  );
}

export default Content;

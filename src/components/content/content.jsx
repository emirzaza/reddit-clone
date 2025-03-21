import Header from './components/Header';
import Post from './components/post';

function Content() {
  return (
    <div className="flex  flex-col w-1/2 hover:'var(--mantine-color-hover)'">
      <Header></Header>
      <Post></Post>
    </div>
  );
}

export default Content;

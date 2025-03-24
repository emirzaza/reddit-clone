import Header from './components/Header';
import Post from './components/post';
import { useState, useEffect } from 'react';

function Content({ slug }) {
  const [data, setData] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!slug) return; // slug yoksa fetch etme!

    fetch(`/api/topics/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Veri çekilemedi');
        return res.json();
      })
      .then(setData)
      .catch(err => console.error('Hata:', err));

    fetch(`/api/topics/${slug}/posts`)
      .then(res => {
        if (!res.ok) throw new Error('Veri çekilemedi');
        return res.json();
      })
      .then(setPosts)
      .catch(err => console.error('Hata:', err));
  }, [slug]);

  if (!data) return <p>Yükleniyor...</p>;

  console.log(data);
  console.log(posts);

  return (
    <div className="flex flex-col w-1/2 hover:'var(--mantine-color-hover)'">
      <Header title={data.title} parent={data.parentSlug}></Header>
      <Post
        img={posts.img}
        prg={posts.content}
        date={posts.date}
        profile={posts.profilePic}
        user={posts.username}
      ></Post>
    </div>
  );
}

export default Content;

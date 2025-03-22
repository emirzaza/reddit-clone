import Header from './components/Header';
import Post from './components/post';
import { useState, useEffect } from 'react';

function Content({slug}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!slug) return; // slug yoksa fetch etme!
  
    fetch(`/items/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Veri çekilemedi');
        return res.json();
      })
      .then(setData)
      .catch((err) => console.error('Hata:', err));
  }, [slug]);
  

  if (!slug) return <p>Welcome to REDDIT</p>;
  if (!data) return <p>Yükleniyor...</p>;
  
  console.log(data);

  return (
    <div className="flex  flex-col w-1/2 hover:'var(--mantine-color-hover)'">
      <Header ></Header>
      <Post prg={data.Content} img={data.img}></Post>
    </div>
  );
}

export default Content;

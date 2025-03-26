import { createFileRoute, useParams } from '@tanstack/react-router';
import Content from '../components/content/content';

export const Route = createFileRoute('/t/$slug')({
  component: Topic,
  loader: async ({ params }) => {
    const slug = params.slug;
    if (!slug) {
      throw new Error('Slug eksik!');
    }

    const res = await fetch(`/api/topics/${slug}`);
    if (!res.ok) {
      throw new Error('Veri çekilemedi');
    }

    const res2 = await fetch(`/api/topics/${slug}/posts`);
    if (!res.ok) {
      if (!res.ok) throw new Error('Veri çekilemedi');
    }

    const data = await res.json();
    const posts = await res2.json();

    console.log('a', data);
    return { data, posts };
  },
  pendingComponent: Loading,
});

function Topic() {
  return (
    <div className="flex justify-center">
      <Content></Content>
    </div>
  );
}

function Loading() {
  return <h1>Loading</h1>;
}

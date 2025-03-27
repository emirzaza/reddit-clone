import { createFileRoute } from '@tanstack/react-router';
import { TopicFeature } from '../features';

export const Route = createFileRoute('/t/$slug')({
  component: Topic,
  loader: async ({ params }) => {
    const slug = params.slug;

    const infoResponse = await fetch(`/api/topics/${slug}`);

    if (!infoResponse.ok) {
      throw new Error('Veri çekilemedi');
    }

    const postsResponse = await fetch(`/api/topics/${slug}/posts`);

    if (!postsResponse.ok) {
      throw new Error('Veri çekilemedi');
    }

    const info = await infoResponse.json();
    const posts = await postsResponse.json();

    return { info, posts };
  },
  pendingComponent: Loading,
});

function Topic() {
  return <TopicFeature />;
}

function Loading() {
  return <h1>Loading</h1>;
}

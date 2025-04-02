import { createFileRoute } from '@tanstack/react-router';
import { PostsFeature } from '../features';

export const Route = createFileRoute('/r/$slug')({
  component: Topic,

  loader: async ({ params, location: { search } }) => {
    const slug = params.slug;
    const limit = search.limit ?? 4;

    const infoResponse = await fetch(`/api/posts/${slug}`);

    if (!infoResponse.ok) {
      throw new Error('Veri çekilemedi');
    }

    const postsResponse = await fetch(
      `/api/posts/${slug}/comments?cursor=0&limit=${limit}`
    );

    if (!postsResponse.ok) {
      throw new Error('Veri çekilemedi');
    }

    const posts = await infoResponse.json();
    const commentsData = await postsResponse.json();

    return { posts, commentsData };
  },
  pendingComponent: Loading,
});

function Topic() {
  return <PostsFeature />;
}

function Loading() {
  return <h1>Loading</h1>;
}

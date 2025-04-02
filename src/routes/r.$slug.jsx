import { createFileRoute } from '@tanstack/react-router';
import { PostsFeature } from '../features';

export const Route = createFileRoute('/r/$slug')({
  component: Topic,
  pendingComponent: Loading,
});

function Topic() {
  return <PostsFeature />;
}

function Loading() {
  return <h1>Loading</h1>;
}

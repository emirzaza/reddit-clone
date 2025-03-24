import { createFileRoute, useParams } from '@tanstack/react-router';
import Content from '../components/content/content';

export const Route = createFileRoute('/t/$slug')({
  component: Topic,
});

function Topic() {
  const { slug } = useParams({ strict: false });

  return (
    <div className="flex justify-center">
      <Content slug={slug}></Content>
    </div>
  );
}

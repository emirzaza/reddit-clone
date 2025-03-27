import { Button } from '@mantine/core';
import { useTopicStore } from '../contexts/TopicStoreProvider';
import { useStore } from 'zustand';
import { Route } from '../../../routes/t.$slug';

function Header() {
  const { info } = Route.useLoaderData();

  const store = useTopicStore();
  const activeTab = useStore(store, state => state.activeTab);
  const setActiveTab = useStore(store, state => state.setActiveTab);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold"> {info.title} </h1>
        <p>{info.parent}</p>
      </div>
      <div className="mt-2 flex gap-3">
        <Button
          style={{
            backgroundColor:
              activeTab === 'posts'
                ? 'var(--mantine-color-placeholder)'
                : 'transparent',
            padding: '5px 10px',
            borderRadius: '4rem',
            border: '1px solid gray',
            color: 'var(--mantine-color-text)',
          }}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </Button>

        <Button
          style={{
            backgroundColor:
              activeTab === 'communities'
                ? 'var(--mantine-color-placeholder)'
                : 'transparent',
            color: 'var(--mantine-color-text)',
            padding: '5px 5px',
            borderRadius: '4rem',
            border: '1px solid gray',
          }}
          onClick={() => setActiveTab('communities')}
        >
          Communities
        </Button>
      </div>
    </div>
  );
}

export default Header;

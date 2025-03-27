import Header from './components/Header';
import { useTopicStore } from './contexts/TopicStoreProvider';
import { useStore } from 'zustand';
import Providers from './providers';
import PostsTab from './components/PostsTab';

import CommunityTab from './components/CommunityTab';
import RightTab from './components/rightTab';

const TopicPage = () => {
  const store = useTopicStore();
  const activeTab = useStore(store, state => state.activeTab);

  return (
    <div className="flex justify-center flex-row">
      <div className="flex flex-col  hover:'var(--mantine-color-hover)'">
        <Header />

        {activeTab === 'posts' && <PostsTab />}
        {activeTab === 'communities' && <CommunityTab />}
      </div>
      <div className="mt-40">
        <RightTab></RightTab>
      </div>
    </div>
  );
};

const TopicPageWrapper = () => {
  return (
    <Providers>
      <TopicPage />
    </Providers>
  );
};

export default TopicPageWrapper;

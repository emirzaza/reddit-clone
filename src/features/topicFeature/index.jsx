import Community from './components/CommunityTab/community';
import Header from './components/Header';
import { useTopicStore } from './contexts/TopicStoreProvider';
import { useStore } from 'zustand';
import Providers from './providers';
import PostsTab from './components/PostsTab';
import RightContent from './components/rightContent';
import CommunityTab from './components/CommunityTab';

const TopicPage = () => {
  const store = useTopicStore();
  const activeTab = useStore(store, state => state.activeTab);

  return (
    <div className="flex justify-center flex-row">
      <div className="flex flex-col w-3/4 sm:w-3/4 hover:'var(--mantine-color-hover)'">
        <Header />

        {activeTab === 'posts' && <PostsTab />}

        {activeTab === 'communities' && <CommunityTab />}
      </div>
      <div className="mt-40">
        <RightContent></RightContent>
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

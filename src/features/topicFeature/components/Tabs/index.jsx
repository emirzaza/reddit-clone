import { Button } from '@mantine/core';
import Styles from './index.module.css';
import { useTopicStore } from '../../contexts/TopicStoreProvider';
import { useStore } from 'zustand';
import PostsTab from './PostsTab';
import CommunityTab from './CommunityTab';

function Tabs() {
  const store = useTopicStore();
  const activeTab = useStore(store, state => state.activeTab);
  const setActiveTab = useStore(store, state => state.setActiveTab);

  const postTabHandleClick = () => {
    setActiveTab('posts');
  };

  const communityTabHandleClick = () => {
    setActiveTab('communities');
  };

  return (
    <>
      <div className="mt-2 flex gap-3">
        <Button
          className={activeTab === 'posts' ? Styles.clicked : Styles.normal}
          onClick={postTabHandleClick}
        >
          Posts
        </Button>

        <Button
          className={
            activeTab === 'communities' ? Styles.clicked : Styles.normal
          }
          onClick={communityTabHandleClick}
        >
          Communities
        </Button>
      </div>
      {activeTab === 'posts' && <PostsTab />}
      {activeTab === 'communities' && <CommunityTab />}
    </>
  );
}

export default Tabs;

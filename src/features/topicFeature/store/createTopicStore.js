import { createStore } from 'zustand';

const createTopicStore = () =>
  createStore(set => ({
    activeTab: 'posts',
    setActiveTab: newTab => set({ activeTab: newTab }),
  }));

export default createTopicStore;

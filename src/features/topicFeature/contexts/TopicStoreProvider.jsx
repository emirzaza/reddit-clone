import { createContext, useContext, useRef } from 'react';
import createTopicStore from '../store/createTopicStore';

const TopicStoreContext = createContext();

export const useTopicStore = () => useContext(TopicStoreContext);

const TopicStoreProvider = ({ children }) => {
  const store = useRef(createTopicStore()).current;

  return (
    <TopicStoreContext.Provider value={store}>
      {children}
    </TopicStoreContext.Provider>
  );
};

export default TopicStoreProvider;

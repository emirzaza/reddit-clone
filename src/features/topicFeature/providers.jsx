import TopicStoreProvider from './contexts/TopicStoreProvider';

const Providers = ({ children }) => {
  return <TopicStoreProvider>{children}</TopicStoreProvider>;
};

export default Providers;

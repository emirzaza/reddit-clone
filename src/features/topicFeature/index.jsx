import Header from './components/header/Header';
import Providers from './providers';
import RightTab from './components/rightTab';
import Tabs from './components/Tabs';

const TopicPage = () => {
  return (
    <div className="flex justify-center flex-row">
      <div className="flex flex-col  hover:'var(--mantine-color-hover)'">
        <Header />
        <Tabs />
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

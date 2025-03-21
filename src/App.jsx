import { ActionIcon, AppShell, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Index from './components/sidebar/index';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import classes from './App.module.css';

function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      className="bg-black/90"
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <div className="flex flex-row h-full">
          <img className="h-full p-1" src="logo.png" />
          <h1 className="text-Black">ReddIt</h1>
          <IconChevronLeft
            className="sm:hidden"
            onClick={toggleMobile}
          ></IconChevronLeft>
        </div>
      </AppShell.Header>

      <AppShell.Navbar classNames={{ navbar: classes.navbar }}>
        <ActionIcon
          onClick={toggleDesktop}
          variant="filled"
          color="dark"
          radius="xl"
          classNames={{
            root: classes.collapseButton,
          }}
        >
          {desktopOpened ? (
            <IconChevronLeft></IconChevronLeft>
          ) : (
            <IconChevronRight></IconChevronRight>
          )}
        </ActionIcon>
        <Index></Index>
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

export default App;

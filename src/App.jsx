import { AppShell, Button, Center, Flex } from '@mantine/core';
import Index from './components/sidebar/index';
import classes from './App.module.css';
import Navbar from './components/navbar';
import Content from './components/content/content';
import { useNavbar } from './contexts/NavbarContext';
import { useParams } from '@tanstack/react-router';

function App() {
  const { opened } = useNavbar();
  const params = useParams({ strict: false }); // slug varsa al
  const slug = params?.slug || null;

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: opened, desktop: !opened },
      }}
    >
      <AppShell.Header>
        <Navbar></Navbar>
      </AppShell.Header>

      <AppShell.Navbar>
        <Index></Index>
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        <Content slug={slug}></Content>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

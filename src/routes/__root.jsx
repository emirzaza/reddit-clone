import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { AppShell } from '@mantine/core';
import Index from '../components/sidebar';
import Navbar from '../components/navbar';
import { useNavbar } from '../contexts/NavbarContext';

export const Route = createRootRoute({
  component: () => {
    const { opened } = useNavbar();

    return (
      <>
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
            <Navbar />
          </AppShell.Header>

          <AppShell.Navbar>
            <Index />
          </AppShell.Navbar>

          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </AppShell>

        <TanStackRouterDevtools />
      </>
    );
  },
});

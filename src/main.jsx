import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { MantineProvider } from '@mantine/core';
import NavbarProvider from './contexts/NavbarContext';
import '@mantine/core/styles.css';
import './tailwind.css';
import './services/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new router instance
const router = createRouter({ routeTree });
const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById('root');

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <MantineProvider defaultColorScheme="dark">
        <NavbarProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </NavbarProvider>
      </MantineProvider>
    </StrictMode>
  );
}

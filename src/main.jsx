import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './tailwind.css';
import { MantineProvider } from '@mantine/core';
import './services/server.js';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import NavbarProvider from './contexts/NavbarContext.jsx';
import { router } from './router';
import { RouterProvider } from '@tanstack/react-router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <NavbarProvider>
        <RouterProvider router={router} />
      </NavbarProvider>
    </MantineProvider>
  </StrictMode>
);

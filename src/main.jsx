import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './tailwind.css';
import { MantineProvider } from '@mantine/core';
import './services/server.js';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import NavbarProvider from './contexts/NavbarContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </MantineProvider>
  </StrictMode>
);

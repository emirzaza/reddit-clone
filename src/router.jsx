import {
    createRootRoute,
    createRoute,
    createRouter,
  } from '@tanstack/react-router';
  import App from './App';
  
  const rootRoute = createRootRoute({
    component: App,
  });
  
  const appRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/t/$slug', 
    component: App,
  });
  
  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: App, 
  });
  
  const routeTree = rootRoute.addChildren([indexRoute, appRoute]);
  
  export const router = createRouter({ routeTree });
  
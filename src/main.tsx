import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { AuthProvider, useAuth } from './auth'

// const router = createRouter({
//   routeTree,
//   defaultPreload: 'intent',
//   scrollRestoration: true,
//   context: {
//     auth: undefined!, // This will be set after we wrap the app in an AuthProvider
//   },
// })

// Create a new router instance
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: {
    auth: undefined!, // This will be set after we wrap the app in an AuthProvider
  },
});

const InnerApp = () => {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ auth }} />
};

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <InnerApp/>
    </AuthProvider>
    <RouterProvider router={router} />
  </StrictMode>,
);

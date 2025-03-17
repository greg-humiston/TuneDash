import { createRootRoute, Link, Outlet, redirect } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Dashboard } from '../views/dash_dashboard/Dashboard';
import { Login } from '../views/login/Login';
import '../App.css';

type SessionData = {
  userId: string;
  sessionId: string
};

const QueryClientWrapper = (props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

import type { AuthContext } from '../auth'
import { createRootRouteWithContext } from '@tanstack/react-router';

interface MyRouterContext {
  auth: AuthContext
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <QueryClientWrapper>
        <Outlet />
      </QueryClientWrapper>
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </>
  ),
})


// export const Route = createRootRoute({
//   loader: () => {
//     const sessionId = 34535353;
//     if (sessionId) {
//       throw redirect({ to: '/login' });
//     } else {
//       throw redirect({ to: `/${sessionId}/home` });
//     }
//   },
//   notFoundComponent: () => <div>404 Not Found</div>,
// })
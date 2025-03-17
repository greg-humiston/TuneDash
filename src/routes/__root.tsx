import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
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

export const Route = createRootRoute({
  component: () => {
    const [userData, setUserData] = useState({} as SessionData);
    
    return (
      <>
        {/* <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr /> */}
        <QueryClientWrapper>
          <div className="app-container">
          {
            userData.sessionId
              ? <Dashboard/>
              : <Login onLoginSubmit={setUserData} />
          }
          </div>
        </QueryClientWrapper>
        <Outlet />
        <TanStackRouterDevtools />
    </>
    );
  },
  notFoundComponent: () => <div>404 Not Found</div>,
})
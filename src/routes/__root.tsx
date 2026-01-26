import { Outlet, redirect } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../App.css';
import { type AuthContext } from '../auth/auth'
import { createRootRouteWithContext } from '@tanstack/react-router';

const QueryClientWrapper = (props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
interface MyRouterContext {
  auth: AuthContext
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {
    return (
      <div className="app-container">
        <QueryClientWrapper>
          <Outlet />
        </QueryClientWrapper>
        <div style={{position: 'absolute'}}>
          <TanStackRouterDevtools position="bottom-left" initialIsOpen={false} />
        </div>
      </div>
    );
  },
  errorComponent: (props) => {
    return (
      <div>
        <label>{JSON.stringify(props.error)}</label>
      </div>
    );
  }
});
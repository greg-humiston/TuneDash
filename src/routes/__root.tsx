import { Outlet, redirect, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../App.css';
import { useAuth, type AuthContext } from '../auth'
import { createRootRouteWithContext } from '@tanstack/react-router';
import { HeaderBar } from '../components/HeaderBar';
import { MOCK_USER_CONFIG_DATA } from '../views/dash_overview/overviewMockData';

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
          <HeaderBar userConfigData={MOCK_USER_CONFIG_DATA} />
          <Outlet />
        </QueryClientWrapper>
        <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
      </div>
    );
  },
  errorComponent: (props) => {
    return (
      <div>
        <label>{props.error.message}</label>
      </div>
    );
  }
});
import { createFileRoute, redirect } from '@tanstack/react-router'
import { Dashboard } from '../../views/dash_dashboard/Dashboard';
import { MOCK_USER_SESSION } from '../../mock_data';

const HomeRouteComponent = () => {
  return (
    <Dashboard/>
  );
};

export const Route = createFileRoute('/$sessionId/home')({
  component: HomeRouteComponent,
  loader: ({ params }) => {
    
    if (!params.sessionId || params.sessionId !== MOCK_USER_SESSION.sessionId) {
      throw redirect({
        to: '/login'
      });
    }
  }
});


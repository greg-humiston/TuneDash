import { createFileRoute, redirect } from '@tanstack/react-router'
import { Dashboard } from '../../../views/dash_dashboard/Dashboard';
import { DashOverview } from '../../../views/dash_home/DashOverview';

const HomeRouteComponent = () => {
  return (
    <Dashboard>
      <DashOverview/>  
    </Dashboard>
  );
};

export const Route = createFileRoute('/auth/$sessionId/home')({
  beforeLoad: ({ params }) => {
    if (!params.sessionId) {
      throw redirect({ to: '/login' });
    }
  },
  component: HomeRouteComponent,
});


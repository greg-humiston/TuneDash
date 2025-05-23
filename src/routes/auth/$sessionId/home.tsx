import { createFileRoute, redirect } from '@tanstack/react-router'
import { Dashboard } from '../../../views/dash_dashboard/Dashboard';
import { useAuth } from '../../../auth';
import { DashOverview } from '../../../views/dash_home/DashOverview';

const HomeRouteComponent = () => {
  const auth = useAuth();
  const navigate = Route.useNavigate();

  const handleLogout = async () => {
    try {
      await auth.logout();
      await navigate({ to: '/' });
    } catch (e) {
      console.log('error logging out:', e);
    }
  };

  return (
    <Dashboard onLogout={handleLogout}>
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


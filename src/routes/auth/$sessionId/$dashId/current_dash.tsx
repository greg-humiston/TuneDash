import { createFileRoute, useLocation, useNavigate, useParams } from '@tanstack/react-router'
import { Dashboard } from '../../../../views/dash_dashboard/Dashboard';
import { DashOverview } from '../../../../views/dash_overview/DashOverview';

const RouteComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dashId } = useParams({ strict: false })

  if (!dashId) {
    const handleReturnTohome = () => {
      if (location.pathname?.includes('home')) {
        return;
      }

      navigate({ to: '../../home' });
    };

    return (
      <div>
        <h3>Sorry, dash not found!</h3>
        <button onClick={handleReturnTohome}>Return to Home</button>
      </div>
    );
  }

  return (
    <Dashboard onLogout={() => {}}>
      <DashOverview dashId={dashId}/>
    </Dashboard>
  );
};

export const Route = createFileRoute('/auth/$sessionId/$dashId/current_dash')({
  component: RouteComponent,
});

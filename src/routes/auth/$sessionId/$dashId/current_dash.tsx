import { createFileRoute, useLocation, useNavigate } from '@tanstack/react-router'
import { Dashboard } from '../../../../views/dash_dashboard/Dashboard';
import { DashOverview } from '../../../../views/dash_overview/DashOverview';
import { MOCK_CURRENT_DASH_LIST } from '../../../../mock_data/dashData';

const RouteComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // TODO: replace with query
  const dashData = MOCK_CURRENT_DASH_LIST[0];

  if (!dashData) {
    const handleReturnTohome = () => {
      if (location.pathName?.includes('home')) {
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
    <Dashboard>
      <DashOverview dashData={dashData}/>
    </Dashboard>
  );
};

export const Route = createFileRoute('/auth/$sessionId/$dashId/current_dash')({
  component: RouteComponent,
});

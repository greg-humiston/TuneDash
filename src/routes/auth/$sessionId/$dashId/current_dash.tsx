import { createFileRoute, useLocation, useNavigate } from '@tanstack/react-router'
import { MOCK_CURRENT_DASH_DATA } from '../../../../views/dash_home/overviewMockData';
import SettingsIcon from '../../../../assets/settings.svg';
import { Dashboard } from '../../../../views/dash_dashboard/Dashboard';
import { DashOverview } from '../../../../views/dash_overview/DashOverview';

const RouteComponent = () => {
  // const params = Route.useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // TODO: replace with query
  const dashData = MOCK_CURRENT_DASH_DATA;

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

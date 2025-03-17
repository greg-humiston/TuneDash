import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { MOCK_CURRENT_DASH_LIST } from '../../../../views/dash_overview/overviewMockData';

const RouteComponent = () => {
  const params = Route.useParams();
  const navigate = useNavigate();

  // TODO: replace with query
  const dashData = MOCK_CURRENT_DASH_LIST.find((data) => data?.dashId === params.dashId);

  if (!dashData) {
    const handleReturnTohome = () => {
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
    <div className="current-dash-container">
    {
      JSON.stringify(dashData)
    }
    </div>
  );
};

export const Route = createFileRoute('/auth/$sessionId/$dashId/current_dash')({
  component: RouteComponent,
});

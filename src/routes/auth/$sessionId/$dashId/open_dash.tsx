import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router'
import { MOCK_OPEN_DASH_LIST } from '../../../../views/dash_overview/overviewMockData';

const RouteComponent = () => {
  const params = Route.useParams();
  const navigate = useNavigate();
  const dashData = MOCK_OPEN_DASH_LIST.find((data) => data?.dashId === params.dashId);

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

  return <div>Hello "/auth/$sessionId/$dashId/open_dash"!</div>
};

export const Route = createFileRoute('/auth/$sessionId/$dashId/open_dash')({
  component: RouteComponent,
})

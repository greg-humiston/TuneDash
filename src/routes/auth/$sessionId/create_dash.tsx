import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '../../../views/dash_dashboard/Dashboard';
import { CreateNewDash } from '../../../components/CreateNewDash';

const RouteComponent = () => {
  return (
    <Dashboard>
      <CreateNewDash/>
    </Dashboard>
  );
};

export const Route = createFileRoute('/auth/$sessionId/create_dash')({
  component: RouteComponent,
});

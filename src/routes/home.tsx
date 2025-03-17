import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '../views/dash_dashboard/Dashboard';

const HomeRouteComponent = () => {
  return (
    <Dashboard/>
  );
};

export const Route = createFileRoute('/home')({
  component: HomeRouteComponent,
});


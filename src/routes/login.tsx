import { createFileRoute } from '@tanstack/react-router'
import { Login } from '../views/login/Login';

const LoginRouteComponent = () => {
  return (
    <Login/>
  );
};

export const Route = createFileRoute('/login')({
  component: LoginRouteComponent,
});


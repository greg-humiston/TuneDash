import { createFileRoute, redirect } from '@tanstack/react-router'
import { Login } from '../views/login/Login';

const LoginComponent = () => {
  const navigate = Route.useNavigate();


  const handleLoginSubmit = async (token: string) => {
    navigate({ to: `/auth/${token}/home` });
  };

  return (
    <Login onLoginSubmit={handleLoginSubmit}/>
  );
};

export const Route = createFileRoute('/login')({
  component: LoginComponent,
})
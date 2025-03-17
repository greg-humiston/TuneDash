import { createFileRoute, redirect } from '@tanstack/react-router'
import { Login } from '../views/login/Login';
import { useAuth } from '../auth';
import { useState } from 'react';

const LoginComponent = () => {
  const auth = useAuth();
  const navigate = Route.useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false)


  const handleLoginSubmit = async () => {
    console.log('handleLoginSubmit');
    try {
      await auth.login('test@aol.com');
      await navigate({ to: '/auth/3455345345/home' });
    }  catch (error) {
      console.error('Error logging in: ', error);
      await navigate({ to: '/login' });
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <>
      {
        isSubmitting 
          ? 'Loading...' 
          : <Login onLoginSubmit={handleLoginSubmit}/>
      }
    </>
  );
};

export const Route = createFileRoute('/login')({
  component: LoginComponent,
})
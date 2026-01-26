import { useState } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Login } from './views/login/Login';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Dashboard } from './views/dash_dashboard/Dashboard';

type SessionData = {
  userId: string;
  sessionId: string
};

const QueryClientWrapper = (props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export const App: React.FC = () => {
  const [userData, setUserData] = useState({} as SessionData);

  return (
    <QueryClientWrapper>
      {/* <div className="app">
        <h1>YouTube Video Search</h1>
        <YouTubeVideoList />
      </div> */}
      <div className="app-container">
      {
        userData.sessionId
          ? <Dashboard/>
          : <Login onLoginSubmit={setUserData} />
      }
      </div>
    </QueryClientWrapper>
  );
};

export default App

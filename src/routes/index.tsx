import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="home-container">
      <h1 className="text-xl">Welcome to TuneDash!</h1>
      <img className="logo-big" src="/logo.png" alt="icon"/>
      <div>
        <Link to="/login" className="text-blue-500 hover:opacity-75">
          Go To Sign In
        </Link>
      </div>
    </div>
  );
}

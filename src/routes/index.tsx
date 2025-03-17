import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="p-2 grid gap-2">
      <h1 className="text-xl">Welcome!</h1>
      <Link to="/login" className="text-blue-500 hover:opacity-75">
        Login
      </Link>
    </div>
  );
}

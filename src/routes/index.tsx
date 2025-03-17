import { createFileRoute } from '@tanstack/react-router'


// TODO: ideally, default route checks to see
// if user data exists and if it does, 
// we go home - otherwise, redirect to login
const DefaultRouteComponent = () => {
  return (
    <div className="p-2">
      <h3>Welcome to Index!</h3>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: DefaultRouteComponent,
})

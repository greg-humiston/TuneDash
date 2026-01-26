import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useAuth } from "../auth/auth";
import { routeTree } from "../routeTree.gen";

// Create a new router instance
const router = createRouter({ 
	routeTree,
	defaultPreload: 'intent',
	scrollRestoration: true,
	context: {
		auth: undefined!, // This will be set after we wrap the app in an AuthProvider
	},
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const Provider = () => {
	const auth = useAuth()
	return <RouterProvider router={router} context={{ auth }} />
};

export default Provider;

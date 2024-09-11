import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { NotFound } from "./components/router/not-found.tsx";
import { ErrorPage } from "./components/router/error-page.tsx";
import { LoadingPage } from "./components/router/loading-page.tsx";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: ErrorPage,
  defaultPendingComponent: LoadingPage,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
export default function App() {
  return <RouterProvider router={router} />;
}

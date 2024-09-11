import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { NotFound } from "./components/routers/not-found";
import { ErrorPage } from "./components/routers/error-page";
import { LoadingPage } from "./components/routers/loading-page";
import { ThemeProvider } from "./providers/theme";

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
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

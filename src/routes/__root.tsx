import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import React from "react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-1 border-b max-sm:px-2">
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
}

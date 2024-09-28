import { InProgress } from "@/components/routers/in-progress";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <InProgress pageName="Home" />,
});

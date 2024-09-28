import { ProgressPage } from "@/components/pages/progress-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <ProgressPage pageName="Home" />,
});

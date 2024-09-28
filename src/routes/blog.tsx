import { ProgressPage } from "@/components/pages/progress-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: () => <ProgressPage pageName="Blog" />,
});

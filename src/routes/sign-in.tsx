import { ProgressPage } from "@/components/pages/progress-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-in")({
  component: () => <ProgressPage pageName="Sign-In" />,
});

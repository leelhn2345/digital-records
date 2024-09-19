import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <div className="text-4xl">
        Whereas disregard and contempt for human rights have resulted
      </div>
      <h1 className="text-4xl font-extrabold">hello</h1>
    </div>
  );
}

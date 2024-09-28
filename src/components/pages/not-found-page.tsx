import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

export function NotFoundPage() {
  return (
    <div className="container flex items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p>This is an invalid page.</p>
        <br />
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}

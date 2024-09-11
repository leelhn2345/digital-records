import { createFileRoute, useRouter } from "@tanstack/react-router";
import { fallback, zodSearchValidator } from "@tanstack/router-zod-adapter";
import { z } from "zod";

const wowSchema = z.object({
  haha: fallback(z.boolean(), false).default(false),
  foo: fallback(z.string(), "wow").default("wow"),
});

export const Route = createFileRoute("/about")({
  validateSearch: zodSearchValidator(wowSchema),
  loaderDeps: ({ search: { haha, foo } }) => ({
    foo,
    haha,
  }),
  loader: ({ deps }) => {
    return { ...deps };
  },
  component: About,
  errorComponent: ({ error }) => <div>{error.message}</div>,
});

function About() {
  const router = useRouter();
  return (
    <div className="flex flex-col p-2">
      Hello from About
      <button onClick={() => router.invalidate()}>haha</button>
    </div>
  );
}

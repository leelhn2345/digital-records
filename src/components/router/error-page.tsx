import { useRouter } from "@tanstack/react-router";

export function ErrorPage() {
  const router = useRouter();
  // const queryErrorResetBoundary = useQueryErrorResetBoundary();

  // useEffect(() => {
  //   // Reset the query error boundary
  //   queryErrorResetBoundary.reset();
  // }, [queryErrorResetBoundary]);

  return (
    <div>
      <button
        onClick={() => {
          // Invalidate the route to reload the loader, and reset any router error boundaries
          router.invalidate();
        }}
      >
        retry
      </button>
    </div>
  );
}

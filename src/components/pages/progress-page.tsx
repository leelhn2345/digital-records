type Props = {
  pageName?: string;
};
export function ProgressPage({ pageName }: Props) {
  return (
    <div className="container flex items-center justify-center">
      <div className="space-y-4 text-center">
        <h1
          className="bg-gradient-to-br from-amber-500 to-green-600 bg-clip-text text-4xl font-bold
            text-transparent"
        >
          ~ In Progress ~
        </h1>
        {pageName ? (
          <p>
            Sorry, the <span className="text-xl font-bold">{pageName}</span>{" "}
            page is currently not available.
          </p>
        ) : (
          <p className="">Sorry, this page is currently not available.</p>
        )}
        {/* <Link href="/"> */}
        {/*   <Button className="mt-4">Return Home</Button> */}
        {/* </Link> */}
      </div>
    </div>
  );
}

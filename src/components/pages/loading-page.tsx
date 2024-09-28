import { Smile } from "lucide-react";

export function LoadingPage() {
  return (
    <div className="container flex flex-col items-center justify-center">
      <div>
        <div className="flex justify-center">
          <Smile className="animate-spin" />
        </div>
        <div className="flex">
          <Smile className="animate-spin" />
          <Smile className="animate-spin" />
          <Smile className="animate-spin" />
        </div>
        <div className="flex justify-center">
          <Smile className="animate-spin" />
        </div>
        <div className="flex justify-evenly">
          <Smile className="animate-spin" />
          <Smile className="animate-spin" />
        </div>
        <br />
        <h4>loading...</h4>
      </div>
    </div>
  );
}

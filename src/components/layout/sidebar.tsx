import { Home, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Link } from "@tanstack/react-router";

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="w-64 dark:bg-background/80">
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-y-2">
          <SheetClose asChild>
            <Link
              to="/"
              className="font-semibold hover:text-teal-600"
              activeProps={{ className: "text-teal-600" }}
            >
              <Home />
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/about"
              className="font-semibold hover:text-teal-600"
              activeProps={{ className: "text-teal-600" }}
            >
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/blog"
              className="font-semibold hover:text-teal-600"
              activeProps={{ className: "text-teal-600" }}
            >
              Blog
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

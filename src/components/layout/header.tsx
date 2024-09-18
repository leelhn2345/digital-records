import { Link } from "@tanstack/react-router";
import { Navbar } from "./navbar";
import { ThemeMenu } from "./theme-menu";
import { Button } from "../ui/button";
import { BookOpenIcon } from "lucide-react";
import { SideBar } from "./sidebar";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90
        backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-12 justify-between max-sm:px-2">
        <div className="my-auto md:hidden">
          <SideBar />
        </div>
        <div className="hidden items-center md:flex">
          <Link to="/">
            <BookOpenIcon className="mr-2 hover:cursor-pointer" />
          </Link>
          <Navbar />
        </div>

        <div className="flex items-center gap-x-2">
          <ThemeMenu />
          <Link to="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
"use client";

import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "./logo";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 64; // Corresponds to h-16 in Tailwind
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="hidden font-bold sm:inline-block">
              DesignFix
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </Link>
            ))}
             <Link
                href="/upload"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Upload
              </Link>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Logo />
              <span className="font-bold">DesignFix</span>
            </Link>
            <div className="mt-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              ))}
               <SheetClose asChild>
                  <Link
                    href="/about"
                    className="text-lg font-medium text-foreground/80 hover:text-foreground"
                  >
                    About me
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/upload"
                    className="text-lg font-medium text-foreground/80 hover:text-foreground"
                  >
                    Upload
                  </Link>
                </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
             <Link
                href="/about"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                About me
              </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

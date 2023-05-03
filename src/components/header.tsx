import Link from "next/link";
import { FC } from "react";

import { Button } from "./ui";

import { MenuItem } from "@/types";

type HeaderProps = {
  menuItems: MenuItem[];
};

export const Header: FC<HeaderProps> = ({ menuItems }) => (
  <header className="sticky top-0 z-40 w-full border-b bg-background">
    <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <Link href="/">Logo</Link>
      <nav className="hidden gap-6 md:flex">
        {menuItems?.map(({ slug, title }: MenuItem, idx: number) =>
          slug ? (
            <Link
              className="flex items-center text-lg font-semibold text-muted-foreground sm:text-sm"
              href={slug}
              key={idx}
            >
              {title}
            </Link>
          ) : null
        )}
        <Button href="contact">Contact</Button>
      </nav>
    </div>
  </header>
);

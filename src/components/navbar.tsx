"use client";

import React, { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import { Github, Instagram, LucideIcon } from "lucide-react";

import { ModeToggle } from "./modeToggle";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const socialMedia: Array<{
    id: number;
    name: React.ComponentType;
    url: string;
  }> = [
    {
      id: 1,
      name: Github,
      url: "https://github.com/DaavidT",
    },
    {
      id: 2,
      name: Instagram,
      url: "https://www.instagram.com/daavid_tal/",
    },
  ];
  const links: Array<{
    name: string;
    url: string;
  }> = [
    {
      name: "DAVID FERNANDO TALAVERA",
      url: "/",
    },
  ];

  return (
    <header className="w-full px-32 py-8 font-medium flex item-center justify-between">
      <nav className="flex items-center justify-center">
        {links.map((link) => (
          <Link
            className={`${
              pathname === link.url ? "underline" : ""
            } ${buttonVariants({ variant: "link" })}`}
            href={link.url}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <nav className="flex items-center justify-center">
        {socialMedia.map((social) => (
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href={social.url}
            key={social.id}
          >
            {React.createElement(social.name)}
          </Link>
        ))}
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;

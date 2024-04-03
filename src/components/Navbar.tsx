"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          " fixed top-10  inset-x-0 max-w-2xl mx-auto z-50 border-[2px] rounded-full  ",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link href={"/courses"}>
            <MenuItem setActive={setActive} active={active} item="Our courses">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All courses</HoveredLink>
                <HoveredLink href="/courses">Basic Music theory</HoveredLink>
                <HoveredLink href="/courses">advanced composition</HoveredLink>
                <HoveredLink href="/courses">song writing</HoveredLink>
                <HoveredLink href="/courses">Music Production</HoveredLink>
              </div>
            </MenuItem>
          </Link>
          <Link href={"/contactus"}>
            <MenuItem setActive={setActive} active={active} item="Contact us">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
};

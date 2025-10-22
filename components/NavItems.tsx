"use client";
import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <div
      className={`
        flex items-center gap-6
        lg:gap-12
      `}
    >
      <Link
        href={ROUTES.DASHBOARD}
        className={cn(
          `
            cursor-pointer text-sm font-medium text-gray-700 decoration-[3px] underline-offset-6 transition-colors
            hover:font-bold hover:text-pink hover:underline
            md:text-base md:underline-offset-8
          `,
          pathname === ROUTES.DASHBOARD && "font-bold text-pink underline"
        )}
      >
        <p>Home</p>
      </Link>
      <Link
        href={ROUTES.COMPANIONS}
        className={cn(
          `
            cursor-pointer text-sm font-medium text-gray-700 decoration-[3px] underline-offset-6 transition-colors
            hover:font-bold hover:text-pink hover:underline
            md:text-base md:underline-offset-8
          `,
          pathname === ROUTES.COMPANIONS && "font-bold text-pink underline"
        )}
      >
        <p>Companions</p>
      </Link>
      <Link
        href={ROUTES.MY_JOURNEY}
        className={cn(
          `
            cursor-pointer text-sm font-medium text-gray-700 decoration-[3px] underline-offset-6 transition-colors
            hover:font-bold hover:text-pink hover:underline
            md:text-base md:underline-offset-8
          `,
          pathname === ROUTES.MY_JOURNEY && "font-bold text-pink underline"
        )}
      >
        <p>My Journey</p>
      </Link>
    </div>
  );
};

export default NavItems;

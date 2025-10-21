import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"flex flex-col items-center gap-30"}>
      <header
        className={`
          mx-auto flex w-full items-center justify-between px-8 pt-10
          lg:max-w-[60%]
        `}
      >
        <Image
          src="/images/logo.svg"
          width={150}
          height={150}
          alt="Sonexa logo"
          className={`
            w-30
            lg:w-[150px]
          `}
        />
        <nav className="flex items-center gap-8">
          <Link
            href={ROUTES.SIGN_IN}
            className={`
              text-sm font-semibold text-gray-800
              hover:text-gray-600
            `}
          >
            Sign In
          </Link>
          <Link
            href={ROUTES.SIGN_UP}
            className={`
              cursor-pointer rounded-lg border-2 border-r-4 border-b-4 border-black bg-pink px-4 py-1 text-center text-sm font-semibold text-black
              hover:bg-pink/80
              active:border-2
            `}
          >
            Sign Up
          </Link>
        </nav>
      </header>

      <main className="w-full flex-1">{children}</main>
    </div>
  );
};

export default LandingLayout;

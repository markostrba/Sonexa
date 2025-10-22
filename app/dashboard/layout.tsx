import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"flex h-screen flex-col"}>
      <header
        className={`
          flex w-full items-center justify-between gap-6 border-b-3 border-black bg-white px-4 py-4
          lg:px-14
        `}
      >
        <Image
          src="/images/logo.svg"
          width={212}
          height={44}
          alt="Sonexa logo"
          className={`
            hidden w-37.5
            md:block
          `}
        />
        <Navbar />
      </header>

      <main
        className={`
          h-full flex-1 overflow-y-auto bg-white px-4 py-8
          lg:px-14 lg:py-10
        `}
      >
        <div className="mx-auto max-w-[1400px]">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;

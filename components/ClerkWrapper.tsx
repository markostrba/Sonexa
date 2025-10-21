"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import ROUTES from "@/constants/routes";

export function ClerkWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#ec489d" },
        baseTheme: neobrutalism,
      }}
      afterSignOutUrl={ROUTES.HOME}
    >
      {children}
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import ROUTES from "@/constants/routes";
import { neobrutalism } from "@clerk/themes";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonexa - AI Teaching Companion",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          antialiased
        `}
      >
        <ClerkProvider
          appearance={{
            variables: { colorPrimary: "#ec489d" },
            baseTheme: neobrutalism,
          }}
          afterSignOutUrl={ROUTES.HOME}
        >
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}

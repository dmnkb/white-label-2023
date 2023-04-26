import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { TailwindIndicator } from "@/components";
import { Header } from "@/components/header";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const dummyNav = [
  { label: "Something", uri: "something" },
  { label: "Something", uri: "something" },
  { label: "Something", uri: "something" }
];

const RootLayout = ({ children }: RootLayoutProps) => (
  <>
    {/* TODO: Change according to current lang */}
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Header menuItems={dummyNav} />
        {children}
        <TailwindIndicator />
      </body>
    </html>
  </>
);

// eslint-disable-next-line import/no-default-export
export default RootLayout;

import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import { Header, Meta, TailwindIndicator, Footer } from ".";

import { Seo, MenuItem } from "@/types";

const inter = Inter({ subsets: ["latin"] });

type LayouProps = PropsWithChildren & Seo & { menuItems: MenuItem[] };

export const Layout: React.FC<LayouProps> = ({
  children,
  description,
  keywords,
  menuItems,
  title
}) => (
  <>
    <Meta description={description} keywords={keywords} title={title} />
    <Header menuItems={menuItems} />
    <main className={`flex min-h-screen py-24 ${inter.className}`}>
      {children}
    </main>
    <TailwindIndicator />
    <Footer />
  </>
);

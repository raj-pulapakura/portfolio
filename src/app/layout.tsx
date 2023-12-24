import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/layout/Nav/Nav";
import FixedTop from "@/components/layout/FixedTop";
import ContentBox from "@/components/layout/ContentBox";

import { config, dom } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Raj Pulapakura",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-bgLight dark:bg-bgDark text-black dark:text-white`}
      >
        {/* font awesome icons are loading large because font awesome css is not loading
        this block adds font awesome css */}
        <Head>
          <style>{dom.css()}</style>
        </Head>

        <FixedTop>
          <Nav />
        </FixedTop>

        <ContentBox>{children}</ContentBox>
      </body>
    </html>
  );
}

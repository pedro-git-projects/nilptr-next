import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import { BLOG_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

const roboto = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BLOG_NAME}`,
  description: `Engenharia de softwaer descomplicada.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={roboto.className} suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="min-h-screen flex flex-col bg-light-background-dark dark:bg-background-dark">
        <Providers>
          <Header />
          <div className="flex-grow m-4">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "katex/dist/katex.min.css";
import "github-markdown-css/github-markdown-light.css";
import { NavBar } from "@/components/molecules/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GAPC 2024",
  description:
    "The 2024 edition of the Groningen Algorithmic Programming Competition",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fully-connected-graph.github.io/GAPC-2024/",
    title: "Groningen Algorithmic Programming Competition 2024",
    description:
      "The 2024 edition of the Groningen Algorithmic Programming Competition",
    images: [
      "https://fully-connected-graph.github.io/GAPC-2024/assets/thumbnails/banner.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/GAPC-2024/assets/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <NavBar />
        <main className="mt-0 m-auto max-w-4xl py-20 max-lg:px-4 max-lg:max-w-full">
          {children}
        </main>
      </body>
    </html>
  );
}

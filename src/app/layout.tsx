import { Roboto, Montserrat } from "next/font/google";

import AppLayout from "@/components/layouts/app-layout";

import { METADATA } from "./constants";

import "./globals.css";
import "@/resources/styles/main.css";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["cyrillic"],
  variable: "--font-roboto",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  ...METADATA,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <title>Custom Software Development Company | DeepInspire</title>
        {/* <meta property="og:image" content={`${SITE_URL}/share-og.jpg`} /> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${roboto.className} text-sm text-dark-texting antialiased light overflow-x-hidden`}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

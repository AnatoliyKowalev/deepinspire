import { cookies } from "next/headers";
import { Rubik } from "next/font/google";

import AppLayout from "@/components/layouts/app-layout";

import { METADATA } from "./constants";

import "./globals.css";
import "@/resources/styles/main.css";

const rubik = Rubik({
  weight: ["400"],
  subsets: ["cyrillic"],
  variable: "--font-rubik",
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
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("NEXT_LOCALE");
  const lang = langCookie?.value || "uk";

  return (
    <html lang={lang} className={`${rubik.variable}`}>
      <head>
        <title>Custom Software Development Company | DeepInspire</title>
        {/* <meta property="og:image" content={`${SITE_URL}/share-og.jpg`} /> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-rubik text-sm text-dark-texting antialiased light">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

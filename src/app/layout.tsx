import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google"

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Spotify API",
  description: "Spotify API",
};

const inter = Inter({
  weight: ['100', "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic'],
  subsets: ['latin-ext'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 flex flex-col pb-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FistBump Connect",
  description:
    "FistBump Connect helps deaf, hard-of-hearing, and non-speaking people communicate more easily with quick messages, conversation tools, and emergency support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
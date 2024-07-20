import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Output from "../output.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akane Yamashita Portfolio",
  description: "v0のデザインをベースに作成しました",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href={Output.src} rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

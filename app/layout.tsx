import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "ルパンタイトルメーカー",
  description: "ルパン三世のタイトルを作成するアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}

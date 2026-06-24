import "./globals.css";
import { Geist } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Icebreaker Portfolio | 場の空気を、10分で変える",
  description:
    "シーンに合ったアイスブレイクを、すぐに見つけよう。ミーティングやワークショップのためのアイスブレイク・ネタ集。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} font-sans antialiased bg-ivory text-ink`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

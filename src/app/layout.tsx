import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import SideBar from "./components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <button onClick={insertNewItemCategory} className="bg-white">
          HHHHH
        </button> */}
        <SideBar />
        {children}
      </body>
    </html>
  );
}

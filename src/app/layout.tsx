"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrismaClient } from "@prisma/client";
import { useEffect } from "react";

const prisma = new PrismaClient();

const inter = Inter({ subsets: ["latin"] });

async function createItemCategory(catTitle: any) {
  const prisma = new PrismaClient();

  try {
    const newItemCategory = await prisma.itemCategory.create({
      data: {
        catTitle: catTitle,
      },
    });

    return newItemCategory;
  } catch (error) {
    console.error("Error creating item category:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    createItemCategory("CATTTTTTTT");
    console.log("HITTING FUNC");
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <button onClick={insertNewItemCategory} className="bg-white">
          HHHHH
        </button> */}
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { poppins, outfit } from "./fonts"; // <-- updated import path

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Creating Intuitive and Impactful UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(poppins.variable, outfit.variable, "bg-teal-900 text-white antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}

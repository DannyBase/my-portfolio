import { Poppins, Outfit } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-outfit",
});

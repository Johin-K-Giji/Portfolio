import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Johin Dev",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>{children}
      <Navigation/>
      </body>
    </html>
  );
}

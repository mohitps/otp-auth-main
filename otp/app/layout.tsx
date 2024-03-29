import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from './provider'

import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <NextAuthSessionProvider>
          <Navbar></Navbar>
          <div>
            {children}
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}

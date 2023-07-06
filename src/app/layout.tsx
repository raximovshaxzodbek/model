import '../assets/css/globals.css';
import {Roboto_Mono} from 'next/font/google';
import React from "react";
import Navbar from "@/components/Navbar";
import {NextFont} from "next/dist/compiled/@next/font";

const roboto: NextFont = Roboto_Mono({subsets: ["latin"]})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <header className={"header w-full min-h-screen px-[40px] font-serif " + roboto.className}>
          <Navbar />
          <>
              {children}
          </>
      </header>
  )
}

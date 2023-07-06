import React from 'react'
import RootLayout from "@/app/layout";
import Main from "@/components/Main";
import Products from "@/components/Products";
import {Services} from "@/components/Services";
import AboutCompany from "@/components/AboutCompany";
import News from "@/components/News";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
export default function Home() {
  return (
      <>
        <RootLayout>
            <Main />
        </RootLayout>
        <Products />
        <Services />
        <AboutCompany />
        <News />
        <Partners />
        <Footer />
      </>
  )
}

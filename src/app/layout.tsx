import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const sans = Open_Sans({subsets:['latin']})

export const metadata: Metadata = {
  title: {
    default:'윤서의 블로그',
    template:'윤서의 블로그 | %s'
  },
  description: '개발자 윤서의 블로그',
  icons:{
    icon:'/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
      <Header/>
      <main className="grow">{children}</main>
      </body>
      <Footer/>
    </html>
  );
}

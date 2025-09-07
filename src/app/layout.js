import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./SideBar/Sidebar";
import Nav from "@/Navbar/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IBRAHIM",
  description: "Ibrahim's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-5 bg-dark h-fit`}>
       

      <div className="w-full min-h-screen  flex flex-col md:grid  md:grid-cols-12 gap-5">
       
        <div className="w-full -order-1 md:order-0 col-span-3 h-full bg-secondary shadow rounded-lg">
            <Sidebar />
        </div>

        <div className="w-full h-screen col-span-9 bg-secondary shadow rounded-lg">
         <div className="w-full   flex justify-center items-center md:justify-end">
            <Nav />
         </div>
         
          {children}
        </div>
      </div>


      </body>
    </html>
  );
}

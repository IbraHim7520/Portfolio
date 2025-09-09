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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark min-h-screen w-full p-3 md:p-5`}
      >
        <div className="w-full min-h-screen flex flex-col md:grid md:grid-cols-12 gap-5">
          {/* Sidebar */}
          <div className="w-full sticky   md:order-0 -order-1 md:col-span-4 xl:col-span-3 bg-secondary shadow rounded-lg p-4">
            <Sidebar />
          </div>

          {/* Main content */}
          <div className="w-full md:col-span-8 xl:col-span-9 bg-secondary shadow rounded-lg flex flex-col">
            {/* Navbar */}
            <div className="w-full flex justify-center md:justify-end p-3 md:p-4 border-b border-gray-700">
              <Nav />
            </div>

            {/* Children (main page content) */}
            <div className="flex-1 p-3  overflow-auto md:p-5 overflow-y-auto">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

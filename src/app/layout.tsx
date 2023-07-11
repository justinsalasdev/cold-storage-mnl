import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cold Storage MNL",
  description:
    "Manufacturer and Installer of PU and PIR insulated panel and Refrigeration Equipment",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en h-full">
      <body
        className={inter.className + " bg-prim-950 h-full text-slate-50 p-6"}
      >
        <header>
          <Image
            src="/logo.png"
            alt="company logo"
            width={50}
            height={50}
            className="auto-fit"
          />
        </header>
        {children}
      </body>
    </html>
  );
}

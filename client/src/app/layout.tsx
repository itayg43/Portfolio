import { ReactNode } from "react";
import { Poppins } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Itay׳s Portfolio",
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container mx-auto flex justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

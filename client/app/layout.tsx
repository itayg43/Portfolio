import { ReactNode } from "react";
import { Poppins } from "next/font/google";

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
        <main className="container mx-auto flex justify-center">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

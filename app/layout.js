import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Template from "./template.jsx";
import Footer from "./footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Navbar />
        <Template>
        {children}
        </Template>
        <Footer/>
      </body>
    </html>
  );
}

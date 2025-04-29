import { Open_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const geistSans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "LACEB",
  description:
    "Laboratorio de calibración especializado en pipetas de pistón volumen",
  icons: {
    icon: "/Favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

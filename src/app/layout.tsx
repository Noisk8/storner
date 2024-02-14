// import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Link from "next/link";
import { Header } from "app/componentes/shared/Header";
import { Footer } from "app/componentes/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: " 🌓 Tienda de baretos",
//   description: "ARmados y desarmados",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Header />

        {children}</body>
        <Footer />
    </html>
  );
}

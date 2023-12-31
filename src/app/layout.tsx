import type { Metadata } from "next";
import { Inter, Signika } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const signika = Signika({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Obi Design: Sun God Glasses`,
  description: "Obi Design: Sun God Glasses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

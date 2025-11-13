import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Vendetta Machine",
  description: "A digital art gallery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <div className="relative flex min-h-screen w-full flex-col">
          <Header />
          <main className="flex h-full grow flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

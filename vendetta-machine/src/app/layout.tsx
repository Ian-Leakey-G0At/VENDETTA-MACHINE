import type { Metadata } from "next";
import { Space_Grotesk, Epilogue } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
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
      <body className={`${spaceGrotesk.variable} ${epilogue.variable} font-sans`}>
        <div className="relative flex min-h-screen w-full flex-col">
          <Header />
          <main className="flex h-full grow flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

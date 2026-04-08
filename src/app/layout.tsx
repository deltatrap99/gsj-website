import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Global Science Journey (GSJ) - Building Scientific Mindsets",
  description: "GSJ is an international academic ecosystem empowering students through holistic development in STEM, research, business, and global study pathways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} bg-background-light text-gsj-navy font-sans antialiased selection:bg-gsj-gold selection:text-white`}>
        {children}
      </body>
    </html>
  );
}

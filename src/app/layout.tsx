import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin", "vietnamese"], 
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Global Science Journey (GSJ) - Học Viện Sáng Tạo Khoa Học",
  description: "GSJ - Encouraging & Inspiring Young Minds. Học viện sáng tạo khoa học hàng đầu, đồng hành cùng học sinh chinh phục đại học top đầu thế giới.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className={`${plusJakarta.variable} bg-white text-[#292929] font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Sarabun } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Colofill — Personal Brand & AI Tools",
  description: "ช่วยให้คุณสร้าง Personal Brand และใช้ AI Tools ได้ โดยไม่มีข้ออ้าง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${archivo.variable} ${spaceGrotesk.variable} ${sarabun.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

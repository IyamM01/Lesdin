import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMK Negeri 2 Depok",
  description:
    "SMK Negeri 2 Depok adalah sekolah menengah kejuruan yang berkomitmen menghasilkan lulusan berkualitas, siap kerja, dan memiliki karakter yang kuat.",
  keywords:
    "SMK Negeri 2 Depok, sekolah kejuruan, pendidikan vokasi, PKL, mitra industri",
  openGraph: {
    title: "SMK Negeri 2 Depok - Unggul, Berkarakter, Kompeten",
    description:
      "Sekolah menengah kejuruan yang berkomitmen menghasilkan lulusan berkualitas dan siap kerja.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
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
  icons: {
    icon: "/image/logo-sekolah.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${poppins.className} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

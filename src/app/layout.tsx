import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JS Developers - Treino com IA",
  description: "Treino com IA",
  icons: "/alter.png",
  openGraph: {
    title: "JS Developers - Treino com IA",
    description: "Treino com IA",
    images: [
      {
        url: "https://i.ibb.co/ms3s4bM/alter.png",
        width: 1200,
        height: 630,
        alt: "JS Developers - Treino com IA",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

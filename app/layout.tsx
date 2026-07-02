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
  title: "Satria Duta Mahendraloka | Fullstack Web Developer",
  description: "Portfolio of Satria Duta Mahendraloka — a Fullstack Web Developer specializing in Laravel, React, and building scalable web applications. Open to new opportunities.",
  keywords: ["Satria Duta Mahendraloka", "Fullstack Developer", "Laravel Developer", "React Developer", "Web Developer Indonesia", "Portfolio"],
  authors: [{ name: "Satria Duta Mahendraloka" }],
  creator: "Satria Duta Mahendraloka",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://satriadutam.vercel.app",
    title: "Satria Duta Mahendraloka | Fullstack Web Developer",
    description: "Portfolio of Satria Duta Mahendraloka — a Fullstack Web Developer specializing in Laravel, React, and building scalable web applications.",
    siteName: "Satria Duta Mahendraloka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satria Duta Mahendraloka | Fullstack Web Developer",
    description: "Fullstack Web Developer specializing in Laravel & React. Building scalable and efficient web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

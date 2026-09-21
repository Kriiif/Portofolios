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
  metadataBase: new URL("https://kriiif.pages.dev"),
  title: "Fikri's Portfolio",
  description:
    "Portfolio of Muhammad Fikri Firmansyah - Front-end Developer & CS Student passionate in UI/UX design and modern web development.",
  keywords: [
    "Muhammad Fikri Firmansyah",
    "Fikri",
    "Portfolio",
    "Front-end Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX",
  ],
  authors: [
    {
      name: "Muhammad Fikri Firmansyah",
      url: "https://kriiif.pages.dev",
    },
  ],
  alternates: {
    canonical: "https://kriiif.pages.dev/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kriiif.pages.dev/",
    siteName: "Fikri's Portfolio",
    title: "Fikri's Portfolio",
    description:
      "Portfolio of Muhammad Fikri Firmansyah - Front-end Developer & CS Student passionate in UI/UX design and modern web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Fikri's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fikri's Portfolio",
    description:
      "Portfolio of Muhammad Fikri Firmansyah - Front-end Developer & CS Student passionate in UI/UX design and modern web development.",
    images: ["/og-image.png"],
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

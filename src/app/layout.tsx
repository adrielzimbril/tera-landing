import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tera-landing.adrielzimbril.com"),
  title: "Tera | Premium Real Estate & Architectural Development",
  description:
    "Day 5/30 of the AI-Generated Landing Page Challenge. Tera is a premium real estate development firm specializing in brutalist landmark structures and high-value architectural investments.",
  keywords: [
    "Tera",
    "real estate development",
    "architectural investment",
    "brutalist architecture",
    "landmark structures",
    "premium real estate",
    "Next.js",
    "React",
    "Tailwind CSS",
    "bento design",
    "AI challenge",
  ],
  openGraph: {
    title: "Tera | Premium Real Estate & Architectural Development",
    description:
      "A conceptual premium real estate landing page for Day 5/30 of the AI-Generated Landing Page Challenge.",
    url: "https://tera-landing.adrielzimbril.com",
    siteName: "Tera",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tera landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tera | Premium Real Estate & Architectural Development",
    description:
      "A conceptual premium real estate landing page for Day 5/30 of the AI-Generated Landing Page Challenge.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-[#111111] antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
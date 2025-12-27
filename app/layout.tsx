import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const headingFont = localFont({
  src: "../public/font/Latino.ttf",
  variable: "--font-heading",
  display: "swap",
  fallback: ["ui-serif", "Georgia", "Times New Roman", "serif"],
});

const bodyFont = localFont({
  src: "../public/font/Nunito-Regular.ttf",
  variable: "--font-body",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Paul Tarsleh Books",
  description: "Read books that will change your life",
  icons: {
    icon: "/images/tarsleh-logo.png",
    shortcut: "/images/tarsleh-logo.png",
    apple: "/images/tarsleh-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}

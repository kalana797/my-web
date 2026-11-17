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

const title = "Kalana Aluvihare — Full-Stack Software Engineer";
const description =
  "Portfolio of Keshan Kalana Aluvihare, a full-stack software engineer with 5+ years building web, mobile and enterprise software with Laravel, React, Vue, TypeScript and Flutter.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Keshan Kalana Aluvihare" }],
  keywords: [
    "Kalana Aluvihare",
    "Full-Stack Software Engineer",
    "Laravel",
    "React",
    "Vue",
    "TypeScript",
    "Flutter",
    "Business Central",
    "Sri Lanka",
  ],
  openGraph: { title, description, type: "profile" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

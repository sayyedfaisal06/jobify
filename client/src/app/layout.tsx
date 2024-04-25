import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Jobify",
  description:
    "Jobify is a dynamic job portal connecting recruiters and job seekers. Recruiters can post full-time jobs, freelance/contract work, while job seekers can search for jobs or freelance opportunities.",
  keywords:
    "job portal, job search, freelance work, job posting, hiring, recruitment",
  authors: [{ name: "Faisal Sayyed" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

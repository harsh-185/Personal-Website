import type React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Harsh Maheshwari | Software Engineer",
  description:
    "Personal website of Harsh Maheshwari, a Computer Science and Mathematics student at Pennsylvania State University.",
  keywords: [
    "Harsh Maheshwari",
    "Software Engineer",
    "Penn State",
    "React",
    "Next.js",
    "Machine Learning",
  ],
  authors: [{ name: "Harsh Maheshwari" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harsh-maheshwari.vercel.app",
    title: "Harsh Maheshwari | Software Engineer",
    description:
      "Personal website of Harsh Maheshwari, a Computer Science and Mathematics student at Pennsylvania State University.",
    siteName: "Harsh Maheshwari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Maheshwari | Software Engineer",
    description:
      "Personal website of Harsh Maheshwari, a Computer Science and Mathematics student at Pennsylvania State University.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

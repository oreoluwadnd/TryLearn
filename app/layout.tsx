import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Provider from "@/app/provider";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Try Learn",
  description: "Supercharge your learning experience with Try Learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <GoogleAnalytics gaId="G-HM6L7B0P01" />
        <body className={inter.className}>
          <Provider>{children}</Provider>
        </body>
        <Toaster richColors />
      </html>
    </ClerkProvider>
  );
}

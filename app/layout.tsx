import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from '@/app/providers/ConvexClientProvider'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AiRadioCast",
  description: "The Future of Radio Streaming",
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}

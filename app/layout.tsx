import type { Metadata } from "next";
import { ThemeProvider } from "@/app/components/theme-provider"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({subsets: ["latin"]})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EDO",
  description: "edo-frontend",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.className} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <main>
              {children}
            </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

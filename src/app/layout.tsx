import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/layout/navbar";
import { Aurora } from "@/components/ui/aurora";
import { ConstellationDots } from "@/components/ui/constellation-dots";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan José Valencia — Aplicaciones Web, Dashboards y Automatización",
  description:
    "Creo aplicaciones web, dashboards y automatizaciones que impulsan tu negocio. Calidad de ingeniería con enfoque en resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Aurora intensity="medium" className="fixed inset-0 -z-20" />
        <ConstellationDots />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

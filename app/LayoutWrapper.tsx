"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CSGSidebar } from "@/components/CSGSidebar";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [open, setOpen] = useState<boolean>(true);
  const isXs = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <SidebarProvider open={open} onOpenChange={(o) => setOpen(o)}>
          <CSGSidebar />
          <main className={(isXs || open) ? "w-screen" : "w-[calc(100vw - 128px)] ml-[calc(128px)]"}>
            <SidebarTrigger />
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
};

"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CSGSidebar } from "@/components/CSGSidebar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <SidebarProvider open={open} onOpenChange={(o) => setOpen(o)}>
          <CSGSidebar />
          <main className={open ? "w-[calc(100vw - 128px)] ml-[calc(128px)]" : "w-screen"}>
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

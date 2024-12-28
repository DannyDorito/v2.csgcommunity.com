import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CSGSidebar } from "@/components/CSGSidebar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "csgcommunity.com",
  description: "Cerberus Stomping Ground Exile",
  authors: { url: "https://jallison.co.uk", name: "Danny Dorito" },
};

export const dynamic = "force-static";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <SidebarProvider>
          <CSGSidebar />
          <main>
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
}

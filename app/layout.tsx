import type { Metadata } from "next";
import "./globals.css";
import { LayoutWrapper } from "./LayoutWrapper";

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
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

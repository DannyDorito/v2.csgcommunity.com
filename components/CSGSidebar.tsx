"use client";

import {
  AtSign,
  CircleHelp,
  Copyright,
  House,
  Scale,
  Server,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CSGSidebar = () => {
  const pathName = usePathname();

  const routes = [
    {
      href: "/",
      name: "Home",
      icon: <House />,
    },
    {
      href: "/servers",
      name: "Servers",
      icon: <Server />,
    },
    {
      href: "/rules",
      name: "Rules",
      icon: <Scale />,
    },
    {
      href: "/about",
      name: "About Us",
      icon: <Users />,
    },
    {
      href: "/faq",
      name: "FAQ",
      icon: <CircleHelp />,
    },
    {
      href: "/contact",
      name: "Contact",
      icon: <AtSign />,
    },
  ];

  const isActive = (href: string): boolean => {
    return pathName === href;
  };

  return (
    <Sidebar id="sidebar-main">
      <SidebarHeader style={{ paddingRight: "8px" }}>
        <h3 className="scroll-m-20 text-2xl font-bold orange">CSG Exile</h3>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => {
                return (
                  <SidebarMenuItem key={`sidebar-menu-item-${route.name}`}>
                    <SidebarMenuButton asChild isActive={isActive(route.href)}>
                      <Link href={route.href}>
                        {route.icon}
                        {route.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter style={{ paddingRight: "8px" }}>
        <div className="flex orange">
          <Copyright />
          &nbsp;CSG 2024
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useState } from "react";

export function NavMain({ items, onSelectPage }) {
  const [activeItem, setActiveItem] = useState(items[0]?.title || ""); // Default active

  const handleClick = (title) => {
    setActiveItem(title);
    onSelectPage(title);
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              tooltip={item.title}
              onClick={() => handleClick(item.title)}
              className={`${
                activeItem === item.title
                  ? "bg-muted text-gray-900 dark:text-gray-50"
                  : "text-gray-700 dark:text-gray-400"
              }`}
            >
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

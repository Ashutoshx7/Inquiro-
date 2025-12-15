"use client"

import { Sparkles, PanelLeftClose } from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher() {
  const { toggleSidebar, state } = useSidebar()
  
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" onClick={toggleSidebar}>
          <Sparkles className="size-5" />
          <span className="font-semibold text-base group-data-[collapsible=icon]:hidden">Inquiro</span>
          <PanelLeftClose className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

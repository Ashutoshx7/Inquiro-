"use client"

import * as React from "react"
import {
  Plus,
  Compass,
  X,
  Code,
  Users,
} from "lucide-react"
import ModeToggle from "@/components/theme-toggle";

import { NavMain } from "@/components/nav-main"
import { NavRecent } from "@/components/nav-recent"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavUser } from "@/components/nav-user"

// Navigation data
const data = {
  navMain: [
    {
      title: "New Chat",
      url: "#",
      icon: Plus,
    },
    {
      title: "Lookout",
      url: "#",
      icon: Compass,
    },
    {
      title: "Study",
      url: "#",
      icon: X,
      isActive: true,
    },
    
   
  ],
  recent: [
    {
      title: "Brief Hello Greeting",
      url: "#",
    },
    {
      title: "Building Artificial Intelligence",
      url: "#",
    },
  ],
  user: {
    name: "N",
    email: "n@example.com",
    avatar: "",
  },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavRecent items={data.recent} />
      </SidebarContent>
      <div className="flex justify-end">
       <ModeToggle  />
       </div>
      <SidebarFooter>
        <NavUser user={data.user} />
       
      </SidebarFooter>
    </Sidebar>
  )
}

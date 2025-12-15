"use client";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export function SidebarHeaderClient() {
  const { state } = useSidebar();
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 px-4">
      {state === "collapsed" && <SidebarTrigger className="-ml-1" />}
    </header>
  );
}

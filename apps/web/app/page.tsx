import { Calendar, Home as HomeIcon, Inbox, Search, Settings } from "lucide-react";
import ModeToggle from "@/components/theme-toggle";

// Menu items.


export default function Home() {
  return (
    <div className="flex  justify-end items-center  px-8">
      <ModeToggle />
      
      
    </div>
  );
}

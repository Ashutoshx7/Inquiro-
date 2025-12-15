import { Calendar, Home as HomeIcon, Inbox, Search, Settings } from "lucide-react";
import ModeToggle from "@/components/theme-toggle";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: HomeIcon,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Welcome Home</h1>
        <ModeToggle />
      </div>
      <p className="mt-2">Your content goes here.</p>
    </div>
  );
}

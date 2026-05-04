"use client";

import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import {
  UserRound,
  Inbox,
  CreditCard,
  BellRing,
  Settings,
  HatGlasses,
  MessageSquare,
  Cookie,
} from "lucide-react";
import UserItem from "./UserItem";
import { MenuList } from "@/types/sidebar";

export default function Sidebar() {
  const menuList: MenuList[] = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <UserRound />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <BellRing />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <HatGlasses />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Cookies",
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <aside className="flex flex-col gap-4 w-75 min-w-75 border-r min-h-screen p-4 fixed">
      <div>
        <UserItem />
      </div>
      <nav className="grow">
        <Command className="max-w-sm rounded-lg">
          <CommandList>
            {menuList.map((menu, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((item, key: number) => (
                  <CommandItem
                    key={key}
                    className="cursor-pointer data-selected:bg-transparent hover:bg-muted"
                  >
                    {item.icon} {item.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </nav>
      <div>Settings / Notification</div>
    </aside>
  );
}

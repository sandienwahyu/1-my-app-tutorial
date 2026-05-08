"use client";

import { Bell } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [notifications, setNotifications] = useState([
    {
      text: "This is Notification",
      date: "07-05-2026",
      read: true,
    },
    {
      text: "This is Another Notification",
      date: "08-05-2026",
      read: false,
    },
  ]);

  return (
    <div className="grid grid-cols-2 w-full p-2 border-b">
      <CommandDemo />
      <div className="flex justify-end items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="relative">
            <Button variant="outline">
              <div>
                <span
                  className={`absolute -top-1 -right-1 min-h-3 min-w-3 rounded-full bg-green-500 opacity-70 ${notifications.find((item) => item.read === true) ? "" : "hidden"}`}
                ></span>
                <Bell />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            {notifications.map((item, i) => (
              <DropdownMenuItem
                key={i}
                className="flex py-2 px-3 items-start cursor-pointer gap-4 transition"
              >
                <span
                  className={`min-h-3 min-w-3 rounded-full my-1 ${!item.read ? "bg-green-500" : "bg-neutral-400"}`}
                ></span>
                <div>
                  <p className="">{item.text}</p>
                  <p className="text-neutral-400 text-xs">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

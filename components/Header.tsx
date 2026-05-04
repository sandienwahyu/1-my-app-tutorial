"use client";

import { Bell } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="grid grid-cols-2 w-full p-2 border-b">
      <CommandDemo />
      <div className="flex justify-end items-center">
        <Button variant="outline" size="sm">
          <Bell />
        </Button>
      </div>
    </div>
  );
}

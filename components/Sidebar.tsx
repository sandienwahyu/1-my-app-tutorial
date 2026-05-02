"use client";

import UserItem from "./UserItem";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 w-75 min-w-75 border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">Menu</div>
      <div>Settings / Notification</div>
    </div>
  );
}

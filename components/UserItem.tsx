"use client";

interface UserItemProps {
  color: string;
  initial: string;
  name: string;
  email: string;
}

export default function UserItem({
  color,
  initial,
  name,
  email,
}: UserItemProps) {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-xl p-2 min-w-55 max-w-60">
      <div
        className={`avatar flex items-center justify-center rounded-full min-h-7 min-w-7 ${color}`}
      >
        <p>{initial}</p>
      </div>
      <div className="grow">
        <p className="text-base font-bold">{name}</p>
        <p className="text-sm text-neutral-500">{email}</p>
      </div>
    </div>
  );
}

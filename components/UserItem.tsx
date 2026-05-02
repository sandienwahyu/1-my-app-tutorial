"use client";
export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-xl p-3">
      <div className="avatar flex items-center justify-center rounded-full min-h-12 min-w-12 bg-emerald-500">
        <p>SW</p>
      </div>
      <div className="grow">
        <p className="text-base font-bold">Sandien Wahyu</p>
        <p className="text-sm text-neutral-500">sandienwahyu@gmail.com</p>
      </div>
    </div>
  );
}

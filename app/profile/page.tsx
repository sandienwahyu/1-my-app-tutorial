import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import UserItem from "@/components/UserItem";

type UserRole = "admin" | "user";
interface User {
  color: string;
  initial: string;
  name: string;
  email: string;
  role: UserRole;
  status?: string;
}

const userList: User[] = [
  {
    color: "bg-emerald-500",
    initial: "SW",
    name: "Sandien Wahyu",
    email: "sandienwahyu@gmail.com",
    role: "admin",
  },
  {
    color: "bg-blue-500",
    initial: "RY",
    name: "Rahmatiana Yuniar",
    email: "tianayuniar@gmail.com",
    role: "user",
  },
  {
    color: "bg-orange-500",
    initial: "RH",
    name: "Rudi Habibie",
    email: "rudihabibie@gmail.com",
    role: "user",
    status: "pending",
  },
];

export default function ProfileSettings() {
  return (
    <section className="pt-8 px-4">
      <h2 className="text-2xl font-semibold">Team Settings</h2>
      <div className="flex items-center">
        <Command>
          <CommandInput className="" placeholder="Type email..." />
        </Command>
        <Button variant={"secondary"}>Add New Member</Button>
      </div>

      <div className="mt-4 border rounded">
        {userList.map((user, index) => (
          <div
            key={index}
            className="grid grid-cols-4 md:grid-cols-6 items-center py-2 gap-2 border-b last:border-b-0 px-2"
          >
            <div className="col-span-2 md:col-span-2">
              <UserItem
                color={user.color}
                initial={user.initial}
                name={user.name}
                email={user.email}
              />
            </div>
            <div className="col-span-1 md:col-span-3">
              <div className="flex flex-wrap gap-2">
                <Badge>{user.role}</Badge>
                {user.status && (
                  <Badge variant={"secondary"}>{user.status}</Badge>
                )}
              </div>
            </div>
            <Button variant={"ghost"} className="col-span-1">
              Remove
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

import { ReactNode } from "react";

interface MenuItem {
  link: string;
  icon: ReactNode;
  text: string;
}

export interface MenuList {
  group: string;
  items: MenuItem[];
}

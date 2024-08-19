import NavLinkItem from "@/components/L1/nav-link";
import { TypeMenu } from "@/types/menu";
import MenuItem from "./menu-item";

export default function MenuList() {
  const menu: TypeMenu[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "about",
    },
    {
      name: "Services",
      href: "services",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];
  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {menu.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
        
      </ul>
      
    </div>
  );
}

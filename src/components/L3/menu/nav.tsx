import MenuList from "./menu-list";
import Logo from "@/components/L1/logo/logo";

export default function Nav() {
  return (
    <nav className="bg-white sticky w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <MenuList />
      </div>
    </nav>
  );
}

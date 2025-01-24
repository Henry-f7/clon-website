import Image from "next/image";
import logo from "../../img/smbs.webp";
import NavbarButton from "./NavbarButton";
import NavbarMenuButton from "./NavbarMenuButton";
import NavbarLogo from "./NavbarLogo";
import NavbarItemsList from "./NavbarItemsList";

const items = [
  { name: "About us", url: "#" },
  { name: "Service", url: "#" },
  { name: "Blog", url: "#" },
  { name: "Carrers", url: "#" },
];

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap h-[92px] items-center justify-between mx-auto p-2 w-full">
        <NavbarLogo logo={logo} />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavbarButton />
          <NavbarMenuButton />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <NavbarItemsList items={items} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

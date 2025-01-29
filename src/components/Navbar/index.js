import logo from "../../img/smbs.webp";
import NavbarMenuButton from "./NavbarMenuButton";
import NavbarLogo from "./NavbarLogo";
import NavbarItemsList from "./NavbarItemsList";
import NavbarButton from "./NavbarButton";

const items = [
  { name: "About us", url: "#" },
  { name: "Service", url: "#" },
  { name: "Blog", url: "#" },
  { name: "Careers", url: "#" },
];

const Navbar = () => {
  return (
    <nav className="bg-white Navbar dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap h-[90px] items-center justify-start mx-auto p-2 w-full">
        <NavbarLogo logo={logo} />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavbarMenuButton />
        </div>
        <div
          className="flex items-center w-full h-full pt-[2px] md:flex md:w-auto md:order-1 ml-[11.55rem]"
          id="navbar-sticky"
        >
          <NavbarItemsList items={items} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

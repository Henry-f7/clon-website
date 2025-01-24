import Image from "next/image";

const NavbarLogo = ({ logo = "" }) => {
  return (
    <a
      href="https://flowbite.com/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <Image src={logo} className="h-12" alt="Logo" width={208} height={100} />
    </a>
  );
};

export default NavbarLogo;

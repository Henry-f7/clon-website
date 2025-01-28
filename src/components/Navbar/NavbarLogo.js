import Image from "next/image";

const NavbarLogo = ({ logo = "" }) => {
  return (
    <a
      href="#"
      className="flex items-center space-x-3 rtl:space-x-reverse pl-[10px]"
    >
      <Image src={logo} className="h-[49px]" alt="Logo" width={209} />
    </a>
  );
};

export default NavbarLogo;

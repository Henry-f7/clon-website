import Link from "next/link";

const NavbarButton = () => {
  return (
    <Link
      href="#"
      className="flex text-white bg-smbs-orange uppercase h-[51px] w-[260px] font-bold text-sm text-center tracking-[2px] items-center justify-center"
    >
      Schedule a call
    </Link>
  );
};

export default NavbarButton;

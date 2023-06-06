import logo from "../../../assets/logo.webp";
import { BiSearch } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="container fixed w-full top-0 z-10 shadow-md bg-[#1A1A1A] text-white font-Oxanium flex justify-between h-[80px] items-center text-[16px] font-semibold">
      <img src={logo} alt="" />
      <ul className="flex gap-10">
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
      <div className="flex text-2xl gap-5">
        <span className="hover:text-[#F67829]">
          <BiSearch />
        </span>
        <span className="hover:text-[#F67829]">
          <RxPerson />
        </span>
        <span className="hover:text-[#F67829]">
          <MdOutlineShoppingBag />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

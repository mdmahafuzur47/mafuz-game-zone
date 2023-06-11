import img from "../../../assets/Footer/1.jpg";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import {
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
const Footer = () => {
  return (
    <div
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)) ,linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),url(${img})`,
        backgroundPosition: "100% 100%",
        backgroundSize: "cover",
      }}
    >
      <div className="container py-28 grid grid-cols-4  text-white">
        <div>
          <h1 className="text-[18px] font-Oxanium font-[600] mb-5">
            Contact Us
          </h1>
          <p className="flex font-poppins font-medium text-[14px] mb-5 gap-2">
            <span className="text-[#F67929] text-[18px]">
              <MdLocationOn />
            </span>{" "}
            Gamewar - Video Game Store 44
            <br />
            New Market,Dhaka,Bangladesh
          </p>
          <p className="flex font-poppins font-medium text-[14px] mb-5 gap-2">
            <span className="text-[#F67929] text-[18px]">
              <MdCall />
            </span>{" "}
            (+880)1700000000
          </p>
          <p className="flex font-poppins font-medium text-[14px] mb-5 gap-2">
            <span className="text-[#F67929] text-[18px]">
              <MdEmail />
            </span>{" "}
            test@gmail.com
          </p>
        </div>
        <div>
          <h1 className="text-[18px] font-Oxanium font-[600] mb-5">
            Quick Links
          </h1>
          <ul className="font-poppins font-medium text-[14px] flex flex-col gap-2">
            <li>Search</li>
            <li>Delivery Information</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Shipping</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-Oxanium font-[600] mb-5">
            Information
          </h1>
          <ul className="font-poppins font-medium text-[14px] flex flex-col gap-2">
            <li>Shipping & Refund</li>
            <li>Terms And Conditions</li>
            <li>Sitemap</li>
            <li>Policy For Buyers</li>
            <li>Policy For Sellers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-Oxanium font-[600] mb-5">
            Our Newsletter
          </h1>
          <p className="font-poppins font-medium text-[14px]">
            There are many variations of passages of form humour, or randomised
          </p>
          <div className="my-4 relative">
            <input
              placeholder="Your Email"
              className="border-none p-3 w-full rounded-md"
              type="email"
              name="email"
              id=""
            />
            <p className="text-[#F67929] text-2xl absolute top-[13px] right-[10px]">
              <AiOutlineSend />
            </p>
          </div>
          <div className="flex gap-6 mt-5 text-xl">
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaGoogle />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaGithub />
            </span>
          </div>
        </div>
      </div>
      <div className="border-[.7px] border-gray-500"></div>
      <div className="text-white py-4">
        <p className="font-poppins text-center text-gray-300">
          © 2023, GameWar - Video Game Store Created By Mafuz
        </p>
      </div>
    </div>
  );
};

export default Footer;

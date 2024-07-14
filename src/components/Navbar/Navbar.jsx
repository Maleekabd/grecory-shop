/* eslint-disable react/prop-types */
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Input from "../Elements/Input";
import Data from "../Products/DummyData.json";
import "./Navbar.css";
import SubNavbar from "./SubNavbar";

const size = 25;

export const Navbar = () => {
  return (
    <header className="input sticky top-0 z-10 pt-0 px-0 pb-2">
      <nav className="flex sm:flex-wrap md:flex-wrap lg:flex-nowrap  justify-evenly items-center p-5">
        <a href="/">
          <img src="" alt="logo" />
        </a>
        <Input />
        <ul className="flex list-none gap-5">
          <li>
            <AiOutlineShoppingCart size={`${size}`} />
          </li>
          <li>
            <IoMdHeartEmpty size={`${size}`} />
          </li>
          <li>
            <IoPersonCircleOutline size={`${size}`} />
          </li>
        </ul>
      </nav>
      <SubNavbar Datas={Data} />
    </header>
  );
};

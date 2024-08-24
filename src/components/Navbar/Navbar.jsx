/* eslint-disable react/prop-types */
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Input from "../Elements/Input";
import Data from "../Products/DummyData.json";
import "./Navbar.css";
import SubNavbar from "./SubNavbar";
import Grocery from "../../../public/grocery.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/slices/authSlice";

const size = 35;

export const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);
  console.log(currentUser);
  return (
    <header className="input sticky top-0 z-10 pt-0 px-0 pb-2">
      <nav className="flex sm:flex-wrap md:flex-wrap lg:flex-nowrap  justify-evenly items-center p-5">
        <a href="/">
          <img src={Grocery} className="w-14" alt="logo" />
        </a>
        <Input />
        <ul className="flex list-none gap-5">
          <li className="relative">
            <Link to={"/cart"}>
              <span className="absolute w-5 h-5 bg-emerald-400 rounded-full -top-2 -right-2 text-center">
                0
              </span>
              <AiOutlineShoppingCart className="" size={`${size}`} />
            </Link>
          </li>
          <li className="cursor-pointer hover:text-emerald-400">
            <IoMdHeartEmpty size={`${size}`} />
          </li>
          <li className="person hover:text-emerald-400">
            {/* <Link to={`/login`}> */}
            <IoPersonCircleOutline className="" size={`${size}`} />
            {/* </Link> */}
            <ul className="nav-child">
              <li>
                <Link className="link" to={`/my-profile`}>
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="link" to={`/dashboard`}>
                  Dashboard
                </Link>
              </li>
              <li>
                {currentUser.user !== null ? (
                  <button onClick={() => dispatch(Logout())} className="link">
                    Logout
                  </button>
                ) : (
                  <Link className="link" to={`/login`}>
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <SubNavbar Datas={Data} />
    </header>
  );
};

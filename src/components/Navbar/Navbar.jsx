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
import { Logout } from "../../features/auth/authSlice";
import { useState } from "react";

const size = 35;

export const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);
  const getCartData = useSelector((state) => state.cart);


  const [searchterm, setSearchTerm] = useState("");

  const handleSearch = (item) => {
    setSearchTerm(item);
  }

    return (
    <header className="bg-white sticky top-0 z-10 pt-0 px-0 pb-2">
      <nav className="flex sm:flex-wrap md:flex-wrap lg:flex-nowrap justify-between items-center p-5">
        <a href="/" className="w-1/6 flex justify-center items-center">
          <img src={Grocery} className="w-14" alt="logo" />
        </a>
        <Input onSearch={handleSearch}/>
        <ul className="flex list-none gap-5">
          <li className="relative cursor-pointer hover:text-emerald-400">
            <Link to={"/cart"}>
              <div className="flex justify-center items-center gap-2">
                <span className="absolute text-[0.8rem] w-5 h-5 text-white bg-emerald-400 rounded-full -top-1 left-5 text-center">
                  {getCartData?.totalQuantity !== null
                    ? getCartData?.totalQuantity
                    : 0}
                </span>
                <AiOutlineShoppingCart className="" size={`${size}`} />
                <h1>Cart</h1>``
              </div>
            </Link>
          </li>
          <li className="cursor-pointer hover:text-emerald-400">
            <Link to={"/favorite"}>
            <div className="flex justify-center items-center gap-2">
            <IoMdHeartEmpty size={`${size}`} />
            <h1>Favorite</h1>
            </div>
            </Link>
          </li>
          <li className="person hover:text-emerald-400">
            {/* <Link to={`/login`}> */}
            <IoPersonCircleOutline className="" size={`${size}`} />
            {/* </Link> */}
            <ul className="nav-child">
              <li>
                <Link className="link" to={`/profile`}>
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

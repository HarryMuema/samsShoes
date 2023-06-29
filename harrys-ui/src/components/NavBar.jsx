import { IoMdMenu } from 'react-icons/io';
import { BsSuitHeart, BsCart4, BsArrowRightShort } from "react-icons/bs";
import { MdOutlineCompareArrows } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { navBarData } from "../data";
import { AiOutlineLogin } from "react-icons/ai";
import { useState } from "react";
import ItemCard from "./ItemCard";

const NavBar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="flex items-center h-[55px] bg-[#2c3640] relative shadow-sm shadow-[#2c3640] -mx-[20px] ">
      <div className="logo-container px-[20px] bg-white h-full top-[-1px] hover:shadow-lg flex items-center justify-center">
        <Link
          to={"."}
          onClick={() => setIsActive(false)}
          className="logo  text-lgeb tracking-[2px] sm:tracking-[10px]"
        >
          HAJIME
        </Link>
      </div>
      <div className="flex justify-between p-[5px] w-full h-full items-center">
        <Link onClick={() => setIsActive(!isActive)}>
          <IoMdMenu size={24} color={"#cacfe2"} />
          <span
            className={isActive ? "flex hover:flex" : "hidden hover:hidden"}
          >
            <div className="absolute w-full bg-white top-[100%] left-0 px-[20px] py-[40px] drop-shadow-lg">
              <section className="flex justify-center items-start flex-col">
                <div className="flex items-center gap-4 mb-[10px]">
                  {navBarData.account.icon}
                  <h1 className="text-lgb uppercase">
                    {navBarData.account.title}
                  </h1>
                </div>
                <div className="border-[1px] border-[#cacfe2] w-[120px] mb-[30px]"></div>
                <div className="flex gap-4 mx-[10px] mb-[40px]">
                  <p className="text-basel">{navBarData.account.description}</p>
                </div>
                <div className="flex items-center gap-6">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/registration", {
                        replace: false,
                      });
                    }}
                    className="flex items-center gap-1 bg-[#36b160] p-[10px] text-white text-smsb tracking-[5px] rounded-[5px]"
                  >
                    Continue
                    <BsArrowRightShort size={25} color={"white"} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("./login");
                    }}
                    className="flex gap-1 items-center text-baser"
                  >
                    login
                    <AiOutlineLogin size={25} color={"#2c3640"} />
                  </button>
                </div>
              </section>
              <section className="flex justify-start px-[20px] items-center bg-[#2c3640] -mx-[20px]">
                <div className="flex py-[20px] flex-col">
                  <h1 className="text-white uppercase text-lgb mb-[10px]">
                    Most viewed
                  </h1>
                  <div className="border-[1px] border-[#cacfe2] w-[60px] mb-[30px]"></div>
                  <div className="flex justify-center items-center relative">
                    <ItemCard />
                  </div>
                </div>
              </section>
              {/* {navBarData.map((navItem, index) => ( */}
              {/* ))} */}
            </div>
          </span>
        </Link>
        <BsSuitHeart size={24} color={"#cacfe2"} />
        <RiSearch2Line size={24} color={"#cacfe2"} />
        <BsCart4 size={24} color={"#cacfe2"} />
      </div>
    </nav>
  );
};

export default NavBar
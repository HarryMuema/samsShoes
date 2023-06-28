import { IoMdMenu } from 'react-icons/io';
import { BsSuitHeart, BsCart4 } from "react-icons/bs";
import { RiSearch2Line } from 'react-icons/ri';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const NavDropDownItem = ({ icon, title, children, url, onClick }) => {
  return (
    <>
      <div className="">{icon}</div>
      <Link to={url} className="flex flex-col gap-1" onClick={onClick}>
        <p
          to={url}
          className="flex gap-2 items-center font-bold text-primaryText text-[15px] "
        >
          {title} <HiArrowNarrowRight />
        </p>
        <p className="text-[14px] text-secondaryText font-normal">
          {children}
        </p>
      </Link>
    </>
  );
};

const NavDropDown = ({ data, showNav, onClick }) => {
  return (
    <div
      className={`bg-primaryBackgroundWhite  w-full ${
        showNav ? "flex" : "hidden"
      } lg:hidden lg:group-hover:flex flex-col gap-2 font-semibold lg:text-base hover:text-primaryButton cursor-default w-full `}
    >
      <div className=" bg-gray-100 lg:group-flex lg:bg-primaryBackgroundWhite w-full flex flex-wrap justify-start gap-4 lg:absolute lg:top-20 lg:right-0 lg:left-0 py-4 px-[20px] lg:px-[80px] bg-tranparent  lg:shadow-lg lg:shadow-red-100/20 border-t-[1px] border-gray-200/40">
        <ul className="max-w-[1060px] mx-auto lg:group-flex w-full flex flex-wrap justify-start gap-4">
          {data?.map(({ id, icon, title, link, description }) => (
            <li className="flex gap-4 w-full sm:max-w-[300px]" key={id}>
              <NavDropDownItem
                icon={icon}
                title={title}
                url={link}
                onClick={onClick}
              >
                {description}
              </NavDropDownItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="flex items-center h-[55px] bg-[#2c3640] shadow-sm shadow-[#2c3640] -mx-[20px] ">
      <div className="logo-container px-[20px] bg-white h-full top-[-1px] hover:shadow-lg flex items-center justify-center">
        <h1 className="logo  text-lgeb tracking-[2px] sm:tracking-[10px]">
          HAJIME
        </h1>
      </div>
      <div className="flex justify-between p-[5px] w-full h-full items-center">
        <NavLink to={'/'}>
          {({isActive, isPending}) => (
            <span className={isActive? 'active' : ''}>
              <IoMdMenu size={24} color={"#cacfe2"} />
              <NavDropDown/>
            </span>
          )}
        </NavLink>
        <BsSuitHeart size={24} color={"#cacfe2"} />
        <RiSearch2Line size={24} color={"#cacfe2"} />
        <BsCart4 size={24} color={"#cacfe2"} />
      </div>
    </nav>
  );
}

export default NavBar
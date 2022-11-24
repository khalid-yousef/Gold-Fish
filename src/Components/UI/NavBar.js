import { RiMenuUnfoldFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

import { motion, useAnimation } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const navBarAnimation = useAnimation();

  const closeNavBar = () => {
    navBarAnimation.start({
      x: 0,
      opacity: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.2,
      },
    });
  };

  const openNavBar = () => {
    navBarAnimation.start({
      x: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.2,
      },
    });
  };

  return (
    <div className={`flex items-center justify-between ${props.className}`}>
      <div
        className={`${props.navbarIndex} flex items-center justify-between w-full`}
      >
        <div className="flex gap-3 items-center">
          <div
            onClick={openNavBar}
            className=" rounded-b cursor-pointer bg-[#ffdea0] py-2 px-5 "
          >
            <RiMenuUnfoldFill className=" text-[#211f20] text-2xl" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#ffdea0] py-2 px-5 cursor-pointer rounded-b">
            <FiPhoneCall className=" text-[#211f20] text-2xl" />
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={navBarAnimation}
        className={`flex flex-col items-start gap-10 fixed ${props.openMenuIndex} left-[-100%] md:left-[-30%] top-0 w-[100%] md:w-[30%] h-[100vh] bg-[#25252d]`}
      >
        <div
          onClick={closeNavBar}
          className=" cursor-pointer absolute right-0 top-0 py-2 px-5 rounded-l bg-[#ffdea0] text-[#575757] text-3xl "
        >
          <AiFillCloseCircle />
        </div>

        <div className="w-full h-full">
          <div>
            <ul className="flex flex-col text-xl text-white mt-12">
              <li className="hover:bg-[rgba(255,255,255,.1)] w-full h-full transition-all duration-500">
                <NavLink
                  onClick={closeNavBar}
                  className={(navData) =>
                    navData.isActive
                      ? " text-[#FFDEA0] w-full h-full block p-5"
                      : "text-white p-5 w-full h-full block hover:text-[#FFDEA0] transition-all duration-300"
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              <li className="hover:bg-[rgba(255,255,255,.1)] w-full h-full transition-all duration-500">
                <NavLink
                  onClick={closeNavBar}
                  className={(navData) =>
                    navData.isActive
                      ? " text-[#FFDEA0] w-full h-full block p-5"
                      : "text-white p-5 w-full h-full block hover:text-[#FFDEA0] transition-all duration-300"
                  }
                  to="/category/sushi"
                >
                  Sushi
                </NavLink>
              </li>

              <li className="hover:bg-[rgba(255,255,255,.1)]  w-full h-full transition-all duration-500">
                <NavLink
                  onClick={closeNavBar}
                  className={(navData) =>
                    navData.isActive
                      ? "p-5 text-[#FFDEA0] w-full h-full block"
                      : "p-5 text-white w-full h-full block hover:text-[#FFDEA0] transition-all duration-300"
                  }
                  to="/category/seafood"
                >
                  Seafood
                </NavLink>
              </li>
              <li className="hover:bg-[rgba(255,255,255,.1)]  w-full h-full transition-all duration-500">
                <NavLink
                  onClick={closeNavBar}
                  className={(navData) =>
                    navData.isActive
                      ? "p-5 text-[#FFDEA0] w-full h-full block"
                      : "p-5 text-white w-full h-full block hover:text-[#FFDEA0] transition-all duration-300"
                  }
                  to="/category/salads"
                >
                  Salads
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <button className="py-2 px-3 text-[#575757] font-bold bg-[#ffdea0] rounded m-5">
              Contact Us
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;

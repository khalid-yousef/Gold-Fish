import React from "react";
import { NavLink } from "react-router-dom";

const CategoryLinks = () => {
  return (
    <div>
      <ul className="flex gap-5 text-xl text-white">
        <li className="hover:bg-[rgba(255,255,255,.1)] w-full h-full transition-all duration-500 rounded-[20px]">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "py-1 px-4 text-[#FFDEA0] w-full h-full block"
                : "py-1 px-4 text-white w-full h-full block hover:text-[#FFDEA0] transition-all duration-300"
            }
            to="/home"
          >
            Home
          </NavLink>
        </li>

        <li className="hover:bg-[rgba(255,255,255,.1)] w-full h-full transition-all duration-500 rounded-[20px]">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "py-1 px-4 text-[#FFDEA0] w-full h-full block"
                : "py-1 px-4 text-white w-full h-full block hover:text-[#FFDEA0] transition-all duration-300"
            }
            to="/category/sushi"
          >
            Sushi
          </NavLink>
        </li>

        <li className="hover:bg-[rgba(255,255,255,.1)]  w-full h-full transition-all duration-500 rounded-[20px]">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "py-1 px-4 text-[#FFDEA0] w-full h-full block"
                : "py-1 px-4 text-white w-full h-full block hover:text-[#FFDEA0] transition-all duration-300"
            }
            to="/category/seafood"
          >
            Seafood
          </NavLink>
        </li>
        <li className="hover:bg-[rgba(255,255,255,.1)]  w-full h-full transition-all duration-500 rounded-[20px]">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "py-1 px-4 text-[#FFDEA0] w-full h-full block"
                : "py-1 px-4 text-white w-full h-full block hover:text-[#FFDEA0] transition-all duration-300"
            }
            to="/category/salads"
          >
            Salads
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CategoryLinks;

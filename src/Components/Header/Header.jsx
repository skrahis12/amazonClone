import React from "react";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <nav className="w-full h-15 bg-[#0f1111] flex wrap items-center justify-evenly">
        <div className="flex gap-5">
          <div className="text-white text-3xl font-bold hover:border-1 p-1 hover:border-white">
            Amazon<span className="text-[15px]">.in</span>
          </div>
          <div className="flex hover:border-1 p-1 hover:border-white">
            <div className="mt-4">
              {" "}
              <CiLocationOn size={20} color="white" />
            </div>
            <div>
              <p className="text-[#cccccc] text-[12px]">
                delivery to {/* location*/}
              </p>
              <p className="text-[#ffffff] text-[14px]">Update Location</p>
            </div>
          </div>
        </div>

        <div className="flex wrap justify-center items-center">
          <div>
            <select
              className="bg-[#e6e6e6] rounded-l-sm w-13 p-2 h-10"
              name="Categories"
              id=""
            >
              <option>All</option>
            </select>
          </div>
          <div>
            <input
              type="search"
              placeholder="Search Amazon.in "
              className="bg-[#ffffff] outline-none p-2 w-170  h-10"
            />
          </div>
          <div>
            <button className="bg-amber-400 rounded-r-sm  p-2 w-10 h-10 border-none">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="flex wrap justify-between gap-7 text-[#ffffff]">
          <div className="hover:border-1 p-1 hover:border-white">
            <p className="text-[12px]">Hello, sign in</p>
            <select name="account list" id="">
              <option value="">Account & Lists</option>
            </select>
          </div>
          <div className="hover:border-1 p-1 hover:border-white">
            <p className="text-[12px]">Returns</p>
            <p className="text-[14px]">& Orders</p>
          </div>
          <div className="flex mt-1 hover:border-1 p-1 hover:border-white">
            <div>
              <FaCartArrowDown size={25} />
            </div>
            <p className="mt-2">Cart</p>
          </div>
        </div>
      </nav>
    </>
  );
}

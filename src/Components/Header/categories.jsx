import React from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

export default function Categories() {
  return (
    <>
      <div className="bg-[#232f3e] w-full h-10 flex wrap items-center text-white gap-5 p-2">
        <Link className="flex font-bold text-[14px] hover:border-1 p-1 hover:border-white">
          <IoMdMenu size={25} /> All
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          MX player
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          Sell
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          BestSellers
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          Mobiles
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          Customer Service
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          Today's Deals
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
            Prime 
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          New Releases
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          Fashion
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          Amazon Pay
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          Electronics
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          Home and Kitchen
        </Link>
        <Link className=" text-[14px] hover:border-1 p-1 hover:border-white">
          Toys & Games 
        </Link>
      </div>
    </>
  );
}

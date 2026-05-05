import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="w-full h-auto p-2 mt-10">
        <div className="w-full h-10 bg-[#37475a] text-center text-white p-2">
          <p>Bact to top</p>
        </div>

        <div className="w-full h-70 bg-[#232f3e] flex justify-evenly pt-10">
          <div className="text-[#dddddd] flex flex-col">
            <h2 className="text-white font-bold">Get to Know Us</h2>
            <Link>About Amazon</Link>
            <Link>Careers</Link>
            <Link>Press Realease</Link>
            <Link>Amazon Science</Link>
          </div>

          <div className="text-[#dddddd] flex flex-col">
            <h2 className="text-white font-bold">Connect with Us</h2>
            <Link>FaceBook</Link>
            <Link>Twitter</Link>
            <Link>Instagram</Link>
          </div>

          <div className="text-[#dddddd] flex flex-col">
            <h2 className="text-white font-bold">Make money with Us</h2>
            <Link>Sell on Amazon</Link>
            <Link>Advertise your Product</Link>
            <Link>Supply to Amazon</Link>
            <Link>Amazon global selling</Link>
          </div>

          <div className="text-[#dddddd] flex flex-col">
            <h2 className="text-white font-bold">Let Us Help you</h2>
            <Link>Your Account</Link>
            <Link>Return sentre</Link>
            <Link>Amazon App download</Link>
            <Link>Help</Link>
          </div>
        </div>
        <div className="w-full h-[1px] border- border-white"></div>
        <div className="w-full h-30 bg-[#232f3e] flex justify-evenly pt-10">
          <div className="flex h-15 p-2 gap-30">
            <div className="text-white text-2xl">
              <h1>Amazon</h1>
            </div>

            <div className="flex gap-2">
              <select name="lang" id="" className="py-2 rounded px-8 text-white outline- text-[15px] border-white border-1">
                <option className="text-black" value="eng">English</option>
                <option className="text-black"  value="eng">Hindi</option>
                <option className="text-black"  value="eng">Urdu</option>
              </select>
              <button className="py-2 px-8 rounded text-white text-[15px] border-white border-1">
                India
              </button>
            </div>
          </div>
        </div>  
      </footer>
    </>
  );
}

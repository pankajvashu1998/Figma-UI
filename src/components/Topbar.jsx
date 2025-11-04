"use client";
import { useState } from "react";
import { GoGlobe } from "react-icons/go";
import { TfiBlackboard } from "react-icons/tfi";
import { GrDocument } from "react-icons/gr";
import { BiParty } from "react-icons/bi";
import { GiLevelFour } from "react-icons/gi";
import { IoDownloadOutline } from "react-icons/io5";
import { FiPenTool } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function TopBar({ setSideBar, sideBar }) {
  const [openSide, setSideOpen] = useState(false);

  return (
    <div className="relative w-full ">
      {/* Floating Toggle Button */}
      <button className="fixed bottom-6  right-6 z-50 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-blue-700 transition">
        {open ? <IoClose /> : <FiMenu />}
      </button>

      {/* TopBar */}
      <div
        className={`bg-white sticky top-0 z-50 border-b border-gray-200 px-4 py-3  w-full transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex  sm:flex-row  sm:items-center justify-between gap-3 max-w-7xl mx-auto">
          {/* Title */}
          <div className="flex justify-center items-center  gap-3">
            <span
              onClick={() => setSideBar(!sideBar)}
              className="md:hidden cursor-pointer"
            >
              <FaBars />
            </span>
            <h1 className="text-sm sm:text-base font-medium">Recents</h1>
          </div>

          {/* Right Side */}
          <div className="hidden flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 w-full sm:w-auto  lg:block">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <ul className="flex flex-wrap justify-start text-[12px] items-center gap-2">
                {/* Design */}
                <li className="px-4 py-2 rounded-2xl bg-gray-200 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-blue-500 text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <FiPenTool className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  Design
                </li>

                {/* FigJam */}
                <li className="px-4 py-2 rounded-2xl bg-gray-200 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-purple-400 text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <GrDocument className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  FigJam
                </li>

                {/* Slides */}
                <li className="px-4 py-2 rounded-2xl bg-gray-200 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-orange-400 text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <TfiBlackboard className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  Slides
                </li>

                {/* Buzz */}
                <li className="px-4 py-2 rounded-2xl bg-gray-200 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-pink-500 text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <BiParty className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  Buzz
                </li>

                {/* Site */}
                <li className="px-4 py-2 rounded-2xl bg-gray-200 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-indigo-400 text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <GoGlobe className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  Site
                </li>

                {/* Make */}
                <li className="px-3 py-2 rounded-2xl bg-gray-200 flex items-center gap-1 cursor-pointer group transition">
                  <span className="text-md p-0.5 bg-black text-white rounded-sm relative w-5 h-5 flex items-center justify-center">
                    <GiLevelFour className="group-hover:hidden" />
                    <IoIosAdd className="hidden group-hover:block text-white text-lg" />
                  </span>
                  Make
                </li>
              </ul>

              {/* Download Icon */}
              <span className="p-2 rounded-full bg-gray-200 flex items-center text-lg hover:bg-gray-300 transition cursor-pointer">
                <IoDownloadOutline />
              </span>
            </div>
          </div>
          <div className="text-sm lg:hidden cursor-pointer flex justify-center items-center gap-2 bg-blue-500 px-5 py-2 text-white rounded-sm">
            <span className="text-xl">
              <IoIosAdd />
            </span>
            Create
            <span className="text-xl">
              <MdKeyboardArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

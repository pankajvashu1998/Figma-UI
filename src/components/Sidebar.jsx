"use client";

import { MdOutlineWatchLater } from "react-icons/md";
import { PiBookOpenUser } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import {
  MdOutlineSpaceDashboard,
  MdKeyboardArrowDown,
  MdOutlineDone,
  MdOutlineFileDownload,
} from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { BsTrash, BsBoxArrowInRight } from "react-icons/bs";
import { GrUploadOption } from "react-icons/gr";
import { LuSettings2 } from "react-icons/lu";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdFolderOpen } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar({ sideBar, setSideBar }) {
  const [profile, setProfile] = useState(false);

  return (
    <>
      <div
        className={`h-full fixed top-15 md:top-0  duration-300 -left-full md:left-0  p-2 flex-col bg-white  w-[280px]  border-r border-gray-200 `}
      >
        {/* Profile Section */}
        <div className="flex items-center justify-between gap-3 mb-6 relative">
          <div className="flex w-full justify-between items-center gap-2">
            <div className="flex gap-2 justify-center items-center cursor-pointer">
              <div className="w-7 h-7 bg-linear-to-br from-blue-500 to-purple-600 mx-1 rounded-full flex items-center justify-center text-sm text-white overflow-hidden">
                <img
                  src="/pk.webp"
                  alt="pk.webp"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-sm truncate max-w-[120px] sm:max-w-none">
                Pankaj Kumar
              </p>
              <span
                onClick={() => setProfile(!profile)}
                className="text-gray-500 transition-transform duration-300"
              >
                <MdKeyboardArrowDown className="text-lg" />
              </span>
            </div>

            {/* Dropdown Menu */}
            <div
              className={`w-full bg-[#212121] p-4 absolute top-9 rounded-xl z-40 flex flex-col items-center transition-all duration-200 ${
                profile ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col items-center text-white text-center">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-600 overflow-hidden my-1">
                  <img
                    src="/pk.webp"
                    alt="pk.webp"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[12px]">Pankaj Kumar</p>
                <p className="text-[12px] text-gray-400">
                  pk85764798@gmail.com
                </p>
              </div>

              <ul className="text-white text-[12px] w-full my-4">
                {/* THEME DROPDOWN */}
                <li className="relative group flex items-center justify-between gap-2 py-2 hover:bg-blue-500 px-3 rounded-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      <MdOutlineSpaceDashboard />
                    </span>
                    Theme
                  </div>
                  <span className="text-xl">
                    <RiArrowDropRightLine />
                  </span>
                  {/* Submenu */}
                  <ul className="absolute top-0 -right-32 z-20 full ml-2 rounded-md bg-[#212121] cursor-pointer text-white p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <li className="p-1 rounded-sm hover:bg-blue-500 whitespace-nowrap">
                      Light
                    </li>
                    <li className="p-1 rounded-sm hover:bg-blue-500 whitespace-nowrap">
                      Dark
                    </li>
                    <li className="p-1 rounded-sm hover:bg-blue-500 whitespace-nowrap">
                      System Themes
                    </li>
                  </ul>
                </li>

                <li className="flex items-center gap-2 py-2 hover:bg-blue-500 px-3 rounded-sm">
                  <LuSettings2 className="text-lg" /> Settings
                </li>

                <li className="flex items-center gap-2 py-2 hover:bg-blue-500 px-3 rounded-sm">
                  <MdOutlineFileDownload className="text-lg" /> Get desktop app
                </li>

                <li className="flex items-center gap-2 py-2 px-3 rounded-sm border-t border-b border-gray-500 my-2">
                  <div className="w-6 h-6 overflow-hidden bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm text-white">
                    <img
                      src="/pk.webp"
                      alt="pk.webp"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[12px]">
                    <div>Create a community profile</div>
                    <div className="text-gray-400">pk85764798@gmail.com</div>
                  </div>
                </li>

                <li className="flex items-center gap-2 py-2 hover:bg-blue-500 px-3 rounded-sm">
                  <MdOutlineFileDownload className="text-lg" /> Get desktop app
                </li>
                <li className="flex items-center gap-2 py-2 hover:bg-blue-500 px-3 rounded-sm">
                  <BsBoxArrowInRight className="text-lg" /> Log out
                </li>
              </ul>
            </div>
          </div>

          <span className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            <FaRegBell />
          </span>
        </div>

        {/* Search */}
        <div className="mb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm outline-none pl-10"
            />
            <svg
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-1 mb-2 border-b-2 border-gray-300 ">
          <Link
            href={"/"}
            className="w-full flex items-center gap-3 px-3 py-2.5 bg-gray-100 rounded-lg text-[12px] font-medium"
          >
            <MdOutlineWatchLater className="text-lg text-gray-700" /> Recents
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg text-[12px]">
            <PiBookOpenUser className="text-lg text-gray-700" /> Community
          </button>
        </div>

        {/* Team Section */}
        <div onClick={()=> setSideBar(!sideBar)}  className="">
          <details className="relative max-w-md mx-auto p-3 transition-all duration-300">
            <summary className="cursor-pointer text-gray-800 text-[12px] flex justify-start items-center">
              <span className="h-4 w-4 rounded-full bg-pink-500 flex justify-center items-center text-white text-[8px]">
                P
              </span>
              <span className="mx-2">Pankaj Kumar's team</span>
              <MdKeyboardArrowDown className="text-gray-500 text-lg" />
              <span className="px-2 text-blue-400 bg-blue-100 rounded mx-3">
                Free
              </span>
            </summary>

            <div className="flex absolute w-full left-1 bg-black rounded-xl py-2 px-1 flex-col gap-1 my-2 text-[12px] z-10">
              <div className="flex justify-between w-full text-[11px] rounded-xl hover:bg-blue-500 items-center gap-2 text-white p-2">
                <MdOutlineDone className="text-lg" />
                <span className="w-4 h-4 rounded-full bg-pink-500 text-[8px] flex justify-center items-center text-white">
                  P
                </span>
                Pankaj Kumar's team
                <span className="px-2 text-blue-400 bg-blue-100 rounded mx-3">
                  Free
                </span>
              </div>
              <hr className="w-full border-gray-600" />
              <div className="flex w-full rounded-xl px-8 items-center p-2 hover:bg-blue-500 gap-3 text-white">
                <IoIosAdd className="text-2xl" /> <button>Create new</button>
              </div>
            </div>
          </details>

          <div  className=" text-[12px]">
            <Link
              href={"/draft"}
              className="w-full relative group flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
            >
              <IoDocumentOutline className="text-lg text-gray-700" />
              Drafts
              <span className="absolute right-4 text-2xl text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <IoIosAdd className="hover:bg-gray-200 rounded" />
              </span>
            </Link>
            <Link
              href={"/team"}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"
            >
              <RxDashboard className="text-lg text-gray-700" /> All projects
            </Link>
            <Link
              href={"/resource"}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"
            >
              <MdOutlineSpaceDashboard className="text-lg text-gray-700" />{" "}
              Resources
            </Link>
            <Link
              href={"/trash"}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"
            >
              <BsTrash className="text-lg text-gray-700" /> Trash
            </Link>
          </div>
        </div>

        {/* Upgrade Banner */}
        <div className="mt-auto border-t flex justify-center items-center flex-col border-gray-200 text-center pt-2 px-2">
          <GrUploadOption className="mb-4 text-lg text-gray-700" />
          <p className="text-[12px] text-gray-600 text-center leading-snug">
            Ready to go beyond this free plan?
            <br />
            Upgrade for premium features.
          </p>
          <button className="w-full my-2 bg-blue-500 text-white py-1 rounded-lg font-medium text-sm hover:bg-blue-600">
            View plans
          </button>
        </div>

        {/* Starred Section */}
        <details
          open
          className="w-full  border border-gray-200  p-4 transition-all duration-300"
        >
          <summary className="cursor-pointer text-gray-800 text-[12px] flex justify-start items-center">
            <MdKeyboardArrowDown className="text-gray-500 text-lg" />
            <span>Starred</span>
          </summary>
          <div className="flex items-center gap-1 my-2 text-[12px]">
            <MdFolderOpen className="text-gray-500 text-lg" /> Team project
          </div>
        </details>
      </div>

      {/* Mobile Sidebar */}

      <div
        className={`h-full fixed top-15 md:top-0 ${
          sideBar ? "left-0" : "-left-full"
        } duration-300  p-2 flex-col bg-white  w-[280px]  border-r border-gray-200 `}
      >
        {/* Profile Section */}
        <div className="flex items-center justify-between gap-3 mb-6 relative">
          <div className="flex w-full justify-between items-center gap-2">
            <div className="flex gap-2 justify-center items-center cursor-pointer">
              <div className="w-7 h-7 bg-linear-to-br from-blue-500 to-purple-600 mx-1 rounded-full flex items-center justify-center text-sm text-white overflow-hidden">
                <img
                  src="/pk.webp"
                  alt="pk.webp"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-sm truncate max-w-[120px] sm:max-w-none">
                Pankaj Kumar
              </p>
              <span
                onClick={() => setProfile(!profile)}
                className="text-gray-500 transition-transform duration-300"
              >
                <MdKeyboardArrowDown className="text-lg" />
              </span>
            </div>

            {/* Dropdown Menu */}
            <div
              className={`w-full bg-[#212121] p-4 absolute top-9 rounded-xl z-40 flex flex-col items-center transition-all duration-200 ${
                profile ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col items-center text-white text-center">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-600 overflow-hidden my-1">
                  <img
                    src="/pk.webp"
                    alt="pk.webp"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[12px]">Pankaj Kumar</p>
                <p className="text-[12px] text-gray-400">
                  pk85764798@gmail.com
                </p>
              </div>

              <ul className="text-white text-[12px] w-full my-4">
                {/* THEME DROPDOWN */}
                <li className="relative group flex items-center justify-between gap-2 py-2 hover:bg-blue-500 px-3 rounded-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      <MdOutlineSpaceDashboard />
                    </span>
                    Theme
                  </div>
                  <span className="text-xl">
                    <RiArrowDropRightLine />
                  </span>
                  {/* Submenu */}
                  <ul className="absolute top-0 -right-32 z-20 full ml-2 rounded-md bg-[#212121] cursor-pointer text-white p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <li className="p-1 rounded-sm hover:bg-blue-500 whitespace-nowrap">
                      Light
                    </li>
                    <li className="p-1 rounded-sm hover:bg-blue-500 whitespace-nowrap">
                      Dark
                    </li>
                    <li className="p-1 rounded-sm hover:bg-blue-500 whitespace-nowrap">
                      System Themes
                    </li>
                  </ul>
                </li>

                <li className="flex items-center gap-2 py-2 hover:bg-blue-500 px-3 rounded-sm">
                  <LuSettings2 className="text-lg" /> Settings
                </li>

                <li className="flex items-center gap-2 py-2 hover:bg-blue-500 px-3 rounded-sm">
                  <MdOutlineFileDownload className="text-lg" /> Get desktop app
                </li>

                <li className="flex items-center gap-2 py-2 px-3 rounded-sm border-t border-b border-gray-500 my-2">
                  <div className="w-6 h-6 overflow-hidden bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm text-white">
                    <img
                      src="/pk.webp"
                      alt="pk.webp"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[12px]">
                    <div>Create a community profile</div>
                    <div className="text-gray-400">pk85764798@gmail.com</div>
                  </div>
                </li>

                <li className="flex items-center gap-2 py-2 hover:bg-blue-500 px-3 rounded-sm">
                  <MdOutlineFileDownload className="text-lg" /> Get desktop app
                </li>
                <li className="flex items-center gap-2 py-2 hover:bg-blue-500 px-3 rounded-sm">
                  <BsBoxArrowInRight className="text-lg" /> Log out
                </li>
              </ul>
            </div>
          </div>

          <span className="p-2 hover:bg-gray-100 rounded cursor-pointer">
            <FaRegBell />
          </span>
        </div>

        {/* Search */}
        <div className="mb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm outline-none pl-10"
            />
            <svg
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-1 mb-2 border-b-2 border-gray-300 ">
          <Link href={"/"} className="w-full flex items-center gap-3 px-3 py-2.5 bg-gray-100 rounded-lg text-[12px] font-medium">
            <MdOutlineWatchLater className="text-lg text-gray-700" /> Recents
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg text-[12px]">
            <PiBookOpenUser className="text-lg text-gray-700" /> Community
          </button>
        </div>

        {/* Team Section */}
        <div onClick={()=> setSideBar(!sideBar)}  className="">
          <details className="relative max-w-md mx-auto p-3 transition-all duration-300">
            <summary className="cursor-pointer text-gray-800 text-[12px] flex justify-start items-center">
              <span className="h-4 w-4 rounded-full bg-pink-500 flex justify-center items-center text-white text-[8px]">
                P
              </span>
              <span className="mx-2">Pankaj Kumar's team</span>
              <MdKeyboardArrowDown className="text-gray-500 text-lg" />
              <span className="px-2 text-blue-400 bg-blue-100 rounded mx-3">
                Free
              </span>
            </summary>

            <div className="flex absolute w-full left-1 bg-black rounded-xl py-2 px-1 flex-col gap-1 my-2 text-[12px] z-10">
              <div className="flex justify-between w-full text-[11px] rounded-xl hover:bg-blue-500 items-center gap-2 text-white p-2">
                <MdOutlineDone className="text-lg" />
                <span className="w-4 h-4 rounded-full bg-pink-500 text-[8px] flex justify-center items-center text-white">
                  P
                </span>
                Pankaj Kumar's team
                <span className="px-2 text-blue-400 bg-blue-100 rounded mx-3">
                  Free
                </span>
              </div>
              <hr className="w-full border-gray-600" />
              <div className="flex w-full rounded-xl px-8 items-center p-2 hover:bg-blue-500 gap-3 text-white">
                <IoIosAdd className="text-2xl" /> <button>Create new</button>
              </div>
            </div>
          </details>

          <div  className=" text-[12px]">
            <Link
              href={"/draft"}
              className="w-full relative group flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg"
            >
              <IoDocumentOutline className="text-lg text-gray-700" />
              Drafts
              <span className="absolute right-4 text-2xl text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <IoIosAdd className="hover:bg-gray-200 rounded" />
              </span>
            </Link>
            <Link
              href={"/team"}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"
            >
              <RxDashboard className="text-lg text-gray-700" /> All projects
            </Link>
            <Link
              href={"/resource"}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"
            >
              <MdOutlineSpaceDashboard className="text-lg text-gray-700" />{" "}
              Resources
            </Link>
            <Link
              href={"/trash"}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg"
            >
              <BsTrash className="text-lg text-gray-700" /> Trash
            </Link>
          </div>
        </div>

        {/* Upgrade Banner */}
        <div className="mt-auto border-t flex justify-center items-center flex-col border-gray-200 text-center pt-2 px-2">
          <GrUploadOption className="mb-4 text-lg text-gray-700" />
          <p className="text-[12px] text-gray-600 text-center leading-snug">
            Ready to go beyond this free plan?
            <br />
            Upgrade for premium features.
          </p>
          <button className="w-full my-2 bg-blue-500 text-white py-1 rounded-lg font-medium text-sm hover:bg-blue-600">
            View plans
          </button>
        </div>

        {/* Starred Section */}
        <details
          open
          className="w-full  border border-gray-200  p-4 transition-all duration-300"
        >
          <summary className="cursor-pointer text-gray-800 text-[12px] flex justify-start items-center">
            <MdKeyboardArrowDown className="text-gray-500 text-lg" />
            <span>Starred</span>
          </summary>
          <div className="flex items-center gap-1 my-2 text-[12px]">
            <MdFolderOpen className="text-gray-500 text-lg" /> Team project
          </div>
        </details>
      </div>
    </>
  );
}

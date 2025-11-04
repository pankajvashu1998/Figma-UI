// components/MainContent.js
"use client";
import { useState } from "react";
import FileGrid from "./FileGride";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";

export default function MainContent() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="flex justify-center w-full min-h-screen">
      {!sideBar && <Sidebar sideBar={sideBar} />}

      <div className=" min-h-screen overflow-y-auto w-full md:ml-[280px]">
        <TopBar setSideBar={setSideBar} sideBar={sideBar} />
        <FileGrid />
      </div>
    </div>
  );
}

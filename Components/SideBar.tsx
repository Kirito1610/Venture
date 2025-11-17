"use client";
import {
  LayoutDashboard,
  SquareTerminal,
  TextAlignJustify,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function SideBar() {
  const slug = usePathname();
const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <>
      <TextAlignJustify onClick={()=>setOpenSideBar((prev)=>!prev)} className="fixed sm:hidden z-9999 top-3 left-3" />
    <aside className={` w-full max-sm:w-[200px] ${openSideBar ? ' max-sm:translate-x-0' : ' max-sm:translate-x-[-200px]'} transition-all duration-500 ease-out max-sm:bg-white max-sm:z-50 max-sm:fixed sm:sticky top-0 h-screen flex items-start bg-white border-r`}>
      <ul className="flex w-full py-20 flex-col">
        <li
          className={` hover:bg-[#Efefef] ${
            slug === "/dashboard" && "bg-[#Efefef]"
          } p-2 flex justify-start font-semibold items-center`}
        >
          <Link href={"/dashboard"} className="flex hover:underline gap-2">
            <LayoutDashboard className="w-5" />
            DashBoard
          </Link>
        </li>
        <li
          className={` hover:bg-[#Efefef] ${
            slug === "/play-ground" && "bg-[#Efefef]"
          } p-2 flex justify-start font-semibold items-center`}
        >
          <Link href={"/play-ground"} className="flex hover:underline gap-2">
            <SquareTerminal className="w-5" /> Prompt Playground
          </Link>
        </li>
      </ul>
    </aside>
    </>
  );
}

export default SideBar;

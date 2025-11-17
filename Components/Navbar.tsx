import { User } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <nav className="w-full border-b flex items-center justify-end h-[50px] fixed z-10 top-0 bg-white pl-[200xp]">
      <ul className="flex px-10 items-center justify-end">
        <li className=" flex gap-2 items-center">
          <span className=" border w-8 h-8 flex place-items-center p-1.5 rounded-full">
            <User />
          </span>
          <p>User</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

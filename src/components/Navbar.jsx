import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-zinc-800">
      <div className="flex container flex-wrap items-center justify-between lg:py-3 mx-auto px-2 py-2">
        <a
          className="text-white font-mono md:ml-3 ml-4 text-xl md:text-2xl font-sem underline"
          href="/"
        >
          codetab
        </a>
        <div>
          <SunIcon className="h-6 w-6 text-white" />
          <MoonIcon className="h-6 w-6 text-black" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

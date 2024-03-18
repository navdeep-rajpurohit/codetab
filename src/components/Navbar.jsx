import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { bbedit } from "@uiw/codemirror-theme-bbedit";

const Navbar = ({ theme, setTheme }) => {
  function switchTheme() {
    theme == bbedit ? setTheme(vscodeDark) : setTheme(bbedit);
  }
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
          {theme == vscodeDark ? (
            <button>
              <SunIcon className="h-6 w-6 text-white" onClick={switchTheme} />
            </button>
          ) : (
            <MoonIcon className="h-6 w-6 text-black" onClick={switchTheme} />
          )}
          {}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

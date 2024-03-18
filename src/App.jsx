import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Playground from "./components/Playground";
import Footer from "./components/Footer";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { bbedit } from "@uiw/codemirror-theme-bbedit";
const App = () => {
  const [theme, setTheme] = useState(vscodeDark);
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between bg-neutral-800">
        <Navbar theme={theme} setTheme={setTheme} />
        <Playground theme= {theme} />
        <Footer />
      </div>
    </>
  );
};

export default App;

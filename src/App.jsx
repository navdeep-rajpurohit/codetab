import React from "react";
import Navbar from "./components/Navbar";
import Playground from "./components/Playground";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between bg-neutral-800">
        <Navbar />
        <Playground />
        <Footer />
      </div>
    </>
  );
};

export default App;

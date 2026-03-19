import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    // <nav className="flex justify-between items-center px-6 py-4 bg-red-500 text-white sticky top-0 z-50">

    //   {/* LEFT - LOGO */}
    //   <div className="text-2xl font-bold">
    //     CrimeTrackr
    //   </div>

    //   {/* CENTER - SEARCH */}
    //   <div className="flex items-center gap-2">
    //     <input
    //       type="text"
    //       placeholder="Search Crime Files..."
    //       className=" w-32 sm:w-48 md:w-64 lg:w-100 xl:w-150 px-3 py-1 rounded-lg text-black bg-amber-50"
    //     />
    //   </div>

    //   {/* RIGHT - LINKS + TOGGLE + PROFILE */}
    //   <div className="flex items-center gap-6">

    //     {/* NAV LINKS */}
    //     <ul className="flex gap-4">
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //       <li><Link to="/report">FIR</Link></li>
    //     </ul>

    //     {/* DARK MODE TOGGLE */}
    //     <button
    //       onClick={toggleTheme}
    //       className="bg-white text-black px-2 py-1 rounded"
    //     >
    //       {dark ? "🌙" : "☀️"}
    //     </button>

    //     {/* PROFILE */}
    //     <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold">
    //       D
    //     </div>

    //   </div>
    // </nav>
    <nav className="flex items-center justify-between px-6 py-4 bg-red-500 text-white">

  {/* LEFT - LOGO */}
  <div className="text-2xl font-bold">
    CrimeTrackr
  </div>

  {/* CENTER - SEARCH (FIXED HERE) */}
  <div className="flex-1 flex justify-center px-4">
    <input
      type="text"
      placeholder="Search Crime Files..."
      className="
        w-full 
        max-w-xs 
        sm:max-w-sm 
        md:max-w-md 
        lg:max-w-lg 
        xl:max-w-xl
        px-4 py-2 
        rounded-lg 
        text-black
        bg-amber-50
      "
    />
  </div>

  {/* RIGHT - NAV */}
  <div className="flex items-center gap-6">
    <ul className="flex gap-4">
      <li>Home</li>
      <li>About</li>
      <li>FIR</li>
    </ul>

    <button className="bg-white text-black px-2 py-1 rounded">
      ☀️
    </button>

    <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">
      D
    </div>
  </div>

</nav>
  );
};

export default Navbar;
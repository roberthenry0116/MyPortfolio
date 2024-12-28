import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import NavButton from "./Button/NavButton";
const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="z-10 fixed w-5/6 top-0 shadow-xl bg-cyan-50/90 lg:bg-indigo-200/90 hover:shadow-white/30 py-1 mb-2 flex justify-between border border-indigo-200 rounded-xl rounded-t-none">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="transition-all pl-4 flex text-black lg:dark:text-black">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl hover:scale-125 mx-4 animate-pulse transition-colors"
          />
          <span className="transition-colors text-base xl:text-3xl font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase text-black lg:text-black hover:text-gray-700 active:text-gray-600">
            <a href="home">
              {"< Robert Henry >"}
            </a>
          </span>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-black hover:font-extrabold  active:text-black border-gray-600 hover:border-black appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.828z"
                  fill="currentColor"
                />
              ) : (
                <path
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  fill="currentColor"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
            } lg:block mt-2 lg:mt-0 cyan-400 lg:bg-transparent text-black p-4 lg:p-0 z-20`}>
          <ul className="list-reset lg:flex justify-end flex-1 items-center text-lg">
            <NavButton name="About Me" href="about" />
            <NavButton name="Skills" href="skills" />
            <NavButton name="Projects" href="projects" />
            <NavButton name="Resume" href="/Resume.pdf" />
            <NavButton name="Github" href="https://github.com/roberthenry0116/MyPortfolio.git" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

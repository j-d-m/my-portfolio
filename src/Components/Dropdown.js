import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "flex justify-center flex-col items-center bg-gray-800 text-white"
          : "hidden"
      }
      onClick={toggle}
    >
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            {" "}
            <a href="#about" className="ml-1 text-xl">
              Joshua Moir
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md: border-1 md:border-gray-700 flex flex-wrap items-center justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
              Past Work
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Get In Contact <AiOutlineArrowRight className="w-4 h-5 ml-1" />
          </a>
        </div>
      </header>
    </div>
  );
}

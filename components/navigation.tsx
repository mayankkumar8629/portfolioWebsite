"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between bg-zinc-900 rounded-full w-fit h-12 relative top-8 mx-auto md:w-[80%] md:justify-around shadow-md backdrop-blur-sm">
      <div className="px-4 py-2 font-semibold cursor-pointer">
        <Link
          href="/"
          className="text-sm md:text-lg transition-colors duration-300 hover:text-[#f76c00]">
          &lt;/home&gt;
        </Link>
      </div>
      <div className="px-4 py-2 font-semibold cursor-pointer">
        <Link
          href="#contacts"
          className="text-sm md:text-lg transition-colors duration-300 hover:text-[#f76c00]">
          &lt;/contacts&gt;
        </Link>
      </div>
      <div className="px-4 py-2 font-semibold cursor-pointer">
        <Link
          href="#skills"
          className="text-sm md:text-lg transition-colors duration-300 hover:text-[#f76c00]">
          &lt;/skills&gt;
        </Link>
      </div>
      <div className="px-4 py-2 font-semibold cursor-pointer">
        <Link
          href="#projects"
          className="text-sm md:text-lg transition-colors duration-300 hover:text-[#f76c00]">
          &lt;/projects&gt;
        </Link>
      </div>
      <div className="px-4 py-2 font-semibold cursor-pointer hidden md:block">
        <a
          href="https://github.com/kshitij-y"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm md:text-lg transition-colors duration-300 hover:text-[#f76c00]">
          &lt;/github&gt;
        </a>
      </div>
    </nav>
  );
}

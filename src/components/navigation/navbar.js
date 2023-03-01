import { useState } from "react";
import Link from "next/link";

function NavBar() {
  return (
    <header class="text-gray-400 bg-purple-900">
      <div class="container mx-auto flex flex-row p-5 md:flex-row items-center">
        
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <label >Menu</label>
        </div>

        <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
          <Link
            href="/"
            class="items-center block px-10 py-2 text-base font-medium text-center text-indigo-600 transition duration-500 ease-in-out transform  bg-white border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Sign in
          </Link>
          <Link
            href="/"
            class="items-center block px-10 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign up
          </Link>
        </div>


      </div>
    </header>
  );
}

export default NavBar;

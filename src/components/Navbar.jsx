import React from "react";

export default function Navbar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 shadow-md text-gray-500">
      <div class="flex items-center flex-shrink-0 text-gray mr-6">
        <span class="font-semibold text-xl tracking-tight">Certify</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-blue-400 hover:border-blue-400">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title> 
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="hidden lg:block text-sm lg:flex-grow text-right">
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-400 mr-4"
          >
            About Us
          </a>
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-400 mr-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer
      class="bg-blueGray-200 pt-8 pb-6"
    >
      <div class="w-full">
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-gray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2021</span>
              {"  "} Certify
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

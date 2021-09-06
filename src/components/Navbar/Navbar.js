import React from "react";
import Logo from "../../assets/logo.png";
import CustomButton from "../CustomButton/CustomButton";
import "./Navbar.css";

const Navbar = () => {
  const toggleNavbar = () => {
    document.querySelector(".mobile-nav").classList.toggle("hidden");
  };

  return (
    <nav class="border-marinara border-b-4 h-14 p-3 md:px-12 sm:px-4 bg-black flex justify-between items-center shadow">
      <div class="flex items-center justify-center">
        <img src={Logo} alt="logo of a pizza" class="w-sm" />
      </div>
      <div class="flex items-center space-between space-x-5">
        <CustomButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          Login
        </CustomButton>

        {/* Primary Navigation */}

        <div class="hidden md:flex items-center space-x-3">
          <a href="#">Menu</a>
          <a href="#">contact</a>
        </div>

        {/* Mobile Navigation */}
        <button class="md:hidden" onClick={toggleNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div class="mobile-nav hidden md:hidden absolute top-12 right-2">
          <div class="rounded-lg bg-black flex flex-col p-3 space-y-2 items-center">
            <a href="#">Menu</a>
            <a href="#">contact</a>
            <CustomButton>Sign Out</CustomButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

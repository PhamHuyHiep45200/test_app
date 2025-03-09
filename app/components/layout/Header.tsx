import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">CHAWK BAZAR</h1>
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:text-gray-500">
          Demos
        </a>
        <a href="#" className="hover:text-gray-500">
          Men Wear
        </a>
        <a href="#" className="hover:text-gray-500">
          Women Wear
        </a>
        <a href="#" className="hover:text-gray-500">
          Search
        </a>
        <a href="#" className="hover:text-gray-500">
          Shops
        </a>
        <a href="#" className="hover:text-gray-500">
          Pages
        </a>
      </nav>
      <div className="flex gap-4 items-center">
        <button className="border px-3 py-1 rounded">English - EN</button>
        <button className="hover:text-gray-500">Sign In</button>
        <button className="relative">
          🛒{" "}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white px-2 rounded-full text-sm">
            0
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;

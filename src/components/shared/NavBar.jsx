"use client";

import Link from "next/link";


const NavBar = () => {
    return (
  <nav className="shadow-md bg-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            Tile Gallery
          </Link>
        </div>

        {/* CENTER: Nav Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/all-tiles" className="hover:text-blue-600">
            All Tiles
          </Link>

          <Link href="/my-profile" className="hover:text-blue-600">
            My Profile
          </Link>
        </div>

        {/* RIGHT: Auth Buttons */}
        <div>
            {/* Auth related work is add here later */}
        </div>
      </div>
    </nav>
    );
};

export default NavBar;
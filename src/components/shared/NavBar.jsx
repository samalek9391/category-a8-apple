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
            Tiles Gallery
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
        <div className="flex gap-4">
            <button className="btn bg-blue-600 text-white rounded-lg "><Link href="/auth/login">Login</Link></button>
            <button className="btn bg-white text-blue-600 border-blue-600 rounded-lg"><Link href="/auth/register">Register</Link></button>
        </div>
      </div>
    </nav>
    );
};

export default NavBar;
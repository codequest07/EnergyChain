"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBarr() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="w-full fixed top-0 z-10  bg-white">
      <header className=" container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl  font-[500] text-black">EnergyChain</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="text-sm lg:text-base text-black">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm lg:text-base text-black">
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm lg:text-base text-black">
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="mt-4 md:hidden">
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-black block py-2"
                onClick={toggleMobileMenu}>
                Features
              </Link>

              <Link
                href="#"
                className="text-black block py-2"
                onClick={toggleMobileMenu}>
                Benefits
              </Link>

              <Link
                href="#"
                className="text-black block py-2"
                onClick={toggleMobileMenu}>
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}

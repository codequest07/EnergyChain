"use client";

import React, { useState } from "react";


import {
  Zap,
  Menu,
  X,
} from "lucide-react";
import Hero2 from "./Hero2";
import Features from "./Features";
import Benefits from "./Benefits";
import GetStarted from "./Get-started";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            <span className="text-xl sm:text-2xl font-bold text-green-800">
              EnergyChain
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#features"
                  className="text-sm lg:text-base text-green-800 hover:text-green-600">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-sm lg:text-base text-green-800 hover:text-green-600">
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#get-started"
                  className="text-sm lg:text-base text-green-800 hover:text-green-600">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-green-800" />
            ) : (
              <Menu className="h-6 w-6 text-green-800" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-green-800 hover:text-green-600 block py-2"
                  onClick={toggleMobileMenu}>
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-green-800 hover:text-green-600 block py-2"
                  onClick={toggleMobileMenu}>
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#get-started"
                  className="text-green-800 hover:text-green-600 block py-2"
                  onClick={toggleMobileMenu}>
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <Hero2 />

        <Features />
        <Benefits />

        <GetStarted />

      
      </main>

      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 inline-block mr-2" />
            <span className="text-xl sm:text-2xl font-bold">EnergyChain</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base hover:text-green-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base hover:text-green-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base hover:text-green-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

"use client";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBarr() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
  <header className="bg-black fixed top-0 w-full z-10 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">DenLink</h1>
      </div>
    </header>
  );
}

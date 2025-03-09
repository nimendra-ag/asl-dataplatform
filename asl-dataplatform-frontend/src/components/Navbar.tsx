'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 flex items-center justify-between" style={{ backgroundColor: "#0062B2" }}>

      {/* Left: Hamburger Menu */}
      <button onClick={() => setIsOpen(!isOpen)} className="text-white">
        <Menu size={24} className="text-white" />
      </button>

      {/* Title */}
      <h1 className="text-white text-lg font-bold flex-1 text-center md:text-center md:ml-4">
        AIESEC SRI LANKA OPS DASHBOARD
      </h1>

      {/* Right: Menu Options (Hidden in Mobile) */}
      <div className="hidden md:flex space-x-4 text-white">
        {/* Additional menu items can be added here */}
      </div>

      {/* Right: Three Dots Menu */}
      <button className="text-white">
        <span className="text-xl">&#8942;</span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-700 p-4 text-white md:hidden">
          {/* Mobile menu items */}
        </div>
      )}
    </nav>
  );
}

import React, { useState } from 'react';
import { Menu, X, Search, Heart, Trees } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <Trees size={28} className="text-primary" />
           <span className="text-xl font-serif font-bold text-primary tracking-wide">AWU TRAVELS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {['Tailored Experiences', 'Destinations', 'Private Rentals', 'About Us', 'Blog & Press', 'Contact Us'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-xs font-semibold uppercase tracking-wider text-gray-600 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <Search size={20} className="text-gray-600 hover:text-primary cursor-pointer" />
          <div className="relative">
            <Heart size={20} className="text-gray-600 hover:text-primary cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t mt-4 p-6 flex flex-col space-y-6 shadow-xl h-screen">
          {['Tailored Experiences', 'Destinations', 'Private Rentals', 'About Us', 'Blog & Press', 'Contact Us'].map((item) => (
            <a 
              key={item} 
              href="#"
              className="text-gray-800 font-medium text-lg border-b border-gray-100 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
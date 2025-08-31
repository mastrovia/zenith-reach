import Image from "next/image";
import React from "react";
import { BsGrid, BsGridFill } from "react-icons/bs";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const Header = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/image/logo.png" alt="Logo" width={100} height={40} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-food-green px-3 py-2 text-sm font-medium transition-colors">
                HOME
              </a>
              <a href="#about" className="text-foreground hover:text-food-green px-3 py-2 text-sm font-medium transition-colors">
                ABOUT US
              </a>
              <a href="#products" className="text-foreground hover:text-food-green px-3 py-2 text-sm font-medium transition-colors">
                PRODUCTS
              </a>
              <a href="#contact" className="text-foreground hover:text-food-green px-3 py-2 text-sm font-medium transition-colors">
                CONTACT US
              </a>
            </div>
          </div>

          <BsGrid className="hidden md:block" size={20} />

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-food-green focus:outline-none focus:text-food-green"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <BsGridFill size={20} /> : <BsGrid size={20} />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass">
            <a href="#home" className="text-foreground hover:text-food-green block px-3 py-2 text-base font-medium">
              HOME
            </a>
            <a href="#about" className="text-foreground hover:text-food-green block px-3 py-2 text-base font-medium">
              ABOUT US
            </a>
            <a href="#products" className="text-foreground hover:text-food-green block px-3 py-2 text-base font-medium">
              PRODUCTS
            </a>
            <a href="#contact" className="text-foreground hover:text-food-green block px-3 py-2 text-base font-medium">
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

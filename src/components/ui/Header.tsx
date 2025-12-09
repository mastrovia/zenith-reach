'use client';

import useScrollPosition from '@/hooks/useScrollPosition';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BsGrid, BsGridFill } from 'react-icons/bs';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const Header = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const pathname = usePathname();
  const { isAtTop } = useScrollPosition();

  return (
    <nav className={`fixed top-0 w-full z-50 ${isAtTop ? '' : 'glass'} transition-all`}>
      <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link className="flex-shrink-0" href="/">
              <Image src="/image/logo.png" alt="Logo" width={100} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`text-foreground hover:text-food-green px-3 py-2 text-sm  transition-colors ${
                  pathname === '/' ? 'text-secondary font-semibold' : 'font-medium'
                }`}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className={`text-foreground hover:text-food-green px-3 py-2 text-sm  transition-colors ${
                  pathname === '/about' ? 'text-secondary font-semibold' : 'font-medium'
                }`}
              >
                ABOUT US
              </Link>
              <Link
                href="/products"
                className={`text-foreground hover:text-food-green px-3 py-2 text-sm  transition-colors ${
                  pathname === '/products' ? 'text-secondary font-semibold' : 'font-medium'
                }`}
              >
                OUR PRODUCTS
              </Link>
              <Link
                href="/contact"
                className={`text-foreground hover:text-food-green px-3 py-2 text-sm transition-colors ${
                  pathname === '/contact' ? 'text-secondary font-semibold' : 'font-medium'
                }`}
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-food-green focus:outline-none focus:text-food-green"
            >
              {isMenuOpen ? <BsGridFill size={20} /> : <BsGrid size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass">
            <Link
              href="/"
              className={`text-foreground hover:text-food-green block px-3 py-2 text-base font-medium ${
                pathname === '/' ? 'text-secondary font-semibold' : 'font-medium'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`text-foreground hover:text-food-green block px-3 py-2 text-base font-medium ${
                pathname === '/about' ? 'text-secondary font-semibold' : 'font-medium'
              }`}
            >
              ABOUT US
            </Link>
            <Link
              href="/products"
              className={`text-foreground hover:text-food-green block px-3 py-2 text-base font-medium ${
                pathname === '/products' ? 'text-secondary font-semibold' : 'font-medium'
              }`}
            >
              OUR PRODUCTS
            </Link>
            <Link
              href="/contact"
              className={`text-foreground hover:text-food-green block px-3 py-2 text-base font-medium ${
                pathname === '/contact' ? 'text-secondary font-semibold' : 'font-medium'
              }`}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Footer = () => {
  const pathname = usePathname();

  const footerLinks1 = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Mission', href: '#our-mission' },
    { label: 'Product Categories', href: '/products' },
    { label: 'Why Choose Us', href: '#why-choose' },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  const footerLinks2 = [
    {
      label: 'Spices',
      href: '#spices',
    },
    {
      label: 'Frozen Products',
      href: '#frozen-products',
    },
    {
      label: 'Dry Products',
      href: '#dry-products',
    },
    {
      label: 'Export Info',
      href: '#export-info',
    },
    {
      label: 'Privacy Policy',
      href: '#privacy-policy',
    },
    { label: 'Quality & Standards', href: '/about' },
  ];
  return (
    <>
      {/* Footer */}
      <footer className="bg-primary relative overflow-hidden">
        <div className="max-w-section mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:justify-center w-full">
          <div className="md:col-span-2 bg-primary py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full mt-12">
              <div className="w-full">
                <ul className="space-y-4">
                  {footerLinks1.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`flex gap-1 text-xl md:text-3xl font-light text-white  hover:opacity-100 transition-opacity ${
                          pathname === link.href ? 'opacity-100' : 'opacity-20'
                        }`}
                      >
                        {pathname === link.href && <MdKeyboardArrowRight />}
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="my-12 hidden lg:block">
                  <p className="text-gray-100 opacity-20 mx-auto text-sm">
                    © Copyright {new Date().getFullYear()} By Zenith Reach. All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="w-full">
                <ul className="space-y-4">
                  {footerLinks2.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xl md:text-3xl font-light text-white opacity-20 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 grid justify-center items-center bg-background relative px-4">
            <div className="lg:hidden absolute left-[-50%] bottom-0 top-0 w-[180vh] bg-background z-0"></div>
            <div className="hidden lg:flex absolute left-[100%] bottom-0 top-0 w-[50vh] bg-background"></div>
            <div className="md:text-right flex flex-col gap-4 items-center my-12 z-1 relative">
              <Image src="/image/logo.png" alt="Logo" width={150} height={40} />
              <div className="text-center">
                <p className="text-xl font-light text-white mb-2">Zenith Reach Exports</p>
                <p className="text-gray-300 font-light mb-4 text-sm leading-6">
                  #15, Trade Zone Industrial Park
                  <br />
                  NH Bypass Road, Kakkanad <br />
                  Ernakulam, Kerala - 682030 <br />
                  India
                </p>
              </div>
              <div className="space-y-2 mb-6 text-center">
                <p className="text-gray-300">
                  Phone <a href="tel:+919876543210">+91 98765 43210</a>
                </p>
                <p className="text-gray-300">
                  Email:
                  <a href="mailto:contact@zenithreach.com">contact@zenithreach.com</a>
                </p>
              </div>
              <div className="flex gap-6">
                <div className="rounded-full size-12 bg-primary flex justify-center items-center text-black">
                  <FaFacebook size={18} />
                </div>
                <div className="rounded-full size-12 bg-primary flex justify-center items-center text-black">
                  <FaInstagram size={18} />
                </div>
                <div className="rounded-full size-12 bg-primary flex justify-center items-center text-black">
                  <FaYoutube size={18} />
                </div>
              </div>
              <div className="my-12 text-center lg:hidden">
                <p className="text-gray-100 opacity-20 mx-auto text-sm">
                  © Copyright {new Date().getFullYear()} By Zenith Reach. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

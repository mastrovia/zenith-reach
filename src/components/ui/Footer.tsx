import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  const footerLinks1 = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Our Mission', href: '#our-mission' },
    { label: 'Product Categories', href: '#product-categories' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Quality & Standards', href: '#quality-standards' },
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
    {
      label: 'Contact',
      href: '#contact',
    },
  ];
  return (
    <>
      {/* Footer */}
      <footer className="bg-primary relative overflow-hidden">
        <div className="max-w-section mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-center w-full">
          <div className="md:col-span-2 bg-primary py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start w-full mt-12">
              <div className="w-full px-10">
                <ul className="space-y-4">
                  {footerLinks1.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-3xl font-light text-white opacity-20 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="my-12">
                  <p className="text-gray-100 opacity-20 mx-auto text-sm">
                    © Copyright {new Date().getFullYear()} By Zenith Reach. All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="w-full px-10">
                <ul className="space-y-4">
                  {footerLinks2.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-3xl font-light text-white opacity-20 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 grid justify-center items-center bg-background relative">
            <div className="absolute left-[100%] bottom-0 top-0 w-[50vh] bg-background"></div>
            <div className="md:text-right flex flex-col gap-4 items-center my-12">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

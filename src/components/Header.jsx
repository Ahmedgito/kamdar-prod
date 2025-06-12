import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { FiX } from 'react-icons/fi';
import { Sling as Hamburger } from 'hamburger-react';
import logo from '../assets/logo.png';

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#projects', label: 'Projects' },
  { href: '#news', label: 'News' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md' : 'bg-black backdrop-blur-md'
      } font-lexend font-light`}
    >
      <nav className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Left: Nav Links (Desktop) */}
          <div className="flex-1 flex justify-start">
            <div className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white text-base font-light hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Hamburger (Mobile) */}
            <div className="md:hidden flex items-center z-[200]">
              <Hamburger toggled={mobileOpen} toggle={setMobileOpen} size={28} color="#fff" label="Show menu" />
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center items-center">
            <img src={logo} alt="Logo" className="w-36 object-contain" />
          </div>

          {/* Right: Contact Button (Desktop) */}
          <div className="flex-1 flex justify-end">
            <a
              href="#contact"
              className="hidden md:inline-block bg-white text-black rounded-md px-6 py-2 font-light shadow hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Dialog
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className="fixed inset-0 z-[100] md:hidden"
      >
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-y-0 left-0 w-64 bg-black bg-opacity-90 p-6 flex flex-col gap-8 shadow-lg transition-transform">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Close menu"
            >
              <FiX />
            </button>
            <img src={logo} alt="Logo" className="w-24 object-contain ml-auto" />
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-lg font-light hover:underline"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="mt-auto bg-white text-black rounded-md px-6 py-2 font-light shadow hover:bg-gray-200 transition"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;

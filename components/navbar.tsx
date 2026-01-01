"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbMenu, TbX } from "react-icons/tb";
import Image from "next/image";
import { Search, ShoppingCartIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/books", label: "Books" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="shadow-lg bg-primaryColor fixed w-full z-12 top-0 left-0">
      <div className="container mx-auto px-5 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-[18px] lg:text-2xl font-headingFont font-semibold transition-colors"
            >
              <Image
                src="/images/tarsleh-logo.png"
                alt="logo"
                height={35}
                width={45}
              />
            </Link>
          </div>

          <div className="hidden lg:flex justify-center items-center space-x-12">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl lg:text-[18px] font-medium transition-colors duration-300 ease-in-out transform hover:-translate-y-0.5 ${isActive ? "text-accentColor" : "text-foreground"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-3">
            <div className="relative">
              {/* Icon */}
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              {/* Input */}
              <input
                type="text"
                placeholder="Search anything..."
                className="
            w-full
            rounded-2xl
            border border-gray-200
            bg-primaryColor
            md:py-3 py-2
            pl-10
            md:pr-16 pr-0
            text-sm
            text-gray-800
            shadow-sm
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-black
          "
              />
            </div>
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-md focus:outline-none focus:ring-2 focus:ring-inset"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <TbX className="size-6" />
                ) : (
                  <TbMenu className="size-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-3 md:px-10 pt-2 pb-3 space-y-1 sm:px-4">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-[18px] font-medium transition-colors ${isActive ? "text-accentColor" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

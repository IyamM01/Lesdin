"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="font-poppins fixed top-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg px-8 py-3 flex justify-between items-center w-[95%] md:w-[85%] z-50">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/image/logo-sekolah.png"
            alt="Logo Sekolah"
            width={52}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="items-center hidden md:flex space-x-8 text-sm font-medium text-[#3C5148]">
          <Link href="/">
            <span className="hover:text-[#678E4D] transition-colors cursor-pointer">
              Beranda
            </span>
          </Link>
          <Link href="/mitra">
            <span className="hover:text-[#678E4D] transition-colors cursor-pointer">
              Mitra
            </span>
          </Link>
          <Link href="/kontak">
            <span className="hover:text-[#678E4D] transition-colors cursor-pointer">
              Kontak
            </span>
          </Link>
          <Link href="/profile">
            <span className="hover:text-[#678E4D] transition-colors cursor-pointer">
              Profile
            </span>
          </Link>
          <Link href="/auth">
            <button className="px-5 py-2 bg-[#3C5148] text-white rounded-full hover:bg-[#678E4D] transition-colors">
              Login
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden p-2 text-[#3C5148] hover:text-[#678E4D] transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Mobile Menu Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />

            {/* Mobile Menu Dropdown */}
            <motion.div
              className="fixed top-24 left-1/2 w-[90%] bg-white rounded-2xl shadow-2xl z-50 md:hidden"
              initial={{
                opacity: 0,
                y: -20,
                x: "-50%",
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                x: "-50%",
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                x: "-50%",
                scale: 0.95,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <nav className="flex flex-col py-6 px-6 space-y-2 text-[#3C5148]">
                {[
                  { href: "/", label: "Beranda" },
                  { href: "/mitra", label: "Mitra" },
                  { href: "/kontak", label: "Kontak" },
                  { href: "/profile", label: "Profile" },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                    }}
                  >
                    <Link href={item.href} onClick={closeMenu}>
                      <span className="block py-3 px-4 hover:bg-gray-50 hover:text-[#678E4D] transition-colors rounded-lg cursor-pointer font-medium">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="pt-2 border-t border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.3,
                  }}
                >
                  <Link href="/auth" onClick={closeMenu}>
                    <motion.button
                      className="w-full px-5 py-3 bg-[#3C5148] text-white rounded-full hover:bg-[#678E4D] transition-colors font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Login
                    </motion.button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

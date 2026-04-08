"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Về GSJ", path: "/about" },
    { name: "Hệ sinh thái", path: "/ecosystem" },
    { name: "Chương trình", path: "/curriculum" },
    { name: "SAT Elite", path: "/sat" },
    { name: "Thành tựu", path: "/achievements" },
    { name: "Đối tác", path: "/partners" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled 
          ? "bg-[#002147]/90 backdrop-blur-xl border-white/10 py-4 shadow-2xl" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B08D28] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-500">
            <span className="material-symbols-outlined text-2xl">school</span>
          </div>
          <div>
            <h1 className="text-white text-2xl font-black font-serif tracking-tight leading-none">GSJ</h1>
            <p className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.2em] mt-1">Global Science</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className="text-white/80 hover:text-[#D4AF37] text-sm font-medium tracking-wide transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/register" 
            className="ml-4 bg-white/10 hover:bg-[#D4AF37] text-white px-6 py-2.5 rounded-full text-sm font-semibold border border-white/20 hover:border-[#D4AF37] transition-all duration-300 hover:text-[#002147]"
          >
            Tư vấn ngay
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#001833] border-t border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 text-lg py-2 border-b border-white/5 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-[#D4AF37] text-[#002147] text-center py-4 rounded-xl font-bold uppercase tracking-wider"
              >
                Đăng ký Tư vấn
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

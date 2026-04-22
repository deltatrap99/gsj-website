"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Trang chủ", path: "/" },
    { name: "Về GSJ", path: "/about" },
    { 
      name: "Hệ sinh thái", 
      path: "/research",
      subMenu: [
        { name: "Khoa học Thực hành", path: "/research#thuc-hanh" },
        { name: "Kỳ thi Chuẩn hoá", path: "/research#chuan-hoa" },
        { name: "Dự án Nghiên cứu", path: "/research#nghien-cuu" },
        { name: "Thực tập & Du học", path: "/research#du-hoc" }
      ]
    },
    { name: "Hành trình tự hào", path: "/achievements" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-100" 
          : "bg-white py-5 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img 
            src="https://gsj.edu.vn/wp-content/uploads/2023/04/logo-GSJ-02.jpg" 
            alt="Global Science Journey" 
            className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <div key={link.path} className="relative group py-4">
              <Link 
                href={link.path}
                onClick={link.subMenu ? (e: React.MouseEvent) => e.preventDefault() : undefined}
                className="flex items-center gap-1 text-[#0A2B70] hover:text-[#0047F6] text-[15px] font-bold tracking-wide transition-colors relative"
              >
                {link.name}
                {link.subMenu && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0047F6] rounded-full group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Dropdown Menu */}
              {link.subMenu && (
                <div className="absolute top-full left-[-1rem] pt-2 w-64 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,30,120,0.12)] border border-gray-100 py-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    <div className="flex flex-col">
                      {link.subMenu.map((sub, i) => (
                         <Link 
                           key={i} 
                           href={sub.path} 
                           className="px-6 py-3.5 font-bold text-gray-600 hover:text-[#0047F6] hover:bg-[#F4F7FF] transition-all flex items-center gap-3 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0047F6] before:rounded-r-full before:opacity-0 hover:before:opacity-100 border-b border-gray-50 last:border-0"
                         >
                           {sub.name}
                         </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <Link 
            href="/register" 
            className="ml-3 bg-[#0047F6] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#0047F6]/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0047F6]/30 hover:bg-[#0A2B70] transition-all duration-300 flex items-center gap-2"
          >
            <Phone size={14} />
            Đăng ký Tư vấn
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="lg:hidden text-[#0A2B70] p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-1">
              {links.map((link) => (
                <div key={link.path} className="flex flex-col">
                   <div 
                     className="flex items-center justify-between py-3 border-b border-gray-100"
                     onClick={() => {
                        if (link.subMenu) {
                          setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name);
                        } else {
                          setMobileMenuOpen(false);
                        }
                     }}
                   >
                     <Link 
                       href={link.path}
                       onClick={(e) => { if (link.subMenu) e.preventDefault(); }}
                       className="text-[#0A2B70] text-lg font-bold tracking-wide hover:text-[#0047F6] transition-all flex-1"
                     >
                       {link.name}
                     </Link>
                     {link.subMenu && (
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openMobileDropdown === link.name ? '-rotate-180 text-[#0047F6]' : ''}`} />
                     )}
                   </div>
                   
                   {/* Mobile Submenu Accordion */}
                   <AnimatePresence>
                     {link.subMenu && openMobileDropdown === link.name && (
                       <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-1 border-b border-gray-100 bg-gray-50/50"
                       >
                          {link.subMenu.map((sub, i) => (
                             <Link key={i} href={sub.path} onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-semibold py-3 hover:text-[#0047F6] text-sm flex items-center gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-[#0047F6]"></div> {sub.name}
                             </Link>
                          ))}
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              ))}
              <Link 
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 bg-[#0047F6] text-white text-center py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Đăng ký Tư vấn
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

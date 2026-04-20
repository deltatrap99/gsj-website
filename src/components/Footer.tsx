"use client";

import Link from "next/link";
import { Globe2, ChevronRight, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020b1a] text-white pt-24 pb-10 px-6 relative overflow-hidden border-t-4 border-[#0047F6]">
      {/* Background Ornaments for that "phá cách" feel */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0047F6] opacity-[0.03] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400 opacity-[0.02] rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      
      {/* Huge Watermark Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 text-[20vw] font-black text-white/[0.02] tracking-tighter pointer-events-none whitespace-nowrap">
        GLOBAL
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 md:gap-8 relative z-10">
        
        {/* Brand Column */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 space-y-8">
          <div className="bg-white px-5 py-3 rounded-[1rem] inline-block shadow-lg shadow-white/5 border border-white/20">
             <img src="https://gsj.edu.vn/wp-content/uploads/2023/04/logo-GSJ-02.jpg" alt="GSJ Logo" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-gray-400 leading-relaxed text-[16px] font-medium max-w-sm">
            Nơi dung dưỡng tư duy học thuật và khai phóng tiềm năng lãnh đạo. Kiến tạo lộ trình vững chắc đưa thế hệ trẻ Việt Nam vươn ra biển lớn toàn cầu.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#0047F6] hover:text-white hover:border-transparent transition-all duration-300 group">
               <svg className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#0047F6] hover:text-white hover:border-transparent transition-all duration-300 group">
               <svg className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#0047F6] hover:text-white hover:border-transparent transition-all duration-300 group"><Globe2 size={20} className="group-hover:scale-110 transition-transform"/></a>
          </div>
        </div>
        
        {/* Quick Links Nav */}
        <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-6 mt-2">
          <h4 className="font-black text-[13px] mb-8 text-white uppercase tracking-widest flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span> KHÁM PHÁ
          </h4>
          <ul className="space-y-5">
            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center group font-medium"><span className="w-0 overflow-hidden group-hover:w-5 transition-all text-[#0047F6]"><ChevronRight size={18}/></span> Trang chủ</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center group font-medium"><span className="w-0 overflow-hidden group-hover:w-5 transition-all text-[#0047F6]"><ChevronRight size={18}/></span> Về GSJ</Link></li>
            <li><Link href="/research" className="text-gray-400 hover:text-white transition-colors flex items-center group font-medium"><span className="w-0 overflow-hidden group-hover:w-5 transition-all text-[#0047F6]"><ChevronRight size={18}/></span> Hệ sinh thái</Link></li>
            <li><Link href="/achievements" className="text-gray-400 hover:text-white transition-colors flex items-center group font-medium"><span className="w-0 overflow-hidden group-hover:w-5 transition-all text-[#0047F6]"><ChevronRight size={18}/></span> Hành trình tự hào</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-12 md:col-span-4 lg:col-span-4 mt-2">
          <h4 className="font-black text-[13px] mb-8 text-white uppercase tracking-widest flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-[#0047F6] shadow-[0_0_10px_rgba(0,71,246,0.8)]"></span> LIÊN HỆ
          </h4>
          <ul className="space-y-6 text-gray-400 text-[15px]">
            <li className="flex items-start gap-5 hover:text-white transition-colors cursor-default group">
              <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-[#0047F6]/20 group-hover:border-[#0047F6]/30 transition-colors">
                 <MapPin size={20} className="text-[#0047F6]" />
              </div>
              <span className="pt-1.5 leading-relaxed font-medium">Sảnh A - Tòa Imperia Garden, 203 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</span>
            </li>
            <li className="flex items-center gap-5 hover:text-white transition-colors group">
              <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-[#0047F6]/20 group-hover:border-[#0047F6]/30 transition-colors">
                 <Phone size={20} className="text-[#0047F6]" />
              </div>
              <a href="tel:0327326655" className="font-bold text-xl pt-0.5 tracking-wide">0327.326.655</a>
            </li>
            <li className="flex items-center gap-5 hover:text-white transition-colors group">
              <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-[#0047F6]/20 group-hover:border-[#0047F6]/30 transition-colors">
                 <Mail size={20} className="text-[#0047F6]" />
              </div>
              <a href="mailto:info@gsj.edu.vn" className="font-medium pt-0.5 text-[16px]">info@gsj.edu.vn</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[13px] relative z-10 font-medium">
        <p>© {new Date().getFullYear()} Global Science Journey. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <a href="#" className="flex items-center gap-1.5 text-[#0047F6] hover:text-white transition-colors hover:underline underline-offset-4 bg-[#0047F6]/10 px-3 py-1 rounded-full">GSJ Portal <ArrowUpRight size={14}/></a>
        </div>
      </div>
    </footer>
  );
}

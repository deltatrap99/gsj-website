"use client";

import Link from "next/link";
import { Globe2, Award, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#001020] text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#D4AF37] flex items-center justify-center text-[#001020]">
              <span className="material-symbols-outlined">school</span>
            </div>
            <span className="text-2xl font-black font-serif text-white">GSJ</span>
          </div>
          <p className="text-white/50 leading-relaxed text-sm">
            Kiến tạo thế hệ lãnh đạo toàn cầu với nền tảng khoa học, tư duy logic và kỹ năng thực chiến chuẩn quốc tế.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#001020] transition-colors"><Globe2 size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#001020] transition-colors"><Award size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 font-serif text-[#D4AF37]">Hệ sinh thái</h4>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><Link href="/research" className="hover:text-white transition-colors">Nghiên cứu KHKT</Link></li>
            <li><Link href="/curriculum" className="hover:text-white transition-colors">Practical STEM</Link></li>
            <li><Link href="/sat" className="hover:text-white transition-colors">SAT Elite 1500+</Link></li>
            <li><Link href="/study-abroad" className="hover:text-white transition-colors">Chiến lược Du học</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 font-serif text-[#D4AF37]">Trụ sở GSJ</h4>
          <ul className="space-y-4 text-white/50 text-sm font-sans">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#D4AF37] text-lg">location_on</span>
              <span>Tòa nhà ITP, Đại học Quốc gia TP.HCM</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#D4AF37] text-lg">call</span>
              <span>+84 (08) 9999 8888</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#D4AF37] text-lg">mail</span>
              <span>admissions@gsj.edu.vn</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 font-serif text-[#D4AF37]">Nhận Bản Tin</h4>
          <p className="text-white/50 text-sm mb-4">Cập nhật thông tin học bổng & dự án nghiên cứu mới nhất.</p>
          <div className="flex bg-white/5 border border-white/10 rounded-lg overflow-hidden focus-within:border-[#D4AF37] transition-colors">
            <input type="email" placeholder="Email của bạn" className="bg-transparent px-4 py-3 text-sm text-white outline-none w-full" />
            <button className="bg-[#D4AF37] text-[#001020] px-4 font-bold"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
        <p>© {new Date().getFullYear()} Global Science Journey. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

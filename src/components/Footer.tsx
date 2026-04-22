"use client";

import Link from "next/link";
import { ChevronRight, ChevronDown, Mail, MapPin, Phone, ArrowUpRight, Home, User, GraduationCap, Star, BookOpen, Clock, ShieldCheck, FlaskConical } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#04153B] text-white pt-20 pb-8 px-6 relative overflow-hidden border-t-4 border-[#0047F6] font-sans">
      {/* Huge Watermark Text GSJ on the right */}
      <div className="absolute -bottom-10 right-0 text-[22vw] font-black text-white/[0.03] tracking-tighter pointer-events-none leading-none select-none z-0">
        GSJ
      </div>
      
      {/* Background world map dots (simulated with CSS pattern or just faint dots) */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-x-12 gap-y-16 relative z-10">
        
        {/* Left Column: Brand & Subscribe */}
        <div className="col-span-12 lg:col-span-4 flex flex-col space-y-8">
          {/* Logo */}
          <div className="bg-white px-5 py-3.5 rounded-2xl inline-block w-fit">
             <img src="https://gsj.edu.vn/wp-content/uploads/2023/04/logo-GSJ-02.jpg" alt="GSJ Logo" className="h-10 w-auto object-contain" />
          </div>
          
          <h2 className="text-[26px] font-black leading-[1.3] text-white/90">
            Nơi ươm mầm tư duy <span className="text-[#0047F6]">khoa học</span> và khai phóng tiềm năng lãnh đạo
          </h2>
          
          <p className="text-[#8B9CBE] leading-relaxed text-[15px] font-medium">
            GSJ kiến tạo lộ trình vững chắc giúp học sinh tự tin chinh phục các trường Đại học Top đầu thế giới và trở thành công dân toàn cầu.
          </p>
          
          {/* Socials */}
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-[#0D2451] flex items-center justify-center text-[#8B9CBE] hover:bg-[#0047F6] hover:text-white transition-all duration-300">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0D2451] flex items-center justify-center text-[#8B9CBE] hover:bg-[#0047F6] hover:text-white transition-all duration-300">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0D2451] flex items-center justify-center text-[#8B9CBE] hover:bg-[#0047F6] hover:text-white transition-all duration-300">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0D2451] flex items-center justify-center text-[#8B9CBE] hover:bg-[#0047F6] hover:text-white transition-all duration-300">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          {/* Subscribe Box */}
          <div className="bg-[#0A1F4D] rounded-2xl p-6 mt-4 border border-white/5 shadow-xl relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0047F6] opacity-20 blur-3xl rounded-full"></div>
            
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#0047F6] flex items-center justify-center shrink-0 shadow-lg shadow-[#0047F6]/30">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-black text-white text-[15px] mb-1">ĐĂNG KÝ NHẬN TIN</h4>
                <p className="text-[13px] text-[#8B9CBE] leading-snug">Nhận thông tin mới nhất về chương trình, sự kiện và học bổng từ GSJ.</p>
              </div>
            </div>
            
            <form className="flex gap-2 relative z-10 mt-5">
              <input 
                type="email" 
                placeholder="Nhập email của bạn" 
                className="flex-1 bg-[#04153B] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-[#4A6296] focus:outline-none focus:border-[#0047F6] transition-colors"
              />
              <button className="bg-[#0047F6] hover:bg-blue-600 text-white px-5 py-3 rounded-xl font-bold text-[14px] transition-colors whitespace-nowrap flex items-center gap-2 shadow-lg shadow-[#0047F6]/20">
                Đăng ký <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Middle Column: Khám Phá */}
        <div className="col-span-12 md:col-span-5 lg:col-span-3 lg:ml-8 mt-2">
          <h4 className="font-black text-[14px] mb-8 text-white uppercase tracking-widest flex items-center gap-3">
             <span className="w-2.5 h-2.5 rounded-full bg-[#FFD966] shadow-[0_0_10px_rgba(255,217,102,0.6)]"></span> KHÁM PHÁ
          </h4>
          <ul className="flex flex-col">
            {[
              { name: "Trang chủ", icon: Home, hasArrow: true },
              { name: "Về GSJ", icon: User, hasArrow: true },
              { name: "Hệ sinh thái", icon: GraduationCap, hasDown: true },
              { name: "Hành trình tự hào", icon: Star, hasArrow: false },
              { name: "Blog", icon: BookOpen, hasArrow: false }
            ].map((item, i) => (
              <li key={i} className="border-b border-white/5 last:border-0">
                <Link href="#" className="py-4 flex items-center justify-between group text-[#8B9CBE] hover:text-white transition-colors font-medium text-[15px]">
                  <div className="flex items-center gap-4">
                    <item.icon size={20} className="text-[#4A6296] group-hover:text-white transition-colors" />
                    <span>{item.name}</span>
                  </div>
                  {item.hasArrow && <ChevronRight size={16} className="text-[#4A6296] group-hover:text-white transition-colors" />}
                  {item.hasDown && <ChevronDown size={16} className="text-[#4A6296] group-hover:text-white transition-colors" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Liên Hệ */}
        <div className="col-span-12 md:col-span-7 lg:col-span-5 mt-2">
          <h4 className="font-black text-[14px] mb-8 text-white uppercase tracking-widest flex items-center gap-3">
             <span className="w-2.5 h-2.5 rounded-full bg-[#0047F6] shadow-[0_0_10px_rgba(0,71,246,0.8)]"></span> LIÊN HỆ
          </h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-5 group">
              <div className="bg-[#0D2451] w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-white/5 transition-colors">
                 <MapPin size={20} className="text-[#8B9CBE] group-hover:text-white transition-colors" />
              </div>
              <span className="pt-1 text-[#8B9CBE] leading-relaxed font-medium text-[15px]">
                Sảnh A – Tòa Imperia Garden,<br />
                203 Nguyễn Huy Tưởng,<br />
                Thanh Xuân, Hà Nội
              </span>
            </li>
            
            <li className="flex items-center gap-5 group">
              <div className="bg-[#0D2451] w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-white/5 transition-colors">
                 <Phone size={20} className="text-[#8B9CBE] group-hover:text-white transition-colors" />
              </div>
              <a href="tel:0327326655" className="font-bold text-[18px] pt-0.5 tracking-wide text-white">0327.326.655</a>
            </li>
            
            <li className="flex items-center gap-5 group">
              <div className="bg-[#0D2451] w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-white/5 transition-colors">
                 <Mail size={20} className="text-[#8B9CBE] group-hover:text-white transition-colors" />
              </div>
              <a href="mailto:info@gsj.edu.vn" className="font-medium pt-0.5 text-[15px] text-[#8B9CBE] hover:text-white transition-colors">info@gsj.edu.vn</a>
            </li>

            <li className="flex items-start gap-5 group">
              <div className="bg-[#0D2451] w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-white/5 transition-colors">
                 <Clock size={20} className="text-[#8B9CBE] group-hover:text-white transition-colors" />
              </div>
              <span className="pt-1 text-[#8B9CBE] leading-relaxed font-medium text-[15px]">
                Thứ 2 – Thứ 7: 8:00 – 17:30<br />
                (Nghỉ Chủ nhật & ngày lễ)
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Trust Badge */}
        <div className="flex items-center gap-4 bg-[#0A1F4D]/50 px-4 py-3 rounded-2xl border border-white/5">
          <ShieldCheck size={32} className="text-[#0047F6]" />
          <div>
            <p className="text-white text-[13px] font-bold">GSJ cam kết bảo mật thông tin</p>
            <p className="text-[#8B9CBE] text-[11px]">Thông tin của bạn được bảo vệ an toàn<br/>và chỉ sử dụng cho mục đích giáo dục.</p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[#8B9CBE] text-[13px] font-medium text-center lg:text-left">
          © {new Date().getFullYear()} Global Science Journey. All rights reserved.
        </p>

        {/* Legal & Portal */}
        <div className="flex items-center gap-6 text-[13px] font-medium">
          <Link href="#" className="text-[#8B9CBE] hover:text-white transition-colors">Chính sách bảo mật</Link>
          <span className="text-[#4A6296]">|</span>
          <Link href="#" className="text-[#8B9CBE] hover:text-white transition-colors">Điều khoản sử dụng</Link>
          <a href="#" className="ml-4 flex items-center gap-2 text-[#0047F6] hover:text-white transition-colors border border-[#0047F6] hover:bg-[#0047F6] hover:border-transparent px-4 py-2 rounded-xl font-bold bg-[#0047F6]/10">
            GSJ Portal <ArrowUpRight size={14}/>
          </a>
        </div>
      </div>
    </footer>
  );
}

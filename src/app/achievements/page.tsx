"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Data
const stats = [
  { label: "1000+", text: "Học viên tham gia hàng năm tại các chương trình." },
  { label: "100+", text: "Lớp Khoa học Tự nhiên tích hợp thực hành." },
  { label: "200+", text: "Học viên tham gia định hướng nghề nghiệp trong nước và quốc tế." },
  { label: "100+", text: "Dự án nghiên cứu khoa học - đổi mới sáng tạo." },
  { label: "50+", text: "Giải thưởng danh giá toàn cầu như WICO, ICPC, iWISE, KIYO, ABS..." }
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-[#F4F7FF] text-gray-800 font-sans selection:bg-[#0047F6]/20 selection:text-[#001955] overflow-x-hidden">
      <Nav />
      
      {/* 1. Header & Stats */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="absolute top-12 right-6 lg:right-20 bg-[#0A2B70] text-white px-5 py-1.5 tracking-widest rounded-[4px] font-bold shadow-md z-20">02</div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 lg:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#0A2B70] uppercase tracking-tight">Hành trình Tự hào <span className="text-[#0047F6]">của GSJ</span></h1>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
                {stats.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="font-black text-2xl text-[#0047F6] shrink-0 w-24">{item.label}</div>
                    <div className="text-[17px] text-[#0A2B70] font-medium leading-relaxed">
                       {item.text}
                    </div>
                  </div>
                ))}
             </motion.div>
             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-4 relative">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070" className="rounded-3xl shadow-[0_20px_50px_rgba(0,16,48,0.15)] border-4 border-white w-full h-[220px] object-cover object-center" alt="GSJ class" />
                <img src="/achievements.png" className="rounded-3xl shadow-[0_20px_50px_rgba(0,16,48,0.15)] border-4 border-white w-full h-[220px] object-cover mt-12" alt="GSJ Award Flags" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Hall of Fame Timeline */}
      <section className="py-20 lg:py-32 bg-[#0047F6] text-white relative shadow-inner">
         <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            {/* Timeline Item 1: July 2025 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex flex-col lg:flex-row gap-12 items-center mb-20 lg:mb-32">
               <div className="lg:w-5/12">
                  <h3 className="text-4xl lg:text-[44px] font-black uppercase mb-6 tracking-wide drop-shadow-md">Tháng 7/2025:</h3>
                  <h4 className="text-xl lg:text-2xl font-bold leading-snug mb-8 opacity-95">Hội nghị Thanh thiếu niên Toàn cầu GYS 2025 - Hà Nội</h4>
                  <ul className="space-y-4">
                     <li className="flex items-center gap-4"><CheckCircle2 className="text-yellow-300 w-6 h-6 shrink-0"/> <span className="font-bold text-lg lg:text-xl">Giải Nhì bảng Senior</span></li>
                     <li className="flex items-center gap-4"><CheckCircle2 className="text-yellow-300 w-6 h-6 shrink-0"/> <span className="font-bold text-lg lg:text-xl">Giải Ba bảng Senior</span></li>
                     <li className="flex items-center gap-4"><CheckCircle2 className="text-yellow-300 w-6 h-6 shrink-0"/> <span className="font-bold text-lg lg:text-xl">Giải Nhì bảng Junior</span></li>
                  </ul>
               </div>
               <div className="lg:w-7/12 grid grid-rows-2 grid-cols-2 gap-4">
                  <div className="h-40 overflow-hidden rounded-[2rem] border-4 border-white/20 shadow-2xl col-span-2"><img src="/achievements.png" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" /></div>
                  <div className="h-40 overflow-hidden rounded-[2rem] border-4 border-white/20 shadow-2xl"><img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
                  <div className="h-40 overflow-hidden rounded-[2rem] border-4 border-white/20 shadow-2xl"><img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
               </div>
            </motion.div>

            {/* Timeline Item 2: August 2024 & Feb 2025 */}
            <div className="grid lg:grid-cols-2 gap-10">
               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-white text-[#0A2B70] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                  <div className="h-56 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-10 bg-[#F4F7FF] flex-1">
                     <h3 className="text-3xl font-black uppercase tracking-wide text-[#0047F6] mb-4">Tháng 8/2024:</h3>
                     <p className="font-bold mb-6 text-[17px]">Olympic Khoa học Quốc tế Hàn Quốc KIYO 2024:</p>
                     <ul className="space-y-2 font-bold text-[15px] opacity-80">
                        <li>- 1 Huy chương Vàng</li>
                        <li>- 1 Huy chương Bạc</li>
                        <li>- 1 Special Award</li>
                     </ul>
                  </div>
               </motion.div>
               <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-[#0A2B70] text-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-2 transition-transform duration-500 border border-white/10">
                  <div className="h-56 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-10 flex-1 relative overflow-hidden">
                     <Trophy className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 rotate-12" />
                     <h3 className="text-3xl font-black uppercase tracking-wide mb-4">Tháng 2/2025:</h3>
                     <p className="font-bold text-[17px] leading-relaxed">Vô địch tại Hội nghị Thanh thiếu niên Toàn cầu GYS 2025 - Indonesia</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 3. Deep Achievements (White Section) */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* WYEF 2025 Block */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-[#0047F6] text-white rounded-[3rem] p-10 lg:p-14 shadow-2xl mb-16 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
               <div className="flex justify-between items-start mb-8 border-b border-white/20 pb-6 relative z-10">
                  <div>
                     <h3 className="text-3xl lg:text-[40px] font-black uppercase tracking-widest mb-2">Tháng 8/2025:</h3>
                     <p className="text-xl font-bold text-yellow-300">Diễn đàn Thanh niên Kinh tế Thế giới WYEF 2025</p>
                  </div>
                  <div className="bg-white text-[#0047F6] font-black px-5 py-2 rounded-lg text-lg shadow-md hidden sm:block">02</div>
               </div>
               <ul className="space-y-3 text-[16px] font-medium opacity-95 columns-1 md:columns-2 gap-12 relative z-10">
                  <li className="flex gap-2"><Trophy className="w-5 h-5 text-yellow-300 shrink-0"/> Huy chương Vàng</li>
                  <li className="flex gap-2"><Star className="w-5 h-5 text-yellow-300 shrink-0"/> Top 1 tất cả các giải chuyên môn</li>
                  <li className="flex gap-2"><Award className="w-5 h-5 text-yellow-300 shrink-0"/> Operational Excellence Award</li>
                  <li className="flex gap-2"><Award className="w-5 h-5 text-yellow-300 shrink-0"/> Best Entrepreneurship Award</li>
                  <li className="flex gap-2"><Award className="w-5 h-5 text-yellow-300 shrink-0"/> Outstanding Tech - Pitch Award</li>
                  <li className="flex gap-2"><Award className="w-5 h-5 text-yellow-300 shrink-0"/> Scalable Marketing Strategy Award</li>
                  <li className="flex gap-2"><Award className="w-5 h-5 text-yellow-300 shrink-0"/> Best Tech Booth Experience</li>
                  <li className="flex gap-2"><Award className="w-5 h-5 text-yellow-300 shrink-0"/> Experimentation Excellence Award</li>
                  <li className="pt-4 font-black text-white text-xl md:col-span-2 block mb-2 mt-4 border-t border-white/10">Giải Nhất cả 3 vòng Roadshow:</li>
                  <li className="pl-7 font-bold">- Roadshow 1 - Top 1 Giải Nhất</li>
                  <li className="pl-7 font-bold">- Roadshow 2 - Top 1 Giải Nhất</li>
                  <li className="pl-7 font-bold">- Roadshow 3 - Top 1 Giải Nhất</li>
               </ul>
            </motion.div>

            {/* Minor Items Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="bg-[#0A2B70] text-white rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-end min-h-[320px] relative overflow-hidden group hover:-translate-y-2 transition-transform">
                  <h3 className="text-[26px] font-black text-yellow-400 mb-3 tracking-wide">Tháng 9/2025:</h3>
                  <p className="font-bold text-[16px] mb-4">Cuộc thi AI JAM US 2025</p>
                  <ul className="text-[15px] font-medium opacity-90 space-y-2">
                     <li>- Giải Nhất Trí tuệ AI</li>
                     <li>- Best Winners Showcase</li>
                  </ul>
                  <Trophy className="absolute top-8 right-8 text-white/5 w-24 h-24 group-hover:scale-125 transition-transform duration-500" />
               </motion.div>
               
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#0A2B70] text-white rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-end min-h-[320px] relative overflow-hidden group hover:-translate-y-2 transition-transform">
                  <h3 className="text-[26px] font-black text-yellow-400 mb-3 tracking-wide">Tháng 10/2025:</h3>
                  <p className="font-bold text-[16px] mb-4">Liên hoan Quốc tế TESLA FEST 2025</p>
                  <ul className="text-[15px] font-medium opacity-90 space-y-2">
                     <li>- 2 Huy chương Vàng</li>
                  </ul>
                  <Medal className="absolute top-8 right-8 text-white/5 w-24 h-24 group-hover:scale-125 transition-transform duration-500" />
               </motion.div>

               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-[#0047F6] text-white rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-end min-h-[320px] relative overflow-hidden group hover:-translate-y-2 transition-transform">
                  <h3 className="text-[26px] font-black text-yellow-400 mb-3 tracking-wide">Tháng 12/2025:</h3>
                  <p className="font-bold text-[16px] mb-4">Cuộc thi Doanh nghiệp ABS toàn cầu</p>
                  <ul className="text-[15px] font-medium opacity-90 space-y-2">
                     <li>- 2 Giài Vàng Senior & Junior</li>
                     <li>- 2 Giài Đồng Senior</li>
                     <li>- 20+ Huy chương khác</li>
                  </ul>
                  <Award className="absolute top-8 right-8 text-white/10 w-24 h-24 group-hover:scale-125 transition-transform duration-500" />
               </motion.div>

               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-[#0A2B70] text-white rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-end min-h-[320px] relative overflow-hidden group hover:-translate-y-2 transition-transform">
                  <h3 className="text-[26px] font-black text-yellow-400 mb-3 tracking-wide">Tháng 1/2026:</h3>
                  <p className="font-bold text-[16px] mb-4">Olympic KHKT & Hội thảo MIT 2026</p>
                  <ul className="text-[15px] font-medium opacity-90 space-y-2">
                     <li>- 4 Giải Vàng Danh giá</li>
                  </ul>
                  <Trophy className="absolute top-8 right-8 text-white/5 w-24 h-24 group-hover:scale-125 transition-transform duration-500" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Grand Finale Banner */}
      <section className="bg-white pb-32">
         <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="rounded-[3rem] overflow-hidden shadow-2xl bg-[#0A2B70] text-white relative min-h-[450px] flex items-center group">
               <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B70] via-[#0A2B70]/60 to-transparent"></div>
               <div className="relative z-10 w-full flex flex-col items-center justify-center text-center p-10 lg:p-20">
                  <span className="text-xl md:text-2xl font-black text-yellow-400 mb-4 tracking-widest drop-shadow-md">TRIỂN LÃM SINH VIÊN SÁNG TẠO QUỐC TẾ</span>
                  <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white uppercase tracking-tight mb-12 drop-shadow-lg">iWISE GLOBAL FINAL 2026 <br className="hidden md:block"/>(DUBAI, UAE)</h2>
                  <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-[16px] lg:text-lg font-bold">
                     <span className="bg-white/20 px-6 py-3 rounded-full border border-white/30 backdrop-blur-md shadow-lg flex items-center gap-2"><Medal className="w-5 h-5 text-yellow-400"/> 4 Huy chương Vàng</span>
                     <span className="bg-white/20 px-6 py-3 rounded-full border border-white/30 backdrop-blur-md shadow-lg flex items-center gap-2"><Medal className="w-5 h-5 text-gray-300"/> 2 Huy chương Bạc</span>
                     <span className="bg-white/20 px-6 py-3 rounded-full border border-white/30 backdrop-blur-md shadow-lg flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400"/> Top 3 STEM</span>
                     <span className="bg-white/20 px-6 py-3 rounded-full border border-white/30 backdrop-blur-md shadow-lg flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400"/> Top 2 iTech</span>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

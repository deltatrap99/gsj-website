"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, CheckCircle2, Users, Globe, BookOpen, FlaskConical, Target, Quote, Compass, Lightbulb, Network, Sprout } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Data
const stats = [
  { icon: Users, label: "1000+", text: "Học viên tham gia hàng năm tại các chương trình." },
  { icon: FlaskConical, label: "100+", text: "Lớp Khoa học Tự nhiên tích hợp thực hành." },
  { icon: Globe, label: "200+", text: "Học viên tham gia định hướng nghề nghiệp trong nước và quốc tế." },
  { icon: Lightbulb, label: "100+", text: "Dự án nghiên cứu khoa học – đổi mới sáng tạo." },
  { icon: Trophy, label: "50+", text: "Giải thưởng danh giá toàn cầu như WICO, ICPC, iWISE, KIYO, ABS..." }
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-[#F4F7FF] text-gray-800 font-sans selection:bg-[#0047F6]/20 selection:text-[#001955] overflow-x-hidden">
      <Nav />
      
      {/* 1. Header & Stats */}
      <section className="relative pt-28 pb-0 lg:pt-36 overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EEF3FF] to-[#E4ECFF]">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0047F6]/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0047F6]/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#0047F6 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            
            {/* Left Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative z-20 pt-4">
              <span className="inline-block px-5 py-2 rounded-full bg-[#0047F6] text-white text-[13px] font-bold uppercase tracking-[0.15em] mb-7 shadow-md">
                Hành trình tự hào
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-[50px] font-black text-[#0A2B70] mb-6 leading-[1.1] tracking-tight uppercase">
                Những dấu ấn<br /><span className="text-[#0047F6]">chúng tôi tự hào</span>
              </h1>

              <p className="text-[15px] text-gray-600 font-medium leading-[1.8] mb-8 max-w-md">
                GSJ không ngừng nỗ lực mang đến những chương trình giáo dục chất lượng và cơ hội phát triển toàn diện cho học sinh Việt Nam.
              </p>

              {/* Stats List */}
              <div className="space-y-4">
                {stats.map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#F0F4FF] border border-[#E0E8FF] flex items-center justify-center shrink-0 group-hover:bg-[#0047F6] group-hover:border-[#0047F6] transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-[#0047F6] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-[22px] font-black text-[#0047F6] shrink-0 w-16">{item.label}</span>
                      <span className="text-[14px] text-gray-600 font-medium leading-snug">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Images */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 relative">
              {/* Blob behind */}
              <div className="absolute -top-6 -right-6 -bottom-6 -left-2 bg-gradient-to-br from-[#D6E4FF] to-[#E8EFFF] rounded-[3rem] rotate-1 hidden lg:block"></div>
              
              <div className="relative z-10">
                {/* Main Image Grid */}
                <div className="grid grid-cols-12 gap-4">
                  {/* Large left image */}
                  <div className="col-span-7 relative">
                    {/* Floating star icon */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FFD966] rounded-2xl flex items-center justify-center shadow-lg z-20 rotate-6">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="rounded-[2rem] overflow-hidden shadow-[0_16px_50px_rgba(0,33,71,0.12)] border-4 border-white aspect-[4/5]">
                      <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070" className="w-full h-full object-cover" alt="GSJ students working together" />
                    </div>
                  </div>

                  {/* Right column: smaller image + quote card */}
                  <div className="col-span-5 flex flex-col gap-4">
                    {/* Small image with offset */}
                    <div className="mt-8 rounded-[2rem] overflow-hidden shadow-[0_16px_50px_rgba(0,33,71,0.12)] border-4 border-white aspect-[4/3]">
                      <img src="/achievements.png" className="w-full h-full object-cover" alt="GSJ Awards" />
                    </div>

                    {/* Floating trophy icon */}
                    <div className="flex justify-center -mt-2 mb-1">
                      <div className="w-11 h-11 bg-[#0047F6] rounded-full flex items-center justify-center shadow-lg">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote Card - spanning full width below images */}
                <div className="mt-4 bg-[#0047F6]/90 backdrop-blur-md rounded-2xl p-5 lg:p-6 shadow-xl">
                  <Quote className="w-7 h-7 text-white/40 fill-white/40 mb-2 rotate-180" />
                  <p className="text-[14px] lg:text-[15px] text-white font-semibold leading-relaxed">
                    &ldquo;Giáo dục định hướng giúp mỗi học sinh nhận ra giá trị bản thân và kiến tạo tương lai.&rdquo;
                  </p>
                  <p className="text-[12px] text-white/60 font-medium mt-2">– GSJ Team</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="relative z-30 max-w-6xl mx-auto px-6 lg:px-10 mt-14 pb-0 lg:-mb-10">
          <div className="bg-white rounded-[2rem] shadow-[0_16px_50px_rgba(0,23,74,0.08)] border border-[#E0E8FF] p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Compass, title: "Định hướng rõ ràng", desc: "Giúp học sinh xác định mục tiêu học tập và nghề nghiệp." },
                { icon: Target, title: "Phát triển toàn diện", desc: "Kết hợp kiến thức, kỹ năng và tư duy thực tiễn." },
                { icon: Network, title: "Mạng lưới toàn cầu", desc: "Kết nối với chuyên gia, trường đại học và tổ chức uy tín thế giới." },
                { icon: Sprout, title: "Tác động bền vững", desc: "Đồng hành cùng thế hệ trẻ kiến tạo giá trị cho cộng đồng và hành tinh." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-11 h-11 rounded-full bg-[#F0F4FF] flex items-center justify-center shrink-0 group-hover:bg-[#0047F6] transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#0047F6] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#0A2B70] mb-1">{item.title}</div>
                    <div className="text-[12px] text-gray-500 font-medium leading-snug">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
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

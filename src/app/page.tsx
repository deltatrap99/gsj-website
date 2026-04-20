"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Quote, ArrowRight, Star, BookOpen, Lightbulb, CheckCircle2, TrendingUp, Users, Target, ShieldCheck, Map, Trophy, Medal, Award, ChevronDown, FlaskConical, Globe, Briefcase, User, Mail, Phone, GraduationCap, MapPin, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const programs = [
    { id: 0, title: "Khoa học Thực hành & Nâng cao", icon: <FlaskConical className="w-5 h-5"/> },
    { id: 1, title: "Kỳ thi Chuẩn hoá", icon: <BookOpen className="w-5 h-5"/> },
    { id: 2, title: "Dự án Nghiên cứu", icon: <Target className="w-5 h-5"/> },
    { id: 3, title: "Thực tập & Du học", icon: <Globe className="w-5 h-5"/> }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#0047F6]/20 selection:text-[#001955] overflow-x-hidden">
      
      {/* 
        Nav component exists globally. Note: Depending on your Nav implementation, 
        it usually has a white background variant. 
      */}
      <Nav />
      
      {/* 1. HERO SECTION (Inspired by American Study) */}
      <section className="relative h-screen min-h-[600px] max-h-[800px] flex items-center pt-20">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/hero-hq.jpg" alt="Đoàn học sinh GSJ check-in tại Australia" className="w-full h-full object-cover object-center" />
          {/* Sophisticated multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/65 to-[#0A1628]/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black text-white uppercase leading-[1.35] mb-6 tracking-tight drop-shadow-2xl">
              Xây dựng chiến lược <br/>trúng tuyển đại học <br className="hidden lg:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-sm">TOP đầu thế giới</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 font-medium mb-10 leading-relaxed">
              Đội ngũ chuyên gia hàng đầu giúp học sinh xây dựng chiến lược toàn diện, làm nổi bật màu sắc cá nhân để trúng tuyển ngôi trường mơ ước và đạt học bổng cao nhất.
            </p>
            <Link href="/register" className="inline-flex items-center gap-2 bg-[#0047F6] hover:bg-[#05297A] text-white px-8 py-4 rounded-[8px] font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
              Tư Vấn 1-1 Cùng Chuyên Gia
            </Link>
          </motion.div>
        </div>

        {/* Dynamic Curved SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[2px]">
          <svg className="relative block w-full h-[80px] md:h-[140px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 V120 H1200 V0 C800,180 400,-60 0,0 Z" fill="#FFFFFF" opacity="0.3" className="translate-y-[-10px]"></path>
            <path d="M0,20 V120 H1200 V20 C750,150 450,-30 0,20 Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </section>

      {/* 2. CÂU CHUYỆN SÁNG LẬP GSJ */}
      <section className="bg-white">
        {/* Top Blue Gradient Part */}
        <div className="bg-gradient-to-br from-[#F4F7FF] via-[#E8EFFF] to-[#D4E2FF] pt-20 pb-16 relative overflow-hidden">
          {/* Number 02 top right */}
          <div className="absolute top-12 right-6 lg:right-20 bg-[#0A2B70] text-white px-5 py-1.5 tracking-widest rounded-[4px] font-bold shadow-md z-20">02</div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="lg:w-6/12 relative z-10">
                <h2 className="text-4xl lg:text-[44px] font-black leading-[1.1] text-[#0A2B70] uppercase mb-10 tracking-tight">
                  Câu chuyện<br/><span className="text-[#0047F6]">Sáng lập GSJ</span>
                </h2>
                <div className="relative pl-10 border-l-4 border-[#0047F6]">
                  <Quote className="absolute left-[-22px] -top-3 w-10 h-10 text-[#0047F6] fill-[#0047F6] transform rotate-180" />
                  <p className="text-[17px] text-[#0A2B70] leading-relaxed font-bold italic mb-5">
                    Là một Kỹ sư Hóa dược và Dược sĩ, với nhiều năm làm việc trong lĩnh vực y tế và từng trải nghiệm môi trường doanh nghiệp trong và Quốc tế, tôi luôn mang trong mình một nỗi trăn trở về việc học của học sinh Việt Nam.
                  </p>
                  <p className="text-[16px] text-[#0A2B70]/80 leading-relaxed font-semibold italic">
                    Môi trường học tập hiện nay vẫn còn khá nặng về lý thuyết. Các em học rất chăm chỉ trong nhiều năm, nhưng lại có ít cơ hội trải nghiệm thực tế để hiểu rõ năng lực của bản thân. Vì vậy, khi đứng trước ngưỡng cửa đại học, nhiều bạn vẫn băn khoăn:<br/>
                    <strong className="text-[#0A2B70] mt-2 block">“Mình thật sự phù hợp với ngành gì?”</strong>
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:w-5/12 flex justify-center relative">
                 {/* Circle shape mimicking the layout */}
                 <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-t from-[#0A2B70]/10 to-transparent shadow-[0_20px_50px_rgba(0,71,246,0.15)] overflow-hidden flex items-end justify-center border-4 border-white group">
                    <img src="/founder.png" className="w-[85%] h-auto object-contain object-bottom relative z-10 -mb-2 group-hover:scale-[1.03] transition-transform duration-500" alt="Cô Đặng Thuý Nga" />
                 </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom White Part */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 relative">
           <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="space-y-6 text-[16px] text-gray-700 font-medium leading-relaxed">
                 <p>
                    Đó không phải là vấn đề của riêng một học sinh, mà là một khoảng trống lớn của giáo dục: học sinh được dạy rất nhiều kiến thức, nhưng lại có quá ít cơ hội trải nghiệm, khám phá năng lực và hiểu thế giới nghề nghiệp thực sự vận hành như thế nào.
                 </p>
                 <p>
                    Từ những trăn trở đó, mình tin rằng giáo dục cần mang đến cho học sinh nhiều hơn những bài học trên lớp - đó phải là những trải nghiệm thực tế giúp các em hiểu bản thân, phát triển tư duy và hình dung rõ con đường tương lai của mình.
                 </p>
                 <p>
                    Niềm tin ấy đã thôi thúc tôi và đội ngũ sáng lập nên Global Science Journey (GSJ) - một hệ sinh thái giáo dục thông qua trải nghiệm trong khoa học, công nghệ, nghiên cứu và kinh doanh.
                 </p>
                 <p>
                    GSJ được xây dựng với mục tiêu sau cuối: Giúp học sinh không chỉ học để đạt điểm số, mà học để hiểu mình và tự tin lựa chọn con đường tương lai.
                 </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col">
                 <div className="relative overflow-hidden hover:-translate-y-1 transition-transform duration-500">
                    <Quote className="absolute right-[-10%] bottom-[-10%] w-48 h-48 text-gray-100 fill-gray-100 z-0" />
                    
                    <div className="relative z-10 space-y-8">
                       <p className="text-[17px] text-gray-800 leading-relaxed font-semibold">
                         Với triết lý <strong className="text-[#0047F6]">Chuyên nghiệp - Thực tiễn - Bền vững</strong>, GSJ mong muốn đồng hành cùng phụ huynh, học sinh trong hành trình quan trọng nhất của giáo dục: giúp mỗi học sinh khám phá tiềm năng thật của mình và bước ra thế giới với sự tự tin và định hướng rõ ràng.
                       </p>

                       <div className="text-right pr-6 mt-8">
                         <h4 className="font-black text-xl text-[#0A2B70] italic">Cô Đặng Thuý Nga</h4>
                         <p className="text-sm text-gray-600 font-bold mt-2">Founder Học viện Sáng tạo Khoa học<br/>Global Science Journey</p>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 3. LÍ DO STRATEGY & FAQ (Accordion Style from American Study) */}
      <section className="py-24 bg-[#F4F7FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-[40px] font-black text-[#0A2B70] uppercase tracking-tight mb-4">
              Vì sao chọn GSJ làm bệ phóng?
            </h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">GSJ là tổ chức giáo dục uy tín nhiều năm kinh nghiệm với đội ngũ giáo viên và chuyên gia hàng đầu.</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="rounded-[2rem] overflow-hidden shadow-2xl h-full min-h-[400px] border border-gray-100 group">
               <img src="/science-class.png" alt="Thực hành" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </motion.div>
             
             <div className="space-y-4">
               {/* Accordion-like list items mapping American Study FAQ style */}
               <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md hover:border-[#0047F6]/30 transition-all cursor-default group">
                 <div className="text-[#0047F6] mt-1 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-6 h-6" /></div>
                 <div>
                    <h4 className="font-bold text-[#0A2B70] text-lg mb-1 group-hover:text-[#0047F6] transition-colors">Quy trình làm việc và những cam kết về chất lượng dịch vụ như thế nào?</h4>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">Định hướng cá nhân hóa lộ trình, đảm bảo đầu ra thành tích Khoa học và năng lực thực tiễn.</p>
                 </div>
               </motion.div>

               <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md hover:border-[#0047F6]/30 transition-all cursor-default group">
                 <div className="text-[#0047F6] mt-1 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-6 h-6" /></div>
                 <div>
                    <h4 className="font-bold text-[#0A2B70] text-lg mb-1 group-hover:text-[#0047F6] transition-colors">Cơ sở vật chất & Môi trường thực hành ra sao?</h4>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">Trang bị phòng Lab tiêu chuẩn viện nghiên cứu, phục vụ tối đa các dự án KHKT từ cấp độ cơ sở đến quốc tế.</p>
                 </div>
               </motion.div>

               <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md hover:border-[#0047F6]/30 transition-all cursor-default group">
                 <div className="text-[#0047F6] mt-1 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-6 h-6" /></div>
                 <div>
                    <h4 className="font-bold text-[#0A2B70] text-lg mb-1 group-hover:text-[#0047F6] transition-colors">Mentor đồng hành có kinh nghiệm không?</h4>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">Đội ngũ mentor là các tiến sĩ, thạc sĩ, du học sinh đạt học bổng toàn phần xuất sắc từ các trường đại học Top đầu.</p>
                 </div>
               </motion.div>
               
               <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md hover:border-[#0047F6]/30 transition-all cursor-default group">
                 <div className="text-[#0047F6] mt-1 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-6 h-6" /></div>
                 <div>
                    <h4 className="font-bold text-[#0A2B70] text-lg mb-1 group-hover:text-[#0047F6] transition-colors">Trung tâm có hỗ trợ tư vấn học bổng và giải pháp tài chính tối ưu cho đi du học không?</h4>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">Hỗ trợ xây dựng hồ sơ năng lực 360 độ kết hợp với kinh nghiệm xin học bổng chuyên sâu, tối ưu hóa mức phí cho học sinh.</p>
                 </div>
               </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. CHƯƠNG TRÌNH ĐÀO TẠO (TABS) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="mb-12 text-center">
            <span className="text-[#0047F6] font-bold tracking-widest uppercase text-sm mb-2 block">Cá nhân hoá & Chuyên sâu</span>
            <h2 className="text-3xl md:text-[40px] font-black tracking-tight text-[#0A2B70] uppercase">
              Chương trình chuyên sâu <span className="text-[#0047F6]">tại GSJ</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
             {programs.map(p => (
               <button key={p.id} onClick={() => setActiveTab(p.id)} className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border ${activeTab === p.id ? 'bg-[#0047F6] text-white border-[#0047F6] shadow-[0_10px_20px_rgba(0,71,246,0.3)] scale-105' : 'bg-white text-gray-600 border-gray-200 hover:border-[#0047F6]/50 hover:text-[#0047F6]'}`}>
                 {p.icon}
                 {p.title}
               </button>
             ))}
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 p-8 lg:p-12 min-h-[450px]">
            {activeTab === 0 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="border-l-4 border-[#0047F6] pl-6 mb-10">
                      <h3 className="text-2xl font-black text-[#0A2B70] uppercase mb-4 leading-tight">Chương trình<br/> Khoa học Thực hành</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">Chương trình tích hợp các lĩnh vực Khoa học Tự nhiên với 100% các buổi học đều có hoạt động thí nghiệm/dự án STEM/DIY, giúp củng cố kiến thức và rèn luyện tư duy.</p>
                    </div>
                    <div className="border-l-4 border-[#0047F6] pl-6">
                      <h3 className="text-2xl font-black text-[#0A2B70] uppercase mb-4 leading-tight">Chương trình Vật lý - Hoá học - Sinh học nâng cao</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">Hệ thống chuyên sâu theo từng lĩnh vực, kết hợp lý thuyết và chuyên đề nâng cao, dự án STEM giúp phát triển năng lực vận dụng vào thực tiễn.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#F4F7FF] p-8 rounded-3xl text-center border border-[#0047F6]/10 shadow-sm">
                      <div className="text-5xl font-black text-[#0047F6] mb-3">100%</div>
                      <div className="text-sm font-bold text-[#0A2B70] leading-snug">Giờ học có hoạt động thực hành</div>
                    </div>
                    <div className="bg-[#F4F7FF] p-8 rounded-3xl text-center border border-[#0047F6]/10 shadow-sm">
                      <div className="text-5xl font-black text-[#0047F6] mb-3">12+</div>
                      <div className="text-sm font-bold text-[#0A2B70] leading-snug">Dự án STEM & DIY mỗi khoá</div>
                    </div>
                    <div className="bg-[#F4F7FF] p-8 rounded-3xl text-center border border-[#0047F6]/10 shadow-sm">
                      <div className="text-5xl font-black text-[#0047F6] mb-3">1:1</div>
                      <div className="text-sm font-bold text-[#0A2B70] leading-snug">Cố vấn học tập định hướng</div>
                    </div>
                    <div className="bg-[#F4F7FF] p-8 rounded-3xl text-center border border-[#0047F6]/10 shadow-sm">
                      <div className="text-5xl font-black text-[#0047F6] mb-3">02</div>
                      <div className="text-sm font-bold text-[#0A2B70] leading-snug">Khung chương trình chuẩn MOET & Cambridge</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-black text-[#0A2B70] uppercase mb-4">Ôn luyện kỳ thi chuẩn hoá Quốc tế</h3>
                  <p className="text-gray-600 font-medium max-w-2xl mx-auto">Tối ưu điểm số - Mở khóa cánh cửa vào các trường Đại học Top đầu thế giới.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#0047F6] hover:shadow-lg transition-all">
                     <h4 className="text-lg font-black text-[#0A2B70] uppercase mb-3">1. Chương trình SAT</h4>
                     <p className="text-[15px] font-medium text-gray-600 leading-relaxed">Ôn luyện SAT theo định dạng mới nhất, tập trung Toán tư duy, Reading & Writing học thuật và chiến thuật tối ưu điểm số.</p>
                   </div>
                   <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#0047F6] hover:shadow-lg transition-all">
                     <h4 className="text-lg font-black text-[#0A2B70] uppercase mb-3">2. Chương trình AP</h4>
                     <p className="text-[15px] font-medium text-gray-600 leading-relaxed">Ôn luyện các môn AP theo chuẩn College Board. Nâng cao ưu thế học thuật khi xét tuyển Đại học Mỹ.</p>
                   </div>
                   <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#0047F6] hover:shadow-lg transition-all">
                     <h4 className="text-lg font-black text-[#0A2B70] uppercase mb-3">3. Chương trình IGCSE</h4>
                     <p className="text-[15px] font-medium text-gray-600 leading-relaxed">Xây dựng nền tảng học thuật chuẩn Cambridge dành cho học sinh THCS và đầu THPT.</p>
                   </div>
                   <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#0047F6] hover:shadow-lg transition-all">
                     <h4 className="text-lg font-black text-[#0A2B70] uppercase mb-3">4. Chương trình A-Level</h4>
                     <p className="text-[15px] font-medium text-gray-600 leading-relaxed">Chương trình Tú tài nâng cao Cambridge. Tạo bước đệm vững chắc chinh phục đại học danh giá.</p>
                   </div>
                </div>
              </motion.div>
            )}

            {activeTab === 2 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="grid lg:grid-cols-5 gap-16">
                  <div className="lg:col-span-2">
                     <h3 className="text-2xl font-black text-[#0A2B70] uppercase mb-8">4 Lĩnh vực <span className="text-[#0047F6]">Đào tạo</span></h3>
                     <ul className="space-y-4">
                       <li className="flex items-center gap-4 bg-[#F4F7FF] py-5 px-6 rounded-2xl border border-[#0047F6]/10 font-bold text-[#0A2B70]"><div className="w-10 h-10 rounded-xl bg-[#0047F6] text-white flex items-center justify-center shrink-0 shadow-md">1</div>Kinh doanh - Kinh tế - Tài chính</li>
                       <li className="flex items-center gap-4 bg-[#FAFAFA] py-5 px-6 rounded-2xl border border-gray-100 font-bold text-[#0A2B70]"><div className="w-10 h-10 rounded-xl bg-[#0A2B70] text-white flex items-center justify-center shrink-0 shadow-md">2</div>Công nghệ - Kỹ thuật</li>
                       <li className="flex items-center gap-4 bg-[#F4F7FF] py-5 px-6 rounded-2xl border border-[#0047F6]/10 font-bold text-[#0A2B70]"><div className="w-10 h-10 rounded-xl bg-[#0047F6] text-white flex items-center justify-center shrink-0 shadow-md">3</div>Khoa học Xã hội</li>
                       <li className="flex items-center gap-4 bg-[#FAFAFA] py-5 px-6 rounded-2xl border border-gray-100 font-bold text-[#0A2B70]"><div className="w-10 h-10 rounded-xl bg-[#0A2B70] text-white flex items-center justify-center shrink-0 shadow-md">4</div>Khoa học Tự nhiên</li>
                     </ul>
                  </div>
                  <div className="lg:col-span-3 lg:pl-10 lg:border-l border-gray-100">
                     <h3 className="text-2xl font-black text-[#0A2B70] uppercase mb-10">Lộ trình <span className="text-[#0047F6]">Học tập</span></h3>
                     <div className="space-y-10 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#0047F6] before:via-[#0A2B70]/20 before:to-transparent">
                        <div className="relative flex items-start">
                          <div className="absolute left-0 w-4 h-4 rounded-full bg-[#0047F6] border-4 border-white shadow-md ring-2 ring-[#0047F6]/20 mt-1.5"></div>
                          <div className="ml-10">
                            <h4 className="font-black text-[#0047F6] uppercase text-sm tracking-widest mb-1">Giai đoạn 1</h4>
                            <h5 className="font-bold text-[#0A2B70] text-lg mb-2">Lập đề cương nghiên cứu</h5>
                            <p className="text-sm font-medium text-gray-600 leading-relaxed">Tra cứu tài liệu quốc tế. Thiết kế đề cương và lập kế hoạch nghiên cứu khoa học bài bản.</p>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="absolute left-0 w-4 h-4 rounded-full bg-[#0047F6] border-4 border-white shadow-md ring-2 ring-[#0047F6]/20 mt-1.5"></div>
                          <div className="ml-10">
                            <h4 className="font-black text-[#0047F6] uppercase text-sm tracking-widest mb-1">Giai đoạn 2</h4>
                            <h5 className="font-bold text-[#0A2B70] text-lg mb-2">Tiến hành thực nghiệm/Triển khai</h5>
                            <p className="text-sm font-medium text-gray-600 leading-relaxed">Thực hiện dự án, thu thập và xử lý số liệu tại các phòng Lab và cơ sở của Đại học Bách Khoa, ĐHKHTN, ĐHQG...</p>
                          </div>
                        </div>
                        <div className="relative flex items-start">
                          <div className="absolute left-0 w-4 h-4 rounded-full bg-[#0047F6] border-4 border-white shadow-md ring-2 ring-[#0047F6]/20 mt-1.5"></div>
                          <div className="ml-10">
                            <h4 className="font-black text-[#0047F6] uppercase text-sm tracking-widest mb-1">Giai đoạn 3</h4>
                            <h5 className="font-bold text-[#0A2B70] text-lg mb-2">Hoàn thiện dự án</h5>
                            <p className="text-sm font-medium text-gray-600 leading-relaxed">Báo cáo trước hội đồng chuyên gia. Hoàn thiện bản thảo tiêu chuẩn để công bố trên tạp chí quốc tế.</p>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 3 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="grid lg:grid-cols-2 gap-12 text-left">
                  <div className="bg-gray-50 p-8 lg:p-10 rounded-[2rem] border border-gray-100 flex flex-col">
                    <h3 className="text-2xl font-black text-[#0A2B70] uppercase mb-4 leading-tight">Chương trình Thực tập <br/><span className="text-[#0047F6]">Chuyên sâu ngành nghề</span></h3>
                    <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-1">Thiết kế dành riêng cho học sinh THPT có định hướng các lĩnh vực: Khoa học Kỹ thuật Công nghệ, Y Sinh, IT, Logistics, Kinh doanh...</p>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <p className="font-bold text-[#0A2B70] mb-2 flex items-center gap-2"><Briefcase className="w-5 h-5 text-[#0047F6]"/> Trải nghiệm thực tế</p>
                      <p className="text-[14px] font-medium text-gray-600 leading-relaxed">Làm việc trực tiếp tại các viện nghiên cứu, trường đại học và doanh nghiệp. Rèn luyện kỹ năng và giải quyết công việc như một chuyên gia thực thụ.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#0047F6] to-[#0A2B70] p-8 lg:p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-black uppercase mb-4 leading-tight">Tư vấn Du học Toàn cầu <br/><span className="text-yellow-400">Úc, Mỹ, Singapore...</span></h3>
                      <p className="text-blue-100 font-medium leading-relaxed mb-8">Lộ trình đồng hành giúp học sinh trưởng thành và chuẩn bị tốt nhất trên hành trình chinh phục các Đại học TOP đầu.</p>
                      <ul className="space-y-5">
                        <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" /> <span className="font-medium text-[15px] leading-snug">Chiến lược hồ sơ cá nhân hóa thể hiện rõ nét bản sắc độc bản.</span></li>
                        <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" /> <span className="font-medium text-[15px] leading-snug">Đội ngũ chuyên gia tinh hoa (Tiến sĩ, Thạc sĩ) trực tiếp hỗ trợ 1:1.</span></li>
                        <li className="flex gap-4 items-start"><CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" /> <span className="font-medium text-[15px] leading-snug">Cam kết đồng hành liên tục không giới hạn đến vòng phỏng vấn cuối.</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
          </div>
        </div>
      </section>

      {/* 5. THÀNH TÍCH QUỐC TẾ (Hành trình Tự hào) */}
      <section className="py-24 bg-[#FAFAFA] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-[40px] font-black uppercase tracking-tight text-[#0A2B70] mb-4">
              Hành trình <span className="text-[#0047F6]">Tự hào</span>
            </h2>
            <p className="text-lg font-medium max-w-3xl text-gray-600">Với phương pháp đào tạo hiện đại, học viên GSJ tự tin khẳng định vị thế trên đấu trường Khoa học Kỹ thuật và Sáng tạo quốc tế.</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white border border-gray-100 group">
             <div className="w-full bg-gray-50 flex items-center justify-center p-2 lg:p-4">
               <img src="/achievements.png" className="w-full h-auto object-cover rounded-[2rem] shadow-sm group-hover:scale-[1.01] transition-transform duration-700" alt="Tuyển tập Thành tích Tự hào GSJ" />
             </div>
             
             {/* Text floating below the image or integrated nicely */}
             <div className="bg-white p-8 lg:p-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100">
                <div>
                   <h3 className="text-[#0A2B70] font-black text-2xl md:text-3xl uppercase tracking-tight mb-2">Khẳng định vị thế tri thức <span className="text-[#0047F6]">Quốc tế</span></h3>
                   <p className="text-gray-600 font-medium max-w-3xl text-[15px]">Cơn mưa Huy Chương & Kỷ lục Vô địch tại các đấu trường trí tuệ và học thuật lớn nhất khu vực: Cuộc thi Phát minh Khoa học KIYO (Hàn Quốc), Hội nghị Nhà lãnh đạo trẻ GYS (Indonesia), và Giải lập Kinh doanh ABS (Châu Á).</p>
                </div>
                <div className="shrink-0">
                   <Link href="/achievements" className="inline-flex items-center gap-2 bg-[#F4F7FF] text-[#0047F6] hover:bg-[#0047F6] hover:text-white transition-colors px-6 py-3 rounded-full font-bold text-sm tracking-wide">
                     Xem thêm Giải thưởng <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 6. MẠNG LƯỚI ĐỐI TÁC TOÀN CẦU */}
      <section className="py-24 bg-white relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="mb-12">
            <span className="text-[#0047F6] font-bold tracking-widest uppercase text-sm mb-2 block">Cộng đồng học thuật</span>
            <h2 className="text-3xl md:text-[40px] font-black tracking-tight text-[#0A2B70] uppercase">
              Mạng lưới đối tác <span className="text-[#0047F6]">Toàn cầu</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto mt-4">GSJ tự hào được đồng hành và bảo trợ chuyên môn bởi các trường Đại học, Viện nghiên cứu và Tổ chức giáo dục hàng đầu trong nước & quốc tế.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-12 rounded-[2.5rem] bg-[#FAFAFA]/50 border border-gray-100 p-8 lg:p-12 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

             {/* International Partners */}
             <h3 className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-6">Đại học Quốc tế</h3>
             <div className="flex flex-wrap justify-center gap-4 mb-10">
               {["Nanyang Technological University", "University of Bristol", "The University of Sydney", "Australian National University", "NUS - National University of Singapore", "The University of Melbourne", "UNSW Sydney", "Lincoln University", "Capilano University"].map((partner, i) => (
                 <div key={i} className="bg-white px-5 py-3 rounded-full shadow-sm border border-gray-100 text-[#0A2B70] font-bold text-sm hover:-translate-y-1 hover:shadow-md hover:border-[#0047F6]/30 transition-all cursor-default">{partner}</div>
               ))}
             </div>

             {/* Domestic Partners */}
             <h3 className="font-bold text-gray-500 uppercase tracking-widest text-sm mb-6">Đối tác Trong nước & Doanh Nghiệp</h3>
             <div className="flex flex-wrap justify-center gap-3">
               {["ĐH Ngoại Thương", "ĐH Bách Khoa", "Khối chuyên KHTN (HSGS)", "ĐH Dược Hà Nội", "ĐH KH Tự nhiên", "Trường Nguyễn Siêu", "Hanoi-Amsterdam", "Archimedes", "Newton Grammar", "ĐH Y dược TPHCM", "Phenikaa University", "CVI Pharma"].map((partner, i) => (
                 <div key={i} className="bg-white px-4 py-2.5 rounded-lg shadow-sm border border-gray-100 text-gray-700 font-semibold text-[13px] hover:-translate-y-1 hover:shadow-md hover:border-[#0047F6]/30 transition-all cursor-default">{partner}</div>
               ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* 7. QUICK REGISTRATION FORM ON HOMEPAGE */}
      <section className="py-24 bg-[#F4F7FF] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,30,100,0.05)] border border-gray-100 p-8 lg:p-14">
             <div className="mb-10 text-center">
               <h3 className="text-3xl font-black text-[#0A2B70] uppercase">Đăng ký Tư vấn & Học thử</h3>
               <p className="text-gray-500 font-medium mt-3">Điền thông tin để giữ chỗ nhận ưu đãi trực tiếp từ GSJ.</p>
             </div>

             <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Đăng ký thành công! GSJ sẽ liên hệ lại sớm nhất."); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0A2B70] flex items-center gap-2">
                       <User className="w-4 h-4 text-[#0047F6]" /> Họ tên Phụ huynh *
                    </label>
                    <input required className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-2 focus:ring-[#0047F6]/20 transition-all text-sm p-4 outline-none font-medium text-gray-800" placeholder="Nguyễn Văn A" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0A2B70] flex items-center gap-2">
                       <GraduationCap className="w-4 h-4 text-[#0047F6]" /> Họ tên Học sinh *
                    </label>
                    <input required className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-2 focus:ring-[#0047F6]/20 transition-all text-sm p-4 outline-none font-medium text-gray-800" placeholder="Nguyễn Thu B" type="text" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0A2B70] flex items-center gap-2">
                       <Star className="w-4 h-4 text-[#0047F6]" /> Khối lớp hiện tại
                    </label>
                    <select className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-2 focus:ring-[#0047F6]/20 transition-all text-sm p-4 outline-none font-medium text-gray-800 appearance-none">
                       <option value="">Chọn khối lớp</option>
                       <option>Lớp 6</option>
                       <option>Lớp 7 - Lớp 9</option>
                       <option>THPT (Lớp 10-12)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0A2B70] flex items-center gap-2">
                       <Phone className="w-4 h-4 text-[#0047F6]" /> Số điện thoại *
                    </label>
                    <input required className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-2 focus:ring-[#0047F6]/20 transition-all text-sm p-4 outline-none font-medium text-gray-800" placeholder="090 123 4567" type="tel" />
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-[#0A2B70] text-white py-4.5 rounded-full font-bold text-lg hover:bg-[#0047F6] hover:scale-[1.02] transition-all shadow-lg mt-4 flex items-center justify-center gap-2">
                     Đăng ký Ngay <Sparkles className="w-5 h-5"/>
                  </button>
                </div>
             </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


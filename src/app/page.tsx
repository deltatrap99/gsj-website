"use client";

import React from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowRight, ArrowLeft, Phone, GraduationCap, FlaskConical, BookOpen, Globe, Target, Quote, Gem, Shield, Sprout, Users, PlayCircle, ChevronRight, ShieldCheck, MessageCircle, User, ChevronLeft, Lightbulb, FolderOpen, ChevronDown } from "lucide-react";
import Link from "next/link";

function AnimatedNumber({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f9fd] font-[family-name:var(--font-sans)] selection:bg-[#0047F6]/20 selection:text-[#001955] overflow-x-hidden">
      <Nav />

      {/* ════════════════════════════════════════ */}
      {/*  HERO SECTION & STATS BANNER             */}
      {/* ════════════════════════════════════════ */}
      <div className="relative w-full bg-[#f2f4f8]">
        <section className="relative w-full bg-[#00174A] overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
          {/* Background Map Overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(#6DB3F8 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Text) */}
            <div className="lg:col-span-6 relative z-20 pt-8 lg:pt-0">
              <div className="text-[#6DB3F8] font-medium text-[15px] mb-4">GSJ | Global Science Journey</div>
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black uppercase tracking-tight text-white mb-6 leading-[1.3]">
                <div className="mb-2">KIẾN TẠO LỘ TRÌNH</div>
                <div className="mb-2">TRÚNG TUYỂN ĐẠI HỌC</div>
                <div className="text-[#FFD966] relative inline-block mt-2">
                  TOP ĐẦU TOÀN CẦU
                  {/* Underline accent */}
                  <span className="absolute -bottom-2 left-0 w-[4.5rem] h-[3px] bg-[#6DB3F8] rounded-full"></span>
                </div>
              </h1>
              
              <p className="text-blue-100/90 text-[16px] mb-10 max-w-xl leading-[1.7] mt-8">
                Cá nhân hóa hồ sơ năng lực, tối ưu tỷ lệ trúng tuyển và chinh phục học bổng tại các trường Đại học danh giá cùng đội ngũ chuyên gia học thuật hàng đầu.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
                <Link href="/register" className="px-7 py-3.5 bg-gradient-to-r from-[#0047F6] to-[#0A2B70] text-white rounded-full font-bold text-[15px] shadow-[0_0_20px_rgba(0,71,246,0.4)] hover:shadow-[0_0_30px_rgba(0,71,246,0.6)] transition-all flex items-center gap-2.5 border border-[#6DB3F8]/30">
                  <Users className="w-5 h-5" />
                  Tư vấn 1:1 cùng chuyên gia
                  <ChevronRight className="w-4 h-4" />
                </Link>
                
                <div className="relative group z-50">
                  <button className="flex items-center gap-2.5 text-white font-medium hover:text-[#FFD966] transition-colors group">
                    <PlayCircle className="w-6 h-6 text-white/80 group-hover:text-[#FFD966]" />
                    <span className="text-[15px]">Khám phá chương trình</span>
                    <ChevronDown className="w-4 h-4 text-white/50 group-hover:text-[#FFD966] transition-transform duration-300 group-hover:-rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-4 w-64 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,30,120,0.12)] border border-gray-100 py-2 overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-col">
                        {[
                          { name: "Khoa học Thực hành", path: "/research#thuc-hanh" },
                          { name: "Kỳ thi Chuẩn hoá", path: "/research#chuan-hoa" },
                          { name: "Dự án Nghiên cứu", path: "/research#nghien-cuu" },
                          { name: "Thực tập & Du học", path: "/research#du-hoc" }
                        ].map((sub, i) => (
                           <Link 
                             key={i} 
                             href={sub.path} 
                             className="px-6 py-3.5 font-bold text-gray-600 hover:text-[#0047F6] hover:bg-[#F4F7FF] transition-all flex items-center gap-3 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#0047F6] before:opacity-0 hover:before:opacity-100 border-b border-gray-50 last:border-0"
                           >
                             {sub.name}
                           </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["/science-class.png", "/gsj-camps.png", "/kiyo-2024.png", "/hero-hq.jpg", "/founder.png"].map((src, i) => (
                    <img key={i} alt="" className="w-10 h-10 rounded-full border-2 border-[#00174A] object-cover" src={src} />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#00174A] bg-[#0047F6] flex items-center justify-center text-white font-bold text-[13px] shadow-lg">
                    +500
                  </div>
                </div>
                <span className="text-blue-100/90 text-[14px] font-medium leading-snug">
                  500+ học sinh đã<br />đồng hành cùng GSJ
                </span>
              </div>
            </div>
            
            {/* Right Column (Image) */}
            <div className="lg:col-span-6 relative z-10 hidden lg:block">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#0047F6]/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative w-full max-w-[680px] ml-auto h-[550px] lg:h-[600px] translate-x-4">
                {/* Main image curved container */}
                <div className="absolute inset-0 rounded-l-[100px] overflow-hidden border-y-[3px] border-l-[3px] border-[#0047F6]/50 shadow-[0_0_60px_rgba(0,71,246,0.3)]">
                  <img alt="GSJ Youth Camp" className="w-full h-full object-cover" src="/hero-hq.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00174A]/40 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-12 bg-white rounded-[20px] p-5 pr-8 shadow-[0_20px_40px_rgba(0,23,74,0.3)] flex items-center gap-4 z-30">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0047F6] text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="w-14 h-14 bg-[#4A88FF] text-white rounded-full flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-[#0A2B70] font-black text-[15px] mb-0.5">Lộ trình cá nhân hóa</h4>
                    <p className="text-[#6B7280] text-[12.5px] font-medium leading-snug">
                      Tối ưu hồ sơ – Gia tăng cơ hội<br />trúng tuyển & học bổng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner overlapping */}
        <div className="relative max-w-7xl mx-auto px-8 -mt-16 lg:-mt-24 z-30 mb-8 lg:mb-16">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,23,74,0.12)] p-8 lg:p-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]">
            
            <div className="flex items-center gap-5 px-4 lg:px-6 w-full lg:w-auto justify-center lg:justify-start">
              <div className="w-14 h-14 rounded-full bg-[#F0F4FF] flex items-center justify-center text-[#0047F6] shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <div className="text-[28px] font-black text-[#0047F6] mb-0.5 leading-none"><AnimatedNumber value={500} suffix="+" /></div>
                <div className="text-[14px] text-[#4B5563] font-medium">Học sinh đồng hành</div>
              </div>
            </div>
            
            <div className="flex items-center gap-5 px-4 lg:px-6 w-full lg:w-auto pt-8 lg:pt-0 justify-center lg:justify-start">
              <div className="w-14 h-14 rounded-full bg-[#F0F4FF] flex items-center justify-center text-[#0047F6] shrink-0">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <div className="text-[28px] font-black text-[#0047F6] mb-0.5 leading-none"><AnimatedNumber value={95} suffix="%" /></div>
                <div className="text-[14px] text-[#4B5563] font-medium">Tỷ lệ trúng tuyển mục tiêu</div>
              </div>
            </div>
            
            <div className="flex items-center gap-5 px-4 lg:px-6 w-full lg:w-auto pt-8 lg:pt-0 justify-center lg:justify-start">
              <div className="w-14 h-14 rounded-full bg-[#F0F4FF] flex items-center justify-center text-[#0047F6] shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <div className="text-[28px] font-black text-[#0047F6] mb-0.5 leading-none"><AnimatedNumber value={200} suffix="+" /></div>
                <div className="text-[14px] text-[#4B5563] font-medium">Học bổng đạt được</div>
              </div>
            </div>
            
            <div className="flex items-center gap-5 px-4 lg:px-6 w-full lg:w-auto pt-8 lg:pt-0 justify-center lg:justify-start">
              <div className="w-14 h-14 rounded-full bg-[#F0F4FF] flex items-center justify-center text-[#0047F6] shrink-0">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <div className="text-[28px] font-black text-[#0047F6] mb-0.5 leading-none"><AnimatedNumber value={10} suffix="+" /></div>
                <div className="text-[14px] text-[#4B5563] font-medium">Quốc gia đối tác</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════ */}
      {/*  CÂU CHUYỆN SÁNG LẬP GSJ                */}
      {/* ════════════════════════════════════════ */}
      <section className="py-20 bg-[#f2f4f8]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-[2rem] shadow-[0_12px_48px_-8px_rgba(0,23,74,0.06)] overflow-hidden"
          >
            {/* ── Top Area: Quote + Founder Photo ── */}
            <div className="relative bg-gradient-to-br from-[#f8faff] via-[#f0f4ff] to-[#e8efff] overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-6 right-6 text-[#0047F6]/[0.04] text-[280px] font-black leading-none pointer-events-none select-none" style={{ fontFamily: "serif" }}>"</div>
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0047F6]/[0.03] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Header + Quote */}
                <div className="lg:col-span-7 p-10 lg:p-14 flex flex-col justify-center">
                  {/* Section Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-lg bg-[#0047F6] flex items-center justify-center shadow-sm">
                      <BookOpen className="w-4.5 h-4.5 text-white" />
                    </div>
                    <span className="text-[13px] font-bold text-[#0047F6] uppercase tracking-[0.15em]">Câu chuyện GSJ</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black text-[#0A2B70] leading-[1.15] tracking-tight mb-10">
                    Câu chuyện <span className="text-[#0047F6]">sáng lập GSJ</span>
                  </h2>

                  {/* Quote Block */}
                  <div className="relative pl-8 border-l-4 border-[#0047F6]/30 mb-8">
                    <Quote className="absolute -left-3 -top-1 w-6 h-6 text-[#0047F6] fill-[#0047F6] bg-[#f0f4ff] rounded-full p-0.5" />
                    <p className="text-[16.5px] text-[#374151] italic leading-[1.85] font-medium">
                      Là một Kỹ sư Hóa dược và Dược sĩ, với nhiều năm làm việc trong lĩnh vực y tế và từng trải nghiệm môi trường doanh nghiệp trong và ngoài nước, tôi luôn mang trong mình một nỗi trăn trở về việc học của học sinh Việt Nam.
                    </p>
                  </div>

                  <p className="text-[15.5px] text-[#4B5563] leading-[1.8] mb-8">
                    Môi trường học tập hiện nay vẫn còn khá nặng về lý thuyết. Các em học rất chăm chỉ trong nhiều năm, nhưng lại có ít cơ hội trải nghiệm thực tế để hiểu rõ năng lực của bản thân. Vì vậy, khi đứng trước ngưỡng cửa đại học, nhiều bạn vẫn băn khoăn: <strong className="text-[#0A2B70] font-bold italic">"Mình thật sự phù hợp với ngành gì?"</strong>
                  </p>

                  {/* CTA Button */}
                  <Link href="/about" className="inline-flex items-center gap-3 px-7 py-3.5 bg-white rounded-full border-2 border-[#0047F6]/20 text-[#0047F6] font-bold text-[15px] hover:bg-[#0047F6] hover:text-white hover:border-[#0047F6] transition-all duration-300 shadow-sm hover:shadow-lg w-fit group">
                    <BookOpen className="w-4.5 h-4.5" />
                    Đọc tiếp câu chuyện
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Right: Founder Photo + Info */}
                <div className="lg:col-span-5 relative flex flex-col items-center justify-end pt-10 lg:pt-0">
                  {/* Decorative cross mark */}
                  <div className="absolute top-8 right-12 text-[#0047F6]/20 text-2xl font-bold select-none pointer-events-none hidden lg:block">✦</div>
                  
                  {/* Photo container */}
                  <div className="relative flex-1 flex items-end justify-center w-full">
                    <div className="relative z-10">
                      <img
                        alt="Cô Đặng Thuý Nga - Founder GSJ"
                        className="w-[280px] md:w-[320px] lg:w-[360px] h-auto object-contain object-bottom drop-shadow-2xl"
                        src="/founder.png"
                      />
                    </div>
                    {/* Blue gradient behind photo */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#0047F6]/[0.06] rounded-full blur-3xl pointer-events-none"></div>
                  </div>

                  {/* Name tag - overlaying bottom */}
                  <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-white/50 z-20">
                    <p className="text-[17px] font-black text-[#0A2B70] mb-0.5">Cô Đặng Thúy Nga</p>
                    <p className="text-[12.5px] text-[#6B7280] font-medium leading-snug">
                      Founder Học viện Sáng tạo Khoa học<br />
                      Global Science Journey
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Three Insight Columns ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] border-t border-[#E5E7EB]">
              {/* Insight 1 */}
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.4 }}
                className="p-8 lg:p-10 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#EEF2FF] text-[#0047F6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <p className="text-[14.5px] text-[#4B5563] leading-[1.8] font-medium">
                  Đó không phải là vấn đề của riêng một học sinh, mà là <strong className="text-[#0A2B70] font-bold">khoảng trống lớn của giáo dục:</strong> học sinh được dạy rất nhiều kiến thức, nhưng lại có quá ít cơ hội trải nghiệm, khám phá năng lực và hiểu thế giới nghề nghiệp thực sự vận hành như thế nào.
                </p>
              </motion.div>

              {/* Insight 2 */}
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.4 }}
                className="p-8 lg:p-10 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#EEF2FF] text-[#0047F6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <p className="text-[14.5px] text-[#4B5563] leading-[1.8] font-medium">
                  Từ những trăn trở đó, mình tin rằng giáo dục cần mang đến cho học sinh nhiều hơn những bài học trên lớp – đó phải là những trải nghiệm thực tế giúp các em <strong className="text-[#0A2B70] font-bold">hiểu bản thân, phát triển tư duy và hình dung rõ con đường tương lai của mình.</strong>
                </p>
              </motion.div>

              {/* Insight 3 */}
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.4 }}
                className="p-8 lg:p-10 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#EEF2FF] text-[#0047F6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <p className="text-[14.5px] text-[#4B5563] leading-[1.8] font-medium">
                  Với triết lý <strong className="text-[#0047F6] font-bold">Chuyên nghiệp – Thực tiễn – Bền vững,</strong> GSJ mong muốn đồng hành cùng phụ huynh, học sinh trong hành trình quan trọng nhất của giáo dục: giúp mỗi học sinh khám phá tiềm năng thật của mình và bước ra thế giới với sự tự tin và định hướng rõ ràng.
                </p>
              </motion.div>
            </div>

            {/* ── Bottom Mission Banner ── */}
            <div className="bg-gradient-to-r from-[#0A2B70] to-[#0047F6] px-8 lg:px-14 py-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#FFD966]" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[14px] text-blue-100/80 leading-relaxed">
                  Niềm tin ấy đã thôi thúc tôi và đội ngũ sáng lập nên <strong className="text-white font-bold">Global Science Journey (GSJ)</strong> – một hệ sinh thái giáo dục thông qua trải nghiệm trong khoa học, công nghệ, nghiên cứu và kinh doanh.
                </p>
              </div>
              <div className="shrink-0 hidden lg:block w-px h-8 bg-white/20"></div>
              <div className="shrink-0">
                <p className="text-[13.5px] text-white/90 leading-relaxed max-w-md">
                  <strong className="text-[#FFD966] font-bold">GSJ được xây dựng với mục tiêu sau cùng:</strong> Giúp học sinh không chỉ học để đạt điểm số, <em className="text-white font-semibold">mà học để hiểu mình và tự tin lựa chọn con đường tương lai.</em>
                </p>
              </div>
              <div className="shrink-0 hidden lg:block">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#FFD966]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  GIÁ TRỊ GIÁO DỤC CỦA GSJ              */}
      {/* ════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#0047F6] flex items-center justify-center shadow-sm">
                    <BookOpen className="w-4.5 h-4.5 text-white" />
                  </div>
                  <span className="text-[13px] font-bold text-[#0047F6] uppercase tracking-[0.15em]">Câu chuyện GSJ</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black text-[#0A2B70] leading-[1.15] tracking-tight">
                  Giá trị giáo dục <span className="text-[#0047F6]">của GSJ</span>
                </h2>
              </div>
              <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-[#F0F4FF] items-center justify-center border border-[#E0E8FF]">
                <span className="text-2xl font-black text-[#0047F6]">04</span>
              </div>
            </div>
            <p className="text-[16px] text-[#6B7280] font-medium">Ba trụ cột tạo nên triết lý giáo dục tại GSJ</p>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-[2rem] shadow-[0_12px_48px_-8px_rgba(0,23,74,0.06)] overflow-hidden border border-[#E5E7EB]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Sidebar - Blue Card */}
              <div className="lg:col-span-3 bg-gradient-to-br from-[#0A2B70] to-[#0047F6] p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
                
                <div className="relative z-10">
                  <h3 className="border-l-4 border-white/30 pl-5 text-2xl lg:text-[28px] font-black text-white uppercase tracking-tight leading-[1.2] mb-6">
                    Giá trị<br />Giáo dục<br />
                    <span className="text-[#6DB3F8] text-lg font-bold normal-case tracking-normal block mt-1">của GSJ</span>
                  </h3>
                  <p className="text-[14px] text-blue-200/80 leading-[1.8] font-medium">
                    GSJ xây dựng môi trường học tập hiện đại, nhân văn và truyền cảm hứng, giúp học sinh phát triển toàn diện và trở thành công dân toàn cầu.
                  </p>
                </div>
              </div>

              {/* Right Content - Three Values */}
              <div className="lg:col-span-9">
                {/* Value 1: Chuyên Nghiệp */}
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] border-b border-[#E5E7EB]">
                  <div className="flex items-start justify-center p-6 md:p-8 md:border-r border-[#E5E7EB]">
                    <div className="flex flex-row items-center gap-4 mt-1">
                      <div className="w-12 h-12 rounded-full bg-[#0047F6] text-white flex items-center justify-center text-xl font-black shadow-md">1</div>
                      <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
                        <Shield className="w-6 h-6 text-[#0047F6]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h4 className="text-xl font-black text-[#0047F6] uppercase tracking-wide mb-2">Chuyên nghiệp</h4>
                    <p className="text-[15px] text-[#374151] font-semibold italic mb-4 leading-relaxed">
                      Chất lượng giáo dục của GSJ được xây dựng trên nền tảng chuyên môn vững chắc và chuẩn mực rõ ràng.
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        "Cá nhân hóa lộ trình học tập dựa trên năng lực, sở thích và mục tiêu của từng học sinh.",
                        "Phương pháp giáo dục có cơ sở học thuật, kết hợp tư duy khoa học, nghiên cứu và giải quyết vấn đề.",
                        "Đội ngũ cố vấn và giảng viên có chuyên môn, mentor đồng hành cùng học sinh trong suốt hành trình phát triển.",
                        "Quy trình đào tạo và đánh giá rõ ràng, bài bản. Phụ huynh và học sinh nhìn thấy sự tiến bộ rõ rệt qua từng giai đoạn.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#4B5563] leading-[1.7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0047F6] shrink-0 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Value 2: Thực Tiễn */}
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] border-b border-[#E5E7EB]">
                  <div className="flex items-start justify-center p-6 md:p-8 md:border-r border-[#E5E7EB]">
                    <div className="flex flex-row items-center gap-4 mt-1">
                      <div className="w-12 h-12 rounded-full bg-[#0047F6] text-white flex items-center justify-center text-xl font-black shadow-md">2</div>
                      <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
                        <FlaskConical className="w-6 h-6 text-[#0047F6]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h4 className="text-xl font-black text-[#0047F6] uppercase tracking-wide mb-2">Thực tiễn</h4>
                    <p className="text-[15px] text-[#374151] font-semibold italic mb-4 leading-relaxed">
                      Chúng tôi tin rằng học tập hiệu quả nhất khi kiến thức được gắn với trải nghiệm thực tế.
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        "Học thông qua dự án trong các lĩnh vực khoa học, công nghệ, kinh doanh và xã hội.",
                        "Trải nghiệm môi trường học thuật quốc tế thông qua các chương trình hợp tác và hoạt động học tập toàn cầu.",
                        "Phát triển kỹ năng giải quyết vấn đề, tư duy phản biện và kỹ năng làm việc nhóm, tư duy lãnh đạo.",
                        "Kết nối học tập với định hướng nghề nghiệp, giúp học sinh hiểu rõ con đường tương lai của mình.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#4B5563] leading-[1.7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0047F6] shrink-0 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Value 3: Bền Vững */}
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr]">
                  <div className="flex items-start justify-center p-6 md:p-8 md:border-r border-[#E5E7EB]">
                    <div className="flex flex-row items-center gap-4 mt-1">
                      <div className="w-12 h-12 rounded-full bg-[#0047F6] text-white flex items-center justify-center text-xl font-black shadow-md">3</div>
                      <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
                        <Sprout className="w-6 h-6 text-[#0047F6]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h4 className="text-xl font-black text-[#0047F6] uppercase tracking-wide mb-2">Bền vững</h4>
                    <p className="text-[15px] text-[#374151] font-semibold italic mb-4 leading-relaxed">
                      Chúng tôi hướng tới một nền tảng giáo dục tạo ra giá trị lâu dài cho học sinh và xã hội.
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        "Phát triển năng lực học tập suốt đời, giúp học sinh thích nghi với thế giới luôn thay đổi.",
                        "Nuôi dưỡng tư duy trách nhiệm và đóng góp cho cộng đồng.",
                        "Xây dựng nền tảng học thuật và kỹ năng vững chắc, hỗ trợ học sinh trong hành trình đại học và nghề nghiệp.",
                        "Khuyến khích sự tiến bộ từng ngày, để mỗi học sinh trở thành phiên bản tốt hơn của chính mình.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#4B5563] leading-[1.7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0047F6] shrink-0 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Mission Banner */}
            <div className="bg-gradient-to-r from-[#EEF2FF] to-[#F8FAFF] px-8 lg:px-14 py-6 flex items-start md:items-center gap-5 border-t border-[#E0E8FF]">
              <div className="w-11 h-11 rounded-full bg-[#E0E8FF] flex items-center justify-center shrink-0">
                <Gem className="w-5 h-5 text-[#0047F6]" />
              </div>
              <p className="text-[14px] text-[#4B5563] leading-[1.8] font-medium">
                Với triết lý <strong className="text-[#0047F6] font-bold">Chuyên nghiệp – Thực tiễn – Bền vững,</strong> GSJ mong muốn đồng hành cùng phụ huynh, học sinh trên hành trình khai mở tiềm năng và kiến tạo giá trị, giúp mỗi học sinh hoàn thành tốt liêm năng thật của mình và bước ra thế giới với sự tự tin và định hướng rõ ràng.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  ROADMAP SECTION                         */}
      {/* ════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8FAFF] relative overflow-hidden border-t border-[#E0E8FF]">
        {/* Background graphic elements */}
        <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(#6DB3F8 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#0047F6]/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        <div className="absolute left-0 top-1/2 w-[600px] h-[600px] bg-[#0047F6]/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#E0E8FF] px-4 py-2 rounded-full mb-6 shadow-sm">
                <BookOpen className="w-4 h-4 text-[#0047F6]" />
                <span className="text-[13px] font-bold text-[#0047F6] uppercase tracking-[0.05em]">Lộ trình học tập</span>
              </div>
              
              <h2 className="text-4xl lg:text-[46px] font-black text-[#0A2B70] leading-[1.15] mb-6 tracking-tight">
                Lộ trình<br />học tập <span className="text-[#0047F6]">tại GSJ</span>
              </h2>
              
              <p className="text-[15.5px] text-[#4B5563] leading-[1.7] mb-10">
                Lộ trình cá nhân hóa giúp học sinh xây nền tảng, phát triển chuyên sâu và tối ưu hồ sơ cho hành trình chinh phục các mục tiêu học thuật.
              </p>
              
              <div className="relative w-full aspect-square max-w-[360px] mx-auto lg:mx-0 mb-10">
                {/* Simulated 3D Compass & Cap using available Unsplash image or CSS composition if no perfect image */}
                <div className="absolute inset-0 bg-[#E0E8FF] rounded-full animate-pulse opacity-50 blur-xl"></div>
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=800&fit=crop" alt="Lộ trình học tập" className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-8 border-white" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0047F6] rounded-2xl rotate-12 shadow-xl flex items-center justify-center z-20">
                   <GraduationCap className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <div className="bg-[#EEF2FF] rounded-2xl p-5 border border-white flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-30">
                <div className="w-11 h-11 rounded-full bg-[#0047F6] flex items-center justify-center shrink-0 shadow-md">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-[14.5px] font-bold text-[#0A2B70] mb-1">Đồng hành cùng học sinh trên hành trình học thuật</h4>
                  <p className="text-[13px] text-[#4B5563] font-medium">Cá nhân hoá – Chuyên sâu – Hiệu quả – Bền vững</p>
                </div>
              </div>
            </div>

            {/* Right Column: Timeline */}
            <div className="lg:col-span-7 relative">
              {/* Vertical Line */}
              <div className="absolute left-[5.5px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#0047F6] to-[#6DB3F8]/30 hidden sm:block"></div>
              
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    icon: MessageCircle,
                    title: "Tư vấn cá nhân",
                    desc: "Xác định mục tiêu, năng lực và lộ trình phù hợp."
                  },
                  {
                    num: "02",
                    icon: Lightbulb,
                    title: "Trau dồi kiến thức nền tảng và kỹ năng",
                    desc: "Củng cố kiến thức cốt lõi và kỹ năng học thuật cần thiết."
                  },
                  {
                    num: "03",
                    icon: Target,
                    title: "Đào tạo chuyên sâu cá nhân hoá",
                    desc: "Đẩy mạnh định hướng chuyên sâu theo hồ sơ cá nhân."
                  },
                  {
                    num: "04",
                    icon: FolderOpen,
                    title: "Hoàn thiện portfolio - chiến lược nộp hồ sơ",
                    desc: "Xây dựng portfolio và tối ưu chiến lược ứng tuyển."
                  }
                ].map((step, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-start sm:items-stretch gap-4 sm:gap-6 lg:gap-8 relative z-10 group"
                  >
                    {/* Timeline Node */}
                    <div className="flex items-center gap-4 sm:gap-6 pt-5 shrink-0">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#0047F6] ring-4 ring-[#F8FAFF] relative z-10 hidden sm:block group-hover:scale-125 transition-transform"></div>
                      <span className="text-[36px] lg:text-[44px] font-black text-[#0047F6] w-12 lg:w-16 text-center leading-none tracking-tighter">
                        {step.num}
                      </span>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-3xl p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-[#E0E8FF] flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:gap-6 group-hover:shadow-[0_12px_40px_rgb(0,71,246,0.08)] group-hover:border-[#0047F6]/20 transition-all duration-300">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#F0F4FF] flex items-center justify-center shrink-0 group-hover:bg-[#0047F6] transition-colors duration-300">
                        <step.icon className="w-7 h-7 lg:w-8 lg:h-8 text-[#0047F6] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-[17px] lg:text-[19px] font-black text-[#0A2B70] mb-2">{step.title}</h4>
                        <p className="text-[14px] text-[#4B5563] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA Button */}
              <div className="mt-12 flex justify-center lg:justify-start lg:pl-28">
                <Link href="/register" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0047F6] text-white rounded-full font-bold text-[15px] shadow-[0_8px_20px_rgba(0,71,246,0.3)] hover:shadow-[0_12px_25px_rgba(0,71,246,0.4)] hover:-translate-y-0.5 transition-all group">
                  Nhận tư vấn lộ trình
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#0047F6] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  TESTIMONIALS SECTION                    */}
      {/* ════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8FAFF] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="absolute top-10 left-10 text-[#0047F6]/[0.02] text-[350px] font-serif font-black leading-none pointer-events-none select-none">“</div>
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-white/50 rounded-[100%] blur-[80px] -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm mb-6 border border-[#E0E8FF]">
              <MessageCircle className="w-4 h-4 text-[#0047F6]" />
              <span className="text-[13px] font-bold text-[#0047F6] uppercase tracking-[0.1em]">Câu chuyện GSJ</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black text-[#0A2B70] tracking-tight mb-4">
              Học viên nói gì về chúng tôi
            </h2>
            <p className="text-[16px] text-[#6B7280] font-medium">
              Những chia sẻ chân thực từ học viên đã đồng hành cùng GSJ
            </p>
          </div>

          {/* Student Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: "ĐOÀN NGUYỄN THÙY ANH",
                sub: "Chuyên Hóa, THPT Chuyên Hà Nội – Amsterdam",
                quote: "GSJ đã giúp em tiếp cận với quy trình nghiên cứu chuyên nghiệp và phát triển tư duy phản biện. Em tự tin hơn rất nhiều khi chinh phục các dự án lớn.",
                img: "https://api.dicebear.com/7.x/avataaars/svg?seed=ThuyAnh&backgroundColor=transparent&accessoriesProbability=20",
              },
              {
                name: "TRẦN MAI CHI",
                sub: "University of Wisconsin – Madison (HVS NU)",
                quote: "Quá trình thực nghiệm giúp em rèn luyện tư duy khoa học và khả năng giải quyết vấn đề. Kiến thức và kinh nghiệm từ GSJ là hành trang quan trọng cho tương lai.",
                img: "https://api.dicebear.com/7.x/avataaars/svg?seed=MaiChi&backgroundColor=transparent&glassesProbability=100",
              },
              {
                name: "NGUYỄN ĐĂNG QUANG",
                sub: "Học bổng toàn phần Nanyang Technological University",
                quote: "GSJ không chỉ tạo điều kiện cho em thực hiện dự án nghiên cứu mà còn khơi dậy niềm đam mê khoa học và khát khao đóng góp cho cộng đồng.",
                img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Quang&backgroundColor=transparent&top=shortHair",
              }
            ].map((student, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E0E8FF] flex relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 min-h-[220px]">
                
                {/* Big Quote Mark */}
                <span className="absolute top-4 right-6 text-[70px] text-[#0047F6] font-serif leading-none select-none">”</span>
                
                {/* Left: Character Image Area */}
                <div className="w-[130px] shrink-0 relative flex items-end justify-center pl-2">
                  {/* Blue circle background */}
                  <div className="absolute bottom-4 left-4 w-[100px] h-[100px] bg-[#0047F6] rounded-full group-hover:scale-105 transition-transform duration-500"></div>
                  {/* Character cutout image */}
                  <img src={student.img} alt={student.name} className="relative z-10 w-[120px] h-[170px] object-contain object-bottom drop-shadow-lg group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                {/* Right: Content Area */}
                <div className="flex-1 py-6 pr-6 pl-2 flex flex-col justify-center relative z-10">
                  <div className="flex items-center gap-1.5 text-[#0A2B70] mb-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span className="text-[12px] font-bold">Học sinh</span>
                  </div>
                  
                  <h3 className="text-[15px] font-black text-[#0A2B70] leading-tight mb-1 uppercase pr-4">{student.name}</h3>
                  <p className="text-[12px] font-bold text-[#0047F6] mb-3 leading-snug">{student.sub}</p>
                  
                  <div className="w-8 h-[2px] bg-[#0047F6] mb-3"></div>
                  
                  <p className="text-[12.5px] text-[#4B5563] leading-relaxed">"{student.quote}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Student Pagination */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-[#0047F6] hover:bg-[#F0F4FF] transition-colors border border-[#E0E8FF]">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0047F6]/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#0047F6]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#0047F6]/20"></div>
            </div>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-[#0047F6] hover:bg-[#F0F4FF] transition-colors border border-[#E0E8FF]">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Parent Divider */}
          <div className="flex items-center justify-center gap-4 mb-16 relative">
            <div className="h-px bg-[#0047F6]/30 flex-1 max-w-[150px] relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0047F6]"></div>
            </div>
            <h3 className="text-2xl font-black text-[#0047F6] text-center">Góc nhìn phụ huynh</h3>
            <div className="h-px bg-[#0047F6]/30 flex-1 max-w-[150px] relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0047F6]"></div>
            </div>
          </div>

          {/* Parent Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
             {[
              {
                name: "DƯƠNG QUỲNH HƯƠNG",
                sub: "Phụ huynh học sinh Nguyễn Quỳnh Trang",
                quote: "GSJ là môi trường tuyệt vời giúp con phát triển tư duy độc lập, kỹ năng nghiên cứu và sự tự tin. Con tiến bộ rõ rệt và ngày càng chủ động trong học tập cũng như cuộc sống.",
                img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Huong&backgroundColor=transparent&top=shortHair", 
              },
              {
                name: "DIỆP",
                sub: "Phụ huynh học sinh Trần Mai Chi",
                quote: "Đội ngũ GSJ tận tâm, chuyên nghiệp và luôn đồng hành sát sao. Chúng tôi hoàn toàn yên tâm khi con được định hướng đúng đắn để phát triển toàn diện và bền vững.",
                img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diep&backgroundColor=transparent&top=bob",
              }
            ].map((parent, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E0E8FF] flex relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 min-h-[240px]">
                
                {/* Big Quote Mark */}
                <span className="absolute top-6 right-8 text-[80px] text-[#0047F6] font-serif leading-none select-none">”</span>
                
                {/* Left: Character Image Area */}
                <div className="w-[180px] shrink-0 relative flex items-end justify-center pl-4">
                  {/* Blue circle background */}
                  <div className="absolute bottom-6 left-6 w-[130px] h-[130px] bg-[#0047F6] rounded-full group-hover:scale-105 transition-transform duration-500"></div>
                  {/* Character cutout image */}
                  <img src={parent.img} alt={parent.name} className="relative z-10 w-[150px] h-[200px] object-contain object-bottom drop-shadow-lg group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                {/* Right: Content Area */}
                <div className="flex-1 py-8 pr-8 pl-0 flex flex-col justify-center relative z-10">
                  <div className="flex items-center gap-1.5 text-[#0A2B70] mb-2">
                    <Users className="w-4 h-4" />
                    <span className="text-[13px] font-bold">Phụ huynh</span>
                  </div>
                  
                  <h3 className="text-[17px] font-black text-[#0A2B70] leading-tight mb-1.5 uppercase pr-6">{parent.name}</h3>
                  <p className="text-[13px] font-bold text-[#0047F6] mb-3">{parent.sub}</p>
                  
                  <div className="w-10 h-[2px] bg-[#0047F6] mb-3"></div>
                  
                  <p className="text-[13.5px] text-[#4B5563] leading-relaxed">"{parent.quote}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Parent Pagination */}
          <div className="flex items-center justify-center gap-6">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-[#0047F6] hover:bg-[#F0F4FF] transition-colors border border-[#E0E8FF]">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0047F6]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#0047F6]/20"></div>
            </div>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-[#0047F6] hover:bg-[#F0F4FF] transition-colors border border-[#E0E8FF]">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  PARTNER UNIVERSITIES BAR                */}
      {/* ════════════════════════════════════════ */}
      <section className="bg-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <h4 className="text-xs font-bold text-[#5b4300] uppercase tracking-[0.2em] mb-10 text-center flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#fabd00]/30 block"></span>
            Đối tác &amp; Trường đại học
            <span className="h-px w-8 bg-[#fabd00]/30 block"></span>
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-16 gap-y-8 opacity-70 hover:opacity-100 transition-opacity duration-500">
            {[
              { name: "HARVARD", style: "font-serif font-bold tracking-tighter" },
              { name: "Stanford", style: "font-sans font-black tracking-tight" },
              { name: "MIT", style: "font-mono font-bold tracking-widest" },
              { name: "Berkeley", style: "font-serif font-medium italic" },
              { name: "MELBOURNE", style: "font-sans font-bold uppercase" },
              { name: "NUS", style: "font-sans font-black tracking-tighter" },
              { name: "Sydney", style: "font-serif font-bold" },
              { name: "KAIST", style: "font-sans font-black tracking-widest" },
            ].map((uni, i) => (
              <span key={i} className={`text-xl lg:text-2xl text-[#00174a] ${uni.style}`}>
                {uni.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

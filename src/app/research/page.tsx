"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, BookOpen, Target, Globe, ArrowRight, X, User, Phone, GraduationCap, Sparkles } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";

// --- Ecosystem Hero ---
const EcosystemHero = () => (
  <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#F4F7FF] via-[#E8EFFF] to-[#D4E2FF]">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0047F6]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0047F6]/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/4"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-[6px] bg-[#0047F6] text-white text-[13px] font-bold uppercase tracking-widest mb-6 shadow-md">
          Hệ sinh thái Đào tạo GSJ
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black text-[#0A2B70] mb-8 leading-[1.1] tracking-tight uppercase">
          Khám phá <span className="text-[#0047F6]">Tiềm năng</span> <br />
          Định hình Tương lai
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
          Hệ sinh thái giáo dục toàn diện, khép kín từ đánh giá năng lực, rèn luyện thực hành nghiên cứu, tối ưu điểm chuẩn hóa đến xây dựng chiến lược du học học viện danh giá với học bổng 100%.
        </p>
      </motion.div>
    </div>
  </section>
);

// --- Programs Detailed Section ---
const ProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const programs = [
    {
      id: "thuc-hanh",
      icon: <FlaskConical className="w-8 h-8 text-[#0047F6]"/>,
      title: "Khoa học Thực hành & Nâng cao",
      desc: "Chương trình tích hợp các lĩnh vực Khoa học Tự nhiên với 100% các buổi học đều có hoạt động thí nghiệm/dự án STEM/DIY.",
      details: ["Vật lý, Hoá học, Sinh học nâng cao", "Trải nghiệm trên Hệ thống Lab tiêu chuẩn", "Phát triển tư duy logic và thực chứng"],
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070"
    },
    {
      id: "chuan-hoa",
      icon: <BookOpen className="w-8 h-8 text-[#0047F6]"/>,
      title: "Ôn thi Chuẩn hoá Quốc tế",
      desc: "Chương trình đào tạo giúp tối ưu điểm số các bài thi chuẩn hóa, là điều kiện tiên quyết để cạnh tranh và trúng tuyển đại học danh giá top đầu.",
      details: ["SAT Elite bứt phá 1500+", "AP (Toán, Hóa, Lý, Tự nhiên)", "Chương trình IGCSE & A-Level"],
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070"
    },
    {
      id: "nghien-cuu",
      icon: <Target className="w-8 h-8 text-[#0047F6]"/>,
      title: "Dự án Nghiên cứu & KHKT",
      desc: "Đồng hành cùng học sinh trong quá trình thiết lập và triển khai nghiên cứu thực thụ, hướng tới công bố báo cáo khoa học, thi đấu Olympic/KHKT.",
      details: ["Kỹ năng Literature Review & Methodology", "Mục tiêu Co-author trên Tạp chí Quốc tế", "Cố vấn 1-1 bởi các Thạc sĩ, Tiến sĩ"],
      img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070"
    },
    {
      id: "du-hoc",
      icon: <Globe className="w-8 h-8 text-[#0047F6]"/>,
      title: "Thực tập chuyên sâu & Du học",
      desc: "Chiến lược hồ sơ cá nhân hóa thể hiện nét bản sắc độc bản, định hướng trúng tuyển các trường Top tier tại Mỹ, Úc, Châu Âu, Singapore.",
      details: ["Phát triển ngoại khóa có tính chuyên môn sâu", "Trải nghiệm làm việc tại Doanh nghiệp/Viện", "Chữa Essay chuyên sâu & Chiến thuật Phỏng vấn"],
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
    }
  ];

  return (
    <>
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-32">
            {programs.map((program, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={program.id} className={`flex flex-col lg:flex-row items-center gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Content Side */}
                  <motion.div initial={{ opacity: 0, x: isEven ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2">
                    <div className="w-16 h-16 rounded-[1rem] bg-[#F4F7FF] flex items-center justify-center mb-8 shadow-sm border border-[#0047F6]/10">
                      {program.icon}
                    </div>
                    <h2 className="text-3xl font-black text-[#0A2B70] uppercase mb-4 tracking-tight leading-tight">{program.title}</h2>
                    <p className="text-[17px] text-gray-600 font-medium leading-relaxed mb-8">
                      {program.desc}
                    </p>
                    <ul className="space-y-4 mb-10">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex flex-start gap-4 items-center group cursor-default">
                          <div className="w-2 h-2 rounded-full bg-[#0047F6] group-hover:scale-150 transition-transform"></div>
                          <span className="font-bold text-[#0A2B70] group-hover:text-[#0047F6] transition-colors">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => setSelectedProgram(program)}
                      className="inline-flex items-center gap-2 text-[#0047F6] font-bold tracking-wide hover:gap-3 px-6 py-3 bg-[#F4F7FF] rounded-full hover:bg-[#0047F6] hover:text-white transition-all shadow-sm"
                    >
                      Tìm hiểu lộ trình <ArrowRight className="w-5 h-5"/>
                    </button>
                  </motion.div>

                  {/* Image Side */}
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2 w-full">
                    <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 group relative">
                      <img src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B70]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-[#0A1628]/60 backdrop-blur-md"
            ></motion.div>

            {/* Modal Dialog */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 20, scale: 0.95 }} 
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/50 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-red-500 transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Program Highlight */}
              <div className="w-full md:w-5/12 bg-gradient-to-br from-[#0A2B70] to-[#0047F6] text-white p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                   <img src={selectedProgram.img} alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-white border border-white/30">
                    {selectedProgram.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black uppercase mb-4 leading-tight tracking-tight">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-white/80 font-medium leading-relaxed text-[15px] mb-8">
                    {selectedProgram.desc}
                  </p>
                  <div className="space-y-3">
                    {selectedProgram.details.map((detail: string, i: number) => (
                      <div key={i} className="flex gap-3 items-start">
                        <ArrowRight className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                        <span className="font-semibold text-sm leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Registration Form */}
              <div className="w-full md:w-7/12 p-8 lg:p-12 bg-white overflow-y-auto">
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-[#0A2B70] uppercase">Giữ chỗ ngay</h4>
                  <p className="text-gray-500 font-medium mt-1 text-sm">Điền thông tin bên dưới để chuyên gia của GSJ liên hệ và tư vấn chi tiết về Lộ trình.</p>
                </div>
                
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Đăng ký thành công! Đội ngũ GSJ sẽ sớm liên hệ."); setSelectedProgram(null); }}>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0A2B70] uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#0047F6]" /> Chương trình đã chọn
                    </label>
                    <input readOnly value={selectedProgram.title} className="w-full rounded-xl border-gray-100 bg-[#F4F7FF] text-[#0047F6] font-bold text-sm p-3.5 outline-none cursor-not-allowed" type="text" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0A2B70] uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#0047F6]" /> Tên Phụ huynh
                      </label>
                      <input required className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-1 focus:ring-[#0047F6] transition-all text-sm p-3.5 outline-none font-semibold text-gray-800" placeholder="Nguyễn Văn A" type="text" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0A2B70] uppercase tracking-wider flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#0047F6]" /> Tên Học sinh
                      </label>
                      <input required className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-1 focus:ring-[#0047F6] transition-all text-sm p-3.5 outline-none font-semibold text-gray-800" placeholder="Nguyễn Khắc B" type="text" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0A2B70] uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#0047F6]" /> Số điện thoại liên hệ
                    </label>
                    <input required className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-1 focus:ring-[#0047F6] transition-all text-sm p-3.5 outline-none font-semibold text-gray-800" placeholder="090 123 4567" type="tel" />
                  </div>

                  <button type="submit" className="w-full bg-[#0A2B70] text-white py-4 rounded-xl font-bold text-base hover:bg-[#0047F6] hover:scale-[1.01] transition-all shadow-md mt-4 flex items-center justify-center gap-2">
                    Nhận tư vấn chương trình <Sparkles className="w-4 h-4"/>
                  </button>
                  <p className="text-center text-[11px] text-gray-400 font-medium">Bảo mật thông tin 100%</p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const CTASection = () => (
  <section className="py-24 bg-[#FAFAFA] border-t border-gray-200">
    <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-[#0047F6] to-[#0A2B70] rounded-[3rem] p-12 lg:p-20 shadow-2xl text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0A2B70]/50 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        <h2 className="text-3xl md:text-[40px] font-black uppercase mb-6 leading-tight relative z-10">Bạn sẵn sàng bứt phá<br/><span className="text-yellow-400">giới hạn bản thân?</span></h2>
        <p className="text-lg font-medium text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">Liên hệ ngay với chuyên gia của GSJ để thiết kế lộ trình đào tạo và phát triển thiết kế đo ni đóng giày cho riêng bạn.</p>
        <Link href="/register" className="inline-block relative z-10 bg-white text-[#0A2B70] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:scale-105 hover:shadow-xl transition-all duration-300">
          Đăng ký Tư vấn 1-1
        </Link>
      </motion.div>
    </div>
  </section>
);

export default function ResearchEcosystemPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#0047F6]/20 selection:text-[#001955] overflow-x-hidden">
      <Nav />
      <EcosystemHero />
      <ProgramsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

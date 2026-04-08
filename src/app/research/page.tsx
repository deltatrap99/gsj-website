"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Search, FlaskConical, PenTool } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { staggerContainer, fadeInUp, revealRight } from "@/components/animations";

const ResearchHero = () => (
  <section className="relative min-h-[70vh] flex items-center bg-[#001020] overflow-hidden pt-32 pb-20">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070"
        alt="Scientific Research"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001020]/95 via-[#002147]/80 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-2xl">
        <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 border border-[#D4AF37]/30 backdrop-blur-md">
          Chương Trình Cốt Lõi
        </motion.span>
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black font-serif text-white mb-6 leading-tight">
          Nghiên Cứu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF1C5]">Khoa Học Kỹ Thuật</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-lg text-[#A2B5CC] leading-relaxed mb-10">
          Chương trình Research Mentorship 1:1 độc quyền. Bứt phá giới hạn học thuật THPT bằng việc trực tiếp thực hiện dự án nghiên cứu và công bố quốc tế chuẩn IEEE, Scopus.
        </motion.p>
        <motion.button variants={fadeInUp} className="bg-[#D4AF37] hover:bg-[#E5C563] text-[#002147] px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)]">
          Đăng Ký Đánh Giá Đề Tài
        </motion.button>
      </motion.div>
    </div>
  </section>
);

const MethodologySection = () => {
  const steps = [
    { title: "Literature Review", desc: "Nghiên cứu tổng quan tài liệu để tìm kiếm Research Gap." },
    { title: "Methodology Design", desc: "Thiết kế phương pháp luận khoa học và lập kế hoạch thực nghiệm." },
    { title: "Experiment / Coding", desc: "Triển khai thí nghiệm trong Lab hoặc mô phỏng/code." },
    { title: "Publication", desc: "Viết báo cáo định dạng IMRaD chuẩn bị nộp (submit) hội thảo quốc tế." }
  ];

  return (
    <section className="py-24 bg-[#001833] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black font-serif mb-6 text-white">Lộ Trình Chuẩn Quốc Tế</h2>
          <p className="text-[#A2B5CC] max-w-2xl mx-auto">Vượt qua các rào cản khái niệm, học sinh được tiếp cận quy trình nghiên cứu khoa học chuẩn xác ngay từ cấp 3.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 group"
            >
              <div className="text-6xl font-black font-serif text-white/5 absolute -top-4 right-4 group-hover:text-[#D4AF37]/10 transition-colors">
                0{idx + 1}
              </div>
              <h4 className="text-xl font-bold font-serif mb-4 text-[#D4AF37] relative z-10">{step.title}</h4>
              <p className="text-[#A2B5CC] text-sm leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ResearchPage() {
  return (
    <main className="bg-[#001020] min-h-screen">
      <Nav />
      <ResearchHero />
      <MethodologySection />
      <Footer />
    </main>
  );
}

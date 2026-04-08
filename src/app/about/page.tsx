"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { staggerContainer, fadeInUp, revealLeft, revealRight } from "@/components/animations";

// --- About Hero Section ---
const AboutHero = () => (
  <section className="relative min-h-[60vh] flex items-center bg-[#001020] overflow-hidden pt-32 pb-20">
    <div className="absolute inset-0 z-0 opacity-20">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
        alt="Academic background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001020] via-[#002147]/80 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-3xl mx-auto">
        <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 border border-[#D4AF37]/30">
          Về Global Science Journey
        </motion.span>
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black font-serif text-white mb-6 leading-tight">
          Khát vọng vươn tầm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF1C5]">Trí tuệ Việt</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-lg text-[#A2B5CC] leading-relaxed">
          GSJ là cầu nối tri thức toàn cầu, kiến tạo môi trường học thuật mô phỏng đại học quốc tế ngay tại Việt Nam. Không chỉ là học, mà là nghiên cứu, khám phá và lãnh đạo.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// --- Story Section ---
const StorySection = () => (
  <section className="py-24 bg-white text-[#002147] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={revealLeft} className="flex-1 space-y-8">
          <h2 className="text-4xl font-black font-serif leading-tight">Câu chuyện của chúng tôi</h2>
          <p className="text-lg text-[#556B8D] leading-relaxed pb-4 border-b border-[#002147]/10">
            Năm học 2024, GSJ ra đời với mục tiêu mang những chương trình đào tạo cốt lõi của hệ thống giáo dục Mỹ và Châu Âu về Việt Nam. Chúng tôi tin rằng, tiềm năng của học sinh Việt là vô hạn nếu được rèn luyện trong môi trường tiêu chuẩn học thuật cao nhất.
          </p>
          <div className="space-y-6">
            {[
              { icon: <GraduationCap />, title: "Chất lượng Quốc tế", desc: "Giáo trình chuẩn Cambridge, O-Level và AP." },
              { icon: <Star />, title: "Hệ sinh thái Tinh hoa", desc: "Đội ngũ Mentor 100% đến từ Ivy League, Russell Group." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#001833] text-[#D4AF37] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold font-serif">{item.title}</h4>
                  <p className="text-[#556B8D]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={revealRight} className="flex-1 w-full">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" 
              alt="GSJ Students" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#002147]/20"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Leadership Mentors ---
const MentorsSection = () => {
  const mentors = [
    { name: "Dr. Alexander Vu", role: "Trưởng ban Cố vấn KHKT", univ: "Ph.D MIT", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500" },
    { name: "Sarah Nguyen", role: "Giám đốc Chiến lược Du học", univ: "Alumni Harvard", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500" },
    { name: "David Tran", role: "Chuyên gia ABS & SAT", univ: "Alumni Stanford", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500" }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] text-[#002147]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-serif mb-4">Đội ngũ Học thuật Chuyên Giao</h2>
          <p className="text-[#556B8D] max-w-2xl mx-auto text-lg">Những cá nhân xuất sắc hội tụ để dẫn dắt tài năng trí tuệ tương lai.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#002147]/5 hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="p-8 text-center bg-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#001833] text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  {mentor.univ}
                </div>
                <h3 className="text-2xl font-bold font-serif mb-1 mt-2">{mentor.name}</h3>
                <p className="text-[#556B8D]">{mentor.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="bg-[#001020] min-h-screen">
      <Nav />
      <AboutHero />
      <StorySection />
      <MentorsSection />
      <Footer />
    </main>
  );
}

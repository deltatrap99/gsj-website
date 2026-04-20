"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Target, ShieldCheck, Map, Gem, Users, Star, ArrowRight, Quote } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";

// --- About Hero Section ---
const AboutHero = () => (
  <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-48 overflow-hidden bg-gradient-to-br from-[#F4F7FF] via-[#E8EFFF] to-[#D4E2FF]">
    {/* Background Decorative Elements */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0047F6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0047F6]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-[6px] bg-[#0047F6] text-white text-[13px] font-bold uppercase tracking-widest mb-6 shadow-md">
          Về GSJ
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black text-[#0A2B70] mb-8 leading-[1.1] tracking-tight uppercase">
          Khát vọng vươn tầm <br />
          <span className="text-[#0047F6]">Trí tuệ Việt</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
          GSJ là cầu nối tri thức toàn cầu, kiến tạo môi trường học thuật chuyên nghiệp. Nơi học sinh không chỉ học mà còn nghiên cứu, khám phá và dẫn dắt tương lai.
        </p>
      </motion.div>
    </div>
    
    {/* Image overlapping the bottom */}
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-6xl mx-auto px-6 lg:px-10 mt-12 relative z-20 md:-mb-24">
      <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,33,71,0.15)] border-4 border-white aspect-[21/9] bg-gray-200">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" className="w-full h-full object-cover object-[center_35%]" alt="GSJ Academic Environment" />
      </div>
    </motion.div>
  </section>
);

// --- Story Section ---
const StorySection = () => (
  <section className="py-24 bg-white text-gray-800 overflow-hidden relative md:pt-40">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="lg:w-1/2 w-full space-y-8">
          <h2 className="text-3xl lg:text-[42px] font-black leading-tight text-[#0A2B70] tracking-tight uppercase">Câu chuyện <br/><span className="text-[#0047F6]">của chúng tôi</span></h2>
          <div className="w-20 h-1.5 bg-[#0047F6] rounded-full"></div>
          <p className="text-[17px] text-gray-600 font-medium leading-relaxed">
            GSJ ra đời với mục tiêu mang những chương trình đào tạo cốt lõi của hệ thống giáo dục Mỹ và Châu Âu về Việt Nam. Chúng tôi tin rằng, tiềm năng của học sinh Việt là vô hạn nếu được rèn luyện trong môi trường tiêu chuẩn học thuật cao nhất.
          </p>
          <div className="space-y-6 pt-4">
            {[
              { icon: <Gem className="w-6 h-6" />, title: "Chất lượng Quốc tế", desc: "Giáo trình chuẩn Cambridge, O-Level và AP." },
              { icon: <Users className="w-6 h-6" />, title: "Hệ sinh thái Tinh hoa", desc: "Đội ngũ Mentor đến từ các tổ chức Ivy League, Russell Group hàng đầu." }
            ].map((item, idx) => (
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * idx }} key={idx} className="flex gap-5 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#0047F6]/30 hover:shadow-md transition-all group cursor-default">
                <div className="w-14 h-14 rounded-full bg-[#E8EFFF] text-[#0047F6] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[19px] font-bold text-[#0A2B70] mb-1 group-hover:text-[#0047F6] transition-colors">{item.title}</h4>
                  <p className="text-[15px] font-medium text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="lg:w-1/2 w-full relative">
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070" 
              alt="Học sinh GSJ làm việc nhóm" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B70]/80 via-[#0A2B70]/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10 text-white">
               <Quote className="w-12 h-12 text-white/50 fill-white/50 mb-4 rotate-180" />
               <p className="text-2xl font-bold leading-snug drop-shadow-md">"Giáo dục định hướng giúp mỗi học sinh nhận ra giá trị bản thân và kiến tạo tương lai."</p>
            </div>
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
    <section className="py-24 bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="text-[#0047F6] font-bold tracking-widest uppercase text-sm mb-2 block">Cố vấn chuyên môn</span>
          <h2 className="text-3xl md:text-[40px] font-black text-[#0A2B70] uppercase tracking-tight mb-4">Đội ngũ Học thuật <span className="text-[#0047F6]">Tinh Hoa</span></h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto text-lg">Những cá nhân xuất sắc hội tụ để kiến tạo môi trường học thuật chuẩn mực.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {mentors.map((mentor, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-[#0A2B70] text-white px-4 py-1.5 rounded-[6px] font-bold text-[13px] uppercase tracking-wide shadow-md">
                  {mentor.univ}
                </div>
              </div>
              <div className="p-8 text-center bg-white relative">
                <h3 className="text-[22px] font-black text-[#0A2B70] mb-2 uppercase">{mentor.name}</h3>
                <p className="text-gray-600 font-medium">{mentor.role}</p>
                <div className="mt-6 flex justify-center gap-1 text-[#0047F6]">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                </div>
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
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#0047F6]/20 selection:text-[#001955] overflow-x-hidden">
      <Nav />
      <AboutHero />
      <StorySection />
      <MentorsSection />
      <Footer />
    </main>
  );
}

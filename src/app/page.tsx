"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronRight, 
  BookOpen, Lightbulb, Users, GraduationCap, 
  Award, Globe2, ArrowUpRight, PlayCircle
} from "lucide-react";

// --- Framer Motion Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const revealLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// --- Shared Components ---

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Về GSJ", path: "/about" },
    { name: "Hệ sinh thái", path: "/ecosystem" },
    { name: "Chương trình", path: "/curriculum" },
    { name: "SAT Elite", path: "/sat" },
    { name: "Thành tựu", path: "/achievements" },
    { name: "Đối tác", path: "/partners" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled 
          ? "bg-[#002147]/90 backdrop-blur-xl border-white/10 py-4 shadow-2xl" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B08D28] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-500">
            <span className="material-symbols-outlined text-2xl">school</span>
          </div>
          <div>
            <h1 className="text-white text-2xl font-black font-serif tracking-tight leading-none">GSJ</h1>
            <p className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-[0.2em] mt-1">Global Science</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className="text-white/80 hover:text-[#D4AF37] text-sm font-medium tracking-wide transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/register" 
            className="ml-4 bg-white/10 hover:bg-[#D4AF37] text-white px-6 py-2.5 rounded-full text-sm font-semibold border border-white/20 hover:border-[#D4AF37] transition-all duration-300"
          >
            Tư vấn ngay
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#001833] border-t border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 text-lg py-2 border-b border-white/5 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-[#D4AF37] text-[#002147] text-center py-4 rounded-xl font-bold uppercase tracking-wider"
              >
                Đăng ký Tư vấn
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Footer = () => (
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

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-[#001020] overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" 
            alt="University Campus" 
            
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Navy to Transparent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002147] via-[#002147]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/30 via-transparent to-[#001020]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">Khởi tạo tư duy học thuật</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-white font-serif leading-[1.1] mb-8">
            Khai phá Tiềm năng <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFF1C5]">Trí tuệ Toàn cầu</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 max-w-2xl">
            GSJ là hệ sinh thái giáo dục hàn lâm, kết nối học sinh Việt Nam với tinh hoa khoa học thế giới, trang bị tư duy nghiên cứu, lãnh đạo và kiến tạo hồ sơ học thuật xuất chúng.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
            <Link 
              href="/register" 
              className="bg-[#D4AF37] hover:bg-[#E5C563] text-[#002147] px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              Gia nhập GSJ 
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </Link>
            <Link 
              href="/ecosystem" 
              className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle size={20} className="text-[#D4AF37]" /> Xem chi tiết
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block opacity-30 blur-3xl">
        <div className="w-[600px] h-[600px] bg-[#D4AF37] rounded-full mix-blend-screen translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};

// --- Philosophy Section ---
const PhilosophySection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden text-[#002147]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={revealLeft}
            className="flex-1 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black font-serif text-[#002147] leading-tight">
              Giáo dục Đỉnh cao <br />
              <span className="text-[#D4AF37] italic font-light">The Scholarly Atelier</span>
            </h2>
            <p className="text-lg text-[#556B8D] leading-relaxed">
              Chúng tôi không chỉ truyền đạt kiến thức, mà kiến tạo một môi trường thực nghiệm. Tại GSJ, học sinh không giải đề một cách thụ động, mà trực tiếp viết báo khoa học, lập chiến lược kinh doanh và phát triển các giải pháp phần mềm thực tế.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-[#002147]/10">
              <div>
                <h4 className="text-4xl font-black text-[#D4AF37] mb-2">100%</h4>
                <p className="text-sm font-bold text-[#002147] uppercase tracking-wider">Học sinh làm dự án thực tế</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-[#D4AF37] mb-2">Top 1%</h4>
                <p className="text-sm font-bold text-[#002147] uppercase tracking-wider">Mentor từ Ivy League</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070" 
              alt="Students in Library" 
              
              className="object-cover"
            />
            <div className="absolute inset-0 border-[6px] border-[#D4AF37]/50 rounded-3xl scale-95 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Core Pillars (Ecosystem) ---
const CorePillarsSection = () => {
  const pillars = [
    {
      icon: <BookOpen className="text-white" size={32} />,
      title: "Scientific Research",
      desc: "Lộ trình nghiên cứu khoa học chuyên sâu 1-1 với Tiến sĩ. Đích đến: Công bố bài báo quốc tế (IEEE, Scopus, ISI).",
      bgImg: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070",
      link: "/research"
    },
    {
      icon: <Lightbulb className="text-white" size={32} />,
      title: "Advanced Business School",
      desc: "Huấn luyện giả lập doanh nghiệp và lập kế hoạch chiến lược. Tham gia các cuộc thi kinh doanh quốc tế ASDAN, E-Icon.",
      bgImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
      link: "/abs"
    },
    {
      icon: <Award className="text-white" size={32} />,
      title: "SAT Elite 1500+",
      desc: "Hệ thống IEDS độc quyền. Đội ngũ mentor điểm tuyệt đối thiết kế lộ trình cá nhân hóa, tối ưu hóa điểm số trong thời gian ngắn nhất.",
      bgImg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
      link: "/sat"
    },
    {
      icon: <GraduationCap className="text-white" size={32} />,
      title: "Ivy Study Abroad",
      desc: "Chiến lược tư vấn định hướng toàn diện. Xây dựng hồ sơ học thuật, ngoại khóa sắc bén để chinh phục học bổng toàn phần.",
      bgImg: "https://images.unsplash.com/photo-1606761568499-6d2451b08c66?q=80&w=1974",
      link: "/study-abroad"
    }
  ];

  return (
    <section className="py-32 bg-[#001833] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black font-serif text-white mb-6">Hệ Sinh Thái Toàn Diện</h2>
          <p className="text-[#A2B5CC] text-lg">Bốn trụ cột vững chắc kiến tạo nên hồ sơ xuất chúng, đáp ứng tiêu chuẩn khắt khe nhất của các đại học Top 50 toàn cầu.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
            >
              {/* Background */}
              <div className="absolute inset-0">
                <img src={pillar.bgImg} alt={pillar.title} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#001833]/80 group-hover:bg-[#002147]/70 transition-colors duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full p-10 flex flex-col justify-end z-10 w-full bg-gradient-to-t from-[#001020] via-transparent">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 text-[#D4AF37]">
                  {pillar.icon}
                </div>
                <h3 className="text-3xl font-bold font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{pillar.title}</h3>
                <p className="text-[#A2B5CC] max-w-md mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {pillar.desc}
                </p>
                <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 uppercase tracking-widest">
                  Khám phá <ArrowRightIcon className="w-4 h-4" />
                </div>
              </div>
              {/* Overlay link */}
              <Link href={pillar.link} className="absolute inset-0 z-20"><span className="sr-only">{pillar.title}</span></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const ArrowRightIcon = ({ className }: { className?: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>

// --- CTA Section ---
const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#D4AF37] to-[#B08D28] text-[#002147] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black font-serif mb-8 leading-tight">
          Bắt đầu Hành trình <br /> Nghiên cứu Khoa học
        </h2>
        <p className="text-lg font-medium opacity-80 mb-10 max-w-2xl mx-auto">
          Đăng ký ngay để nhận tư vấn lộ trình học thuật và kiểm tra năng lực miễn phí cùng các Mentor hàng đầu từ GSJ.
        </p>
        <Link 
          href="/register" 
          className="inline-block bg-[#002147] text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
        >
          Đăng ký Tư vấn Miễn phí
        </Link>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <main className="bg-[#001020] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-[#002147]">
      <Nav />
      <HeroSection />
      <PhilosophySection />
      <CorePillarsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

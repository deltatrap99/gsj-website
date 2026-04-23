"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Target, ShieldCheck, Map, Gem, Users, ArrowRight, Quote, Globe, BookOpen, Heart, PlayCircle } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";

// --- About Hero Section ---
const AboutHero = () => (
  <section className="relative pt-28 pb-0 lg:pt-36 overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EEF3FF] to-[#E4ECFF]">
    {/* Background Decorative Elements */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0047F6]/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0047F6]/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#0047F6 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        
        {/* Left Column - Text */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative z-20 pt-4">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0047F6] text-white text-[13px] font-bold uppercase tracking-[0.15em] mb-7 shadow-md">
            <Users className="w-4 h-4" /> Về GSJ
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black text-[#0A2B70] mb-6 leading-[1.1] tracking-tight">
            GSJ – Kiến tạo trí tuệ,<br />
            <span className="text-[#0047F6] italic">dẫn lối tương lai</span>
          </h1>

          <p className="text-[15px] text-gray-600 leading-[1.8] font-medium mb-8 max-w-lg">
            GSJ là hệ sinh thái giáo dục chuyên sâu về kiến thức và kỹ năng, giúp học sinh Việt Nam xây dựng tư duy nghiên cứu, năng lực học thuật và bản lĩnh hội nhập – để tự tin chinh phục những đỉnh cao tri thức và tạo ra giá trị cho cộng đồng.
          </p>

          {/* 3 Feature pills */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: BookOpen, title: "Giáo dục chuyên sâu", desc: "Chú trọng chiều sâu tri thức và tư duy học thuật" },
              { icon: Globe, title: "Nghiên cứu thực tiễn", desc: "Học đi đôi với hành, giải quyết vấn đề thật của thế giới" },
              { icon: Heart, title: "Phát triển toàn diện", desc: "Nâng cao năng lực cá nhân và bản lĩnh công dân toàn cầu" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl border border-[#E0E8FF] shadow-sm min-w-[140px]">
                <div className="w-8 h-8 rounded-full bg-[#0047F6] flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#0A2B70] leading-tight">{item.title}</p>
                  <p className="text-[11px] text-gray-500 font-medium leading-snug mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Image + Quote */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 relative">
          <div className="relative z-10">
            <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,33,71,0.12)] border-4 border-white aspect-[4/3] lg:aspect-[16/11] bg-gray-100">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2071" className="w-full h-full object-cover" alt="GSJ Academic Environment" />
            </div>

            {/* Quote Card - Bottom Right */}
            <div className="absolute -bottom-6 right-4 lg:-bottom-8 lg:right-6 bg-[#0047F6] rounded-2xl px-6 py-5 shadow-[0_12px_40px_rgba(0,23,74,0.2)] z-20 max-w-[320px]">
              <div className="text-white/30 text-[28px] font-black leading-none mb-1">&ldquo;</div>
              <p className="text-[13px] text-white font-semibold leading-relaxed">
                Giáo dục không phải là tạo ra những học sinh giống nhau, mà là giúp mỗi học sinh trở thành phiên bản tốt nhất của chính mình.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,23,74,0.06)] border border-[#E0E8FF] p-6 lg:p-8 mt-14 mb-0 relative z-30"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, value: "1000+", label: "Học sinh đã tham gia", sub: "các chương trình" },
            { icon: Target, value: "200+", label: "Giải thưởng quốc tế", sub: "từ các cuộc thi uy tín" },
            { icon: BookOpen, value: "50+", label: "Bài báo khoa học", sub: "được công bố" },
            { icon: Globe, value: "100%", label: "Học sinh hài lòng", sub: "với chương trình tại GSJ" },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-[#F0F4FF] flex items-center justify-center shrink-0 group-hover:bg-[#0047F6] transition-colors duration-300">
                <stat.icon className="w-5 h-5 text-[#0047F6] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-[22px] font-black text-[#0047F6] leading-none mb-0.5">{stat.value}</div>
                <div className="text-[12px] font-bold text-[#0A2B70]">{stat.label}</div>
                <div className="text-[10px] text-gray-400 font-medium">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Story Section ---
const StorySection = () => (
  <section className="py-24 bg-white text-gray-800 overflow-hidden relative lg:pt-36">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Text */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="lg:col-span-5 space-y-7">
          <span className="inline-block px-5 py-2 rounded-full bg-[#0047F6] text-white text-[13px] font-bold uppercase tracking-[0.15em] shadow-md">
            Về GSJ
          </span>

          <h2 className="text-3xl lg:text-[44px] font-black leading-[1.1] text-[#0A2B70] tracking-tight uppercase">
            Câu chuyện <br/><span className="text-[#0047F6]">của chúng tôi</span>
          </h2>

          <p className="text-[16px] text-gray-600 font-medium leading-[1.8]">
            GSJ ra đời với mục tiêu mang những chương trình đào tạo cốt lõi của hệ thống giáo dục Mỹ và Châu Âu về Việt Nam. Chúng tôi tin rằng, tiềm năng của học sinh Việt là vô hạn nếu được rèn luyện trong môi trường tiêu chuẩn học thuật cao nhất.
          </p>

          <div className="space-y-4 pt-2">
            {[
              { icon: <Globe className="w-5 h-5" />, title: "Chất lượng Quốc tế", desc: "Giáo trình chuẩn Cambridge, O-Level và AP được kiểm định và công nhận toàn cầu." },
              { icon: <Users className="w-5 h-5" />, title: "Hệ sinh thái Tinh hoa", desc: "Đội ngũ Mentor đến từ các tổ chức Ivy League, Russell Group hàng đầu, đồng hành cùng học sinh trên hành trình chinh phục tri thức." }
            ].map((item, idx) => (
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * idx }} key={idx}
                className="flex items-center gap-4 bg-[#F4F7FF] p-5 rounded-2xl border border-[#E0E8FF] hover:border-[#0047F6]/30 hover:shadow-md transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-[#0047F6] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[16px] font-bold text-[#0A2B70] mb-0.5 group-hover:text-[#0047F6] transition-colors">{item.title}</h4>
                  <p className="text-[13px] font-medium text-gray-500 leading-snug">{item.desc}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#E0E8FF] group-hover:bg-[#0047F6] group-hover:border-[#0047F6] transition-all">
                  <ArrowRight className="w-4 h-4 text-[#0047F6] group-hover:text-white transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Right Column - Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="lg:col-span-7 relative">
          {/* Blob / curved shape behind image */}
          <div className="absolute -top-6 -right-6 -bottom-6 -left-2 bg-gradient-to-br from-[#D6E4FF] to-[#E8EFFF] rounded-[3rem] rotate-1 hidden lg:block"></div>

          <div className="relative z-10">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,33,71,0.12)] border-4 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070" 
                alt="Học sinh GSJ làm việc nhóm" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B70]/70 via-transparent to-transparent"></div>
              
              {/* Quote Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8">
                <div className="bg-[#0047F6]/90 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <Quote className="w-8 h-8 text-white/40 fill-white/40 mb-3 rotate-180" />
                  <p className="text-[15px] lg:text-[17px] text-white font-semibold leading-relaxed">
                    &ldquo;Giáo dục định hướng giúp mỗi học sinh nhận ra giá trị bản thân và kiến tạo tương lai.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>

  </section>
);

// --- Board of Directors Section ---
const BoardSection = () => {
  const boardMembers = [
    {
      name: "Bà Đặng Thuý Nga",
      role: "Founder - CEO",
      roleColor: "bg-[#0047F6]",
      image: "/board-dang-thuy-nga.png",
      credentials: [
        "Nguyên Giám đốc khối Cung ứng, Giám đốc chất lượng Phacogen Group",
        "Trưởng phòng Quản lý chất lượng, Quản lý kinh doanh cấp cao Công ty Cổ phần Thiết bị SISC Việt Nam",
        "Chuyên gia cấp cao Hệ thống quản lý chất lượng lĩnh vực Y tế, LEAN, SIX SIGMA",
        "Kĩ sư Hoá dược, Đại học Bách Khoa",
        "Dược sĩ, Trường Đại học Dược Hà Nội",
      ],
    },
    {
      name: "Bà Vũ Ngân Bình",
      role: "Co-Founder - Giám đốc Đào tạo",
      roleColor: "bg-[#0047F6]",
      image: "/board-vu-ngan-binh.png",
      credentials: [
        "Giảng viên Trường Đại học Dược Hà Nội",
        "Chuyên gia xét duyệt hồ sơ đăng ký thuốc",
        "Tiến sĩ Dược học, Trường Đại học Dược Hà Nội",
        "Thạc sĩ Khoa học môi trường, Học bổng Erasmus Mundus (JEMES)",
        "Dược sĩ, Trường Đại học Dược Hà Nội",
        "Cử nhân tài năng Hóa học, Trường Đại học Khoa học Tự nhiên, Đại học Quốc Gia Hà Nội",
      ],
    },
    {
      name: "Bà Hoàng Thị Tuyết Mai",
      role: "Co-Founder",
      roleColor: "bg-[#0047F6]",
      image: "/board-hoang-thi-tuyet-mai.png",
      credentials: [
        "Giám đốc Vùng; Hệ thống Giáo Dục Học Mãi - Galaxy Education",
        "Trưởng phòng Hành Chính Nhân Sự Công ty Chuyển giao Công nghệ TMT",
        "Trưởng Phòng tuyển dụng đào tạo Công ty chứng khoán Gia Phát",
        "Co - Founder",
      ],
    },
    {
      name: "Bà Lương Thị Hồng Hạnh",
      role: "Co-Founder",
      roleColor: "bg-[#0047F6]",
      image: "/board-luong-thi-hong-hanh.png",
      credentials: [
        "Cử nhân Thương mại Quốc tế - Trường Đại học Kinh tế Quốc dân",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\"><circle cx=\"30\" cy=\"30\" r=\"1.5\" fill=\"%230047F6\"/></svg>')" }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-[6px] bg-[#0A2B70] text-white text-[13px] font-bold uppercase tracking-widest mb-6 shadow-md">
            05
          </span>
          <h2 className="text-3xl md:text-[40px] font-black text-[#0A2B70] uppercase tracking-tight mb-4">
            Hội đồng <span className="text-[#0047F6]">Quản trị</span>
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto text-lg">
            Đội ngũ lãnh đạo với tầm nhìn chiến lược, kinh nghiệm đa lĩnh vực, kiến tạo nền tảng vững chắc cho sự phát triển bền vững của GSJ.
          </p>
        </motion.div>

        {/* Board Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                {/* Photo & Gradient */}
                <div className="relative pt-8 px-8 pb-4 flex justify-center">
                  <div className="relative">
                    {/* Blue circle glow behind photo */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0047F6]/20 to-[#0A2B70]/20 blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 bg-gradient-to-br from-[#0047F6] to-[#0A2B70]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="px-6 pb-8 text-center flex flex-col flex-1">
                  <h3 className="text-lg font-black text-[#0A2B70] uppercase tracking-tight mb-2 group-hover:text-[#0047F6] transition-colors">
                    {member.name}
                  </h3>
                  <span className={`inline-block mx-auto px-4 py-1 rounded-full ${member.roleColor} text-white text-[11px] font-bold uppercase tracking-wider mb-5 shadow-sm`}>
                    {member.role}
                  </span>

                  {/* Credentials */}
                  <ul className="space-y-2.5 text-left flex-1">
                    {member.credentials.map((cred, j) => (
                      <li key={j} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0047F6] shrink-0 mt-1.5"></span>
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Advisory Board Section ---
const AdvisorsSection = () => {
  const advisors = [
    {
      name: "Cô Lê Tú",
      role: "Giảng viên chính, RMIT Australia",
      image: "/advisor-dao-duc-tu.png",
      tags: [{ label: "RMIT", color: "bg-[#0047F6]" }, { label: "Australia", color: "bg-[#0047F6]" }],
    },
    {
      name: "Thầy Đào Đức Tú",
      role: "Nghiên cứu sinh, NTU Singapore",
      image: "/advisor-dao-duc-tu.png",
      tags: [{ label: "NTU", color: "bg-[#0047F6]" }, { label: "Singapore", color: "bg-[#0047F6]" }],
    },
    {
      name: "Thầy Đoàn Văn Huân",
      role: "Research Fellow, ANU Australia",
      image: "/advisor-doan-van-huan.png",
      tags: [{ label: "ANU", color: "bg-[#0047F6]" }, { label: "Australia", color: "bg-[#0047F6]" }],
    },
    {
      name: "Cô Ngọc Trâm Anh",
      role: "Tiến sĩ, ĐH Công nghệ Sinh học, ĐHQG-HCM",
      image: "/advisor-ton-nu-hong-nhan.png",
      tags: [{ label: "ĐHQG-HCM", color: "bg-[#0047F6]" }, { label: "Việt Nam", color: "bg-[#0047F6]" }],
    },
    {
      name: "Thầy Bùi Đình Sơn",
      role: "Nghiên cứu viên chính, ĐH Melbourne, Australia",
      image: "/advisor-mai-van-cuong.png",
      tags: [{ label: "Melbourne", color: "bg-[#0047F6]" }, { label: "Australia", color: "bg-[#0047F6]" }],
    },
    {
      name: "Thầy Mai Văn Cương",
      role: "Research Fellow, NTU Singapore",
      image: "/advisor-mai-van-cuong.png",
      tags: [{ label: "NTU", color: "bg-[#0047F6]" }, { label: "Singapore", color: "bg-[#0047F6]" }],
    },
    {
      name: "Thầy Phan Đức Trí",
      role: "Research Fellow, NTT Japan & ĐH Quốc gia Pukyong",
      image: "/advisor-doan-van-huan.png",
      tags: [{ label: "NTT Japan", color: "bg-[#0047F6]" }, { label: "Hàn Quốc", color: "bg-[#0047F6]" }],
    },
    {
      name: "Thầy Thái Khánh Phong",
      role: "Phó Giáo sư, ĐH Queensland Australia",
      image: "/advisor-dao-duc-tu.png",
      tags: [{ label: "UQ", color: "bg-[#0047F6]" }, { label: "Australia", color: "bg-[#0047F6]" }],
    },
    {
      name: "Thầy Nguyễn Bằng Thanh Lâm",
      role: "Nghiên cứu sinh, ĐH Công nghệ Sydney, Australia",
      image: "/advisor-mai-van-cuong.png",
      tags: [{ label: "Sydney", color: "bg-[#0047F6]" }, { label: "Australia", color: "bg-[#0047F6]" }],
    },
    {
      name: "Cô Tôn Nữ Hồng Nhân",
      role: "Nghiên cứu viên, ĐH New South Wales (UNSW)",
      image: "/advisor-ton-nu-hong-nhan.png",
      tags: [{ label: "UNSW", color: "bg-[#0047F6]" }, { label: "Australia", color: "bg-[#0047F6]" }],
    },
    {
      name: "Cô Đặng Thùy Linh",
      role: "Giám đốc phát triển thị trường, ZALANDO SE",
      image: "/advisor-ton-nu-hong-nhan.png",
      tags: [{ label: "ZALANDO", color: "bg-[#0047F6]" }, { label: "Đức", color: "bg-[#0047F6]" }],
    },
    {
      name: "Thầy Nguyễn Hoàng Thiện",
      role: "Nghiên cứu viên, VnomaViet & CSIRO Data61",
      image: "/advisor-doan-van-huan.png",
      tags: [{ label: "CSIRO", color: "bg-[#0047F6]" }, { label: "Australia", color: "bg-[#0047F6]" }],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1D4F 0%, #0A2B70 30%, #0D3B8C 60%, #0B1D4F 100%)" }}>
      {/* World map background */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cellipse cx='600' cy='300' rx='500' ry='250' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cellipse cx='600' cy='300' rx='400' ry='200' fill='none' stroke='%23ffffff' stroke-width='0.3'/%3E%3Cellipse cx='600' cy='300' rx='300' ry='150' fill='none' stroke='%23ffffff' stroke-width='0.3'/%3E%3Cline x1='100' y1='300' x2='1100' y2='300' stroke='%23ffffff' stroke-width='0.3'/%3E%3Cline x1='600' y1='50' x2='600' y2='550' stroke='%23ffffff' stroke-width='0.3'/%3E%3C/svg%3E")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></div>

      {/* Decorative glowing dots */}
      <div className="absolute top-20 left-[15%] w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse opacity-30" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-32 left-[25%] w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-30" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-20 right-[30%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: "0.5s" }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-[#6DB3F8] text-[13px] font-bold uppercase tracking-[0.2em] mb-6 border border-white/10">
            Đội ngũ cố vấn
          </span>
          <h2 className="text-3xl md:text-[48px] font-black text-white uppercase tracking-tight mb-5 leading-[1.1]">
            Hội đồng cố vấn <span className="text-[#4DA3FF]">GSJ</span>
          </h2>
          <p className="text-blue-200/80 font-medium max-w-2xl text-[17px] leading-relaxed">
            Mạng lưới chuyên gia, nghiên cứu viên và cố vấn học thuật đến từ các trường đại học, viện nghiên cứu và tổ chức quốc tế hàng đầu.
          </p>

          {/* Stats Badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/10 text-white/90">
              <Users className="w-[18px] h-[18px] text-[#6DB3F8]" />
              <span className="text-[14px] font-semibold">12+ Chuyên gia</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/10 text-white/90">
              <Map className="w-[18px] h-[18px] text-[#6DB3F8]" />
              <span className="text-[14px] font-semibold">Quốc tế</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/10 text-white/90">
              <GraduationCap className="w-[18px] h-[18px] text-[#6DB3F8]" />
              <span className="text-[14px] font-semibold">Úc • Singapore • Hàn Quốc • Việt Nam</span>
            </div>
          </div>
        </motion.div>

        {/* Advisors Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advisors.map((advisor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="bg-white rounded-2xl p-5 h-full flex flex-col items-center text-center group hover:shadow-[0_8px_30px_rgba(0,71,246,0.15)] hover:-translate-y-1 transition-all duration-400 border border-gray-100">
                {/* Circular Photo */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0047F6]/20 to-[#4DA3FF]/20 blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-[3px] border-[#E8EFFF] shadow-sm relative z-10 bg-gradient-to-br from-[#F0F4FF] to-[#E0E8FF]">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-[15px] font-bold text-[#0A2B70] mb-1.5 group-hover:text-[#0047F6] transition-colors leading-tight">
                  {advisor.name}
                </h3>

                {/* Role */}
                <p className="text-[12.5px] text-gray-500 font-medium leading-snug mb-3 min-h-[36px] flex items-center">
                  {advisor.role}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                  {advisor.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-[3px] rounded-full bg-[#F0F4FF] text-[#0047F6] text-[11px] font-semibold border border-[#E0E8FF]"
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0047F6] font-bold text-[15px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group border border-[#E0E8FF]"
          >
            Xem đầy đủ hồ sơ cố vấn
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
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
      <BoardSection />
      <AdvisorsSection />
      <Footer />

    </main>
  );
}

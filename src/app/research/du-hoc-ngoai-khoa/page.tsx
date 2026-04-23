"use client";

import React from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  Star, Compass, BookOpen, Globe, Phone, ArrowRight,
  Users, Trophy, FileText, Target, GraduationCap,
  ClipboardList, Sparkles, Award, ChevronRight, Shield,
  TrendingUp, Handshake, CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function DuHocNgoaiKhoaPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFF] text-gray-800 font-sans overflow-x-hidden">
      <Nav />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-28 pb-0 lg:pt-36 overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EEF3FF] to-[#E4ECFF]">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#0047F6]/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0047F6]/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#6DB3F8 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* Left Column - Text */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-5 pt-4 space-y-5">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0047F6] text-white text-[13px] font-bold uppercase tracking-[0.12em] shadow-md">
                <Star className="w-4 h-4" /> Chương trình Du học GSJ
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-black text-[#0A2B70] leading-[1.1] tracking-tight">
                Du học không chỉ là<br />cánh cửa vào trường đại học<br />
                <span className="text-[#0047F6] italic">mà là chiến lược đầu tư dài hạn</span>
              </h1>

              <p className="text-[14px] text-gray-600 font-medium leading-[1.8] max-w-lg">
                GSJ đồng hành cùng học sinh từ định hướng nghề nghiệp, rèn luyện năng lực học thuật đến xây dựng hồ sơ ngoại khoá ấn tượng, giúp các em tự tin chinh phục những ngôi trường hàng đầu thế giới.
              </p>

              {/* 3 Feature pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Compass, title: "Định hướng cá nhân hóa", desc: "Lộ trình du học bền vững, phù hợp với thế mạnh và sở thích." },
                  { icon: BookOpen, title: "Học thuật & Nghiên cứu", desc: "Rèn luyện tư duy học thuật, nghiên cứu khoa học và kỹ năng toàn cầu." },
                  { icon: Globe, title: "Cơ hội toàn cầu", desc: "Kết nối với các trường đại học, học bổng và cơ hội phát triển trên toàn thế giới." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl border border-[#E0E8FF] shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#0047F6] flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#0A2B70] leading-tight">{item.title}</p>
                      <p className="text-[10px] text-gray-500 font-medium leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/register" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0047F6] text-white rounded-full font-bold text-[14px] shadow-[0_4px_20px_rgba(0,71,246,0.3)] hover:shadow-[0_6px_30px_rgba(0,71,246,0.4)] hover:-translate-y-0.5 transition-all whitespace-nowrap">
                  <Phone className="w-4 h-4" />
                  Đặt lịch tư vấn 1:1
                </Link>
                <Link href="/research/du-hoc-ngoai-khoa#lo-trinh" className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-[#0A2B70] rounded-full font-bold text-[14px] border-2 border-[#E0E8FF] hover:border-[#0047F6]/30 shadow-sm hover:shadow-md transition-all whitespace-nowrap">
                  <ArrowRight className="w-4 h-4 text-[#0047F6]" />
                  Tìm hiểu lộ trình du học
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Image with overlays */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 relative">
              {/* Decorative blob shapes behind image */}
              <div className="absolute -top-10 -right-10 w-[300px] h-[300px] bg-[#0047F6]/[0.08] rounded-full blur-3xl hidden lg:block"></div>
              <div className="absolute -bottom-14 -left-10 w-[250px] h-[250px] bg-[#3B82F6]/[0.06] rounded-full blur-2xl hidden lg:block"></div>

              <div className="relative z-10">
                {/* Main Image with stylized frame */}
                <div className="relative">
                  {/* Decorative tilted background card */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-[#0047F6]/20 via-[#3B82F6]/10 to-[#93C5FD]/10 rounded-[3rem] rotate-2 hidden lg:block"></div>

                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,33,71,0.15)] border-4 border-white/80 aspect-[4/3] lg:aspect-[16/11] bg-gray-100">
                    <img
                      src="/images/du-hoc-cover.png"
                      className="w-full h-full object-cover object-top"
                      alt="Du học sinh GSJ - Chinh phục đại học quốc tế"
                    />
                    {/* Multi-layer gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B70]/50 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0047F6]/10 to-transparent"></div>
                  </div>
                </div>

                {/* GSJ Logo Badge - top right, animated float */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-2 right-2 lg:top-4 lg:right-0 w-16 h-16 rounded-full bg-white shadow-[0_8px_30px_rgba(0,23,74,0.15)] flex items-center justify-center z-20 border-3 border-[#E0E8FF]"
                >
                  <span className="text-[#0047F6] font-black text-[15px]">GSJ</span>
                </motion.div>

                {/* Floating airplane icon - top left */}
                <motion.div
                  animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-6 lg:top-8 lg:-left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center z-20 rotate-12"
                >
                  <span className="text-[18px]">✈️</span>
                </motion.div>

                {/* Floating graduation cap - mid right */}
                <motion.div
                  animate={{ y: [0, 6, 0], rotate: [6, -3, 6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/3 -right-2 lg:-right-5 w-11 h-11 rounded-2xl bg-[#0047F6] shadow-lg flex items-center justify-center z-20"
                >
                  <GraduationCap className="w-5 h-5 text-white" />
                </motion.div>

                {/* Stats Card Overlay - bottom */}
                <div className="absolute -bottom-6 left-4 right-4 lg:-bottom-8 lg:left-6 lg:right-6 z-20">
                  <div className="bg-gradient-to-r from-[#0047F6] to-[#0035B8] rounded-2xl px-5 py-4 shadow-[0_12px_40px_rgba(0,23,74,0.25)] backdrop-blur-sm border border-white/10">
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { value: "1000+", label: "Học sinh", sub: "đã và đang đồng hành" },
                        { value: "200+", label: "Giải thưởng quốc tế", sub: "từ các cuộc thi uy tín" },
                        { value: "50+", label: "Bài báo khoa học", sub: "được công bố" },
                        { value: "100%", label: "Học sinh hài lòng", sub: "với chương trình GSJ" },
                      ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-[20px] lg:text-[22px] font-black text-white leading-none mb-0.5">{stat.value}</div>
                          <div className="text-[10px] lg:text-[11px] font-bold text-white/90 leading-tight">{stat.label}</div>
                          <div className="text-[8px] lg:text-[9px] text-white/60 font-medium">{stat.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Partner Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,23,74,0.06)] border border-[#E0E8FF] px-6 lg:px-10 py-5 mt-16 mb-0 relative z-30"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="text-[13px] font-bold text-[#0A2B70] leading-tight min-w-[140px]">
                Mạng lưới đối tác &<br />trường liên kết toàn cầu
              </div>
              <div className="flex flex-wrap items-center gap-8 lg:gap-12">
                {[
                  { name: "HARVARD", sub: "UNIVERSITY" },
                  { name: "Stanford", sub: "University" },
                  { name: "MIT", sub: "" },
                  { name: "NUS", sub: "" },
                ].map((uni, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-[16px] lg:text-[18px] font-black text-[#0A2B70] tracking-tight leading-none">{uni.name}</div>
                    {uni.sub && <div className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">{uni.sub}</div>}
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-gray-400 font-medium italic">
                Và nhiều trường<br />đại học danh tiếng khác
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spacer for hero bottom overflow */}
      <div className="h-8 bg-[#F8FAFF]"></div>

      {/* ===== ROADMAP SECTION ===== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F4F7FF] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0047F6]/[0.03] rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#6DB3F8 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        {/* World map watermark */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><ellipse cx=\"600\" cy=\"300\" rx=\"550\" ry=\"250\" fill=\"none\" stroke=\"%230047F6\" stroke-width=\"1.5\"/><ellipse cx=\"600\" cy=\"300\" rx=\"350\" ry=\"250\" fill=\"none\" stroke=\"%230047F6\" stroke-width=\"1\"/><line x1=\"50\" y1=\"300\" x2=\"1150\" y2=\"300\" stroke=\"%230047F6\" stroke-width=\"0.8\"/></svg>')", backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0047F6] text-white text-[13px] font-bold uppercase tracking-[0.12em] shadow-md mb-6">
              <Sparkles className="w-4 h-4" /> Quy trình tư vấn du học tại GSJ
            </span>
            <h2 className="text-3xl lg:text-[44px] font-black text-[#0A2B70] leading-[1.1] tracking-tight">
              Hành trình cá nhân hóa từ định hướng{" "}
              <span className="text-[#0047F6] italic">đến trúng tuyển</span>
            </h2>
            <p className="text-[15px] text-gray-500 font-medium leading-[1.8] mt-5 max-w-2xl mx-auto">
              Mỗi học sinh là một chiến lược riêng – GSJ thiết kế lộ trình tối ưu theo năng lực &amp; mục tiêu để chinh phục các trường đại học hàng đầu thế giới.
            </p>
          </motion.div>

          {/* 4-Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0 relative mb-16">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-[70px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#0047F6]/20 via-[#0047F6]/40 to-[#0047F6]/20 z-0"></div>

            {([
              {
                step: "01",
                icon: Compass,
                title: "Định hướng\ncùng chuyên gia",
                bullets: ["Phân tích sở thích, năng lực", "Định hướng ngành học & trường phù hợp"],
                highlight: false,
              },
              {
                step: "02",
                icon: ClipboardList,
                title: "Chiến lược hồ sơ\nhọc thuật & ngoại khóa",
                bullets: ["Đánh giá điểm mạnh / điểm cần cải thiện", "Xây dựng lộ trình phát triển học thuật & ngoại khóa dài hạn"],
                highlight: false,
              },
              {
                step: "03",
                icon: FileText,
                title: "Xây dựng\nhồ sơ nổi bật",
                bullets: ["Học thuật: môn học, chứng chỉ, nghiên cứu khoa học", "Ngoại khóa: dự án, leadership, hoạt động xã hội, giải thưởng"],
                highlight: true,
              },
              {
                step: "04",
                icon: GraduationCap,
                title: "Nộp hồ sơ &\nchinh phục phỏng vấn",
                bullets: ["Hoàn thiện essay, CV, thư giới thiệu", "Luyện phỏng vấn & chuẩn bị cho hành trang du học"],
                highlight: false,
              },
            ] as const).map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative flex flex-col items-center px-3"
              >
                {/* Step number circle */}
                <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-[14px] font-black mb-5 shadow-lg border-4 ${
                  card.highlight
                    ? "bg-[#0047F6] text-white border-[#3B82F6]/30"
                    : "bg-white text-[#0047F6] border-[#E0E8FF]"
                }`}>
                  {card.step}
                </div>

                {/* Arrow between cards (desktop) */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-[24px] -right-3 z-20 w-6 h-6 rounded-full bg-white shadow-md items-center justify-center border border-[#E0E8FF]">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0047F6]" />
                  </div>
                )}

                {/* Card */}
                <div className={`relative w-full rounded-2xl p-6 border transition-all hover:shadow-lg hover:-translate-y-1 ${
                  card.highlight
                    ? "bg-gradient-to-br from-[#0047F6] to-[#0035B8] border-[#0047F6]/30 shadow-[0_8px_30px_rgba(0,71,246,0.2)]"
                    : "bg-white border-[#E0E8FF] shadow-[0_4px_20px_rgba(0,23,74,0.06)]"
                }`}>
                  {/* KEY IMPACT badge */}
                  {card.highlight && (
                    <div className="absolute -top-3 right-4 px-3 py-1 bg-[#FFC107] text-[#0A2B70] text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1">
                      <Award className="w-3 h-3" /> Key Impact
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    card.highlight ? "bg-white/15" : "bg-[#EEF3FF]"
                  }`}>
                    <card.icon className={`w-6 h-6 ${card.highlight ? "text-white" : "text-[#0047F6]"}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-[15px] font-black leading-tight mb-3 whitespace-pre-line ${card.highlight ? "text-white" : "text-[#0A2B70]"}`}>
                    {card.title}
                  </h3>

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className={`flex items-start gap-2 text-[12px] font-medium leading-snug ${card.highlight ? "text-white/80" : "text-gray-500"}`}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${card.highlight ? "bg-[#93C5FD]" : "bg-[#0047F6]/40"}`}></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Benefits Bar + CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,23,74,0.06)] border border-[#E0E8FF] px-6 lg:px-8 py-6 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
              {/* 4 benefit items */}
              <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {[
                  { icon: Shield, text: "Hồ sơ cá nhân hóa nổi bật & khác biệt" },
                  { icon: Target, text: "Chiến lược apply rõ ràng & tối ưu" },
                  { icon: TrendingUp, text: "Tăng cơ hội trúng tuyển & học bổng giá trị" },
                  { icon: Handshake, text: "Mạng lưới đối tác toàn cầu uy tín" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#EEF3FF] flex items-center justify-center shrink-0">
                      <item.icon className="w-4.5 h-4.5 text-[#0047F6]" />
                    </div>
                    <p className="text-[11px] lg:text-[12px] font-bold text-[#0A2B70] leading-tight">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* CTA card */}
              <div className="lg:ml-6 w-full lg:w-auto shrink-0">
                <div className="bg-gradient-to-r from-[#0047F6] to-[#0035B8] rounded-2xl px-6 py-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,71,246,0.2)]">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-black text-white leading-tight">Bạn đang ở bước nào trong hành trình du học?</p>
                    <p className="text-[10px] text-white/60 font-medium mt-0.5">Nhận tư vấn 1:1 cùng chuyên gia GSJ để xây dựng lộ trình phù hợp nhất cho bạn.</p>
                  </div>
                  <Link href="/register" className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-[#0047F6] rounded-xl text-[12px] font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all whitespace-nowrap">
                    Đặt lịch tư vấn ngay
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONSULTATION FORM SECTION ===== */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#0A2B70] via-[#0D3485] to-[#0047F6] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3B82F6]/[0.08] rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "28px 28px" }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column - Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-[13px] font-bold uppercase tracking-[0.12em] mb-6 border border-white/20">
                  <Phone className="w-4 h-4" /> Đăng ký tư vấn
                </span>
                <h2 className="text-3xl lg:text-[42px] font-black text-white leading-[1.1] tracking-tight mt-4">
                  Bắt đầu hành trình<br />
                  <span className="text-[#93C5FD] italic">chinh phục thế giới</span>
                </h2>
                <p className="text-[15px] text-white/70 font-medium leading-[1.8] mt-5 max-w-md">
                  Đội ngũ chuyên gia GSJ sẽ tư vấn lộ trình du học phù hợp nhất cho con bạn. Hoàn toàn miễn phí, không ràng buộc.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {[
                  { icon: Compass, text: "Tư vấn 1:1 với chuyên gia du học hàng đầu" },
                  { icon: Target, text: "Đánh giá hồ sơ & xây dựng lộ trình cá nhân hóa" },
                  { icon: GraduationCap, text: "Hướng dẫn chọn trường & ngành phù hợp" },
                  { icon: Globe, text: "Hỗ trợ toàn diện từ A-Z đến khi nhập học" },
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/20 transition-colors">
                      <item.icon className="w-4.5 h-4.5 text-[#93C5FD]" />
                    </div>
                    <p className="text-[14px] text-white/90 font-semibold">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Trust signal */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] border-2 border-[#0A2B70] flex items-center justify-center text-white text-[11px] font-bold">
                      {["NT", "HM", "TL", "VN"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[13px] text-white font-bold">1000+ phụ huynh đã đăng ký</p>
                  <p className="text-[11px] text-white/50 font-medium">Tư vấn trong vòng 24h</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)] relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#EEF3FF] to-transparent rounded-bl-[3rem]"></div>

                <div className="relative z-10">
                  <h3 className="text-[22px] font-black text-[#0A2B70] mb-1">Đăng ký nhận tư vấn miễn phí</h3>
                  <p className="text-[13px] text-gray-500 font-medium mb-7">Điền thông tin bên dưới, chúng tôi sẽ liên hệ trong 24h</p>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {/* Row 1: Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-[#0A2B70] mb-1.5 uppercase tracking-wider">Họ và tên phụ huynh <span className="text-red-400">*</span></label>
                        <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 rounded-xl bg-[#F4F7FF] border border-[#E0E8FF] text-[14px] font-medium text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047F6]/30 focus:border-[#0047F6]/50 transition-all" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-[#0A2B70] mb-1.5 uppercase tracking-wider">Số điện thoại <span className="text-red-400">*</span></label>
                        <input type="tel" placeholder="0327 326 655" className="w-full px-4 py-3 rounded-xl bg-[#F4F7FF] border border-[#E0E8FF] text-[14px] font-medium text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047F6]/30 focus:border-[#0047F6]/50 transition-all" />
                      </div>
                    </div>

                    {/* Row 2: Email */}
                    <div>
                      <label className="block text-[12px] font-bold text-[#0A2B70] mb-1.5 uppercase tracking-wider">Email</label>
                      <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl bg-[#F4F7FF] border border-[#E0E8FF] text-[14px] font-medium text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047F6]/30 focus:border-[#0047F6]/50 transition-all" />
                    </div>

                    {/* Row 3: Grade + Program */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-[#0A2B70] mb-1.5 uppercase tracking-wider">Con đang học lớp</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-[#F4F7FF] border border-[#E0E8FF] text-[14px] font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0047F6]/30 focus:border-[#0047F6]/50 transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%230047F6%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat">
                          <option value="">Chọn lớp</option>
                          <option value="6">Lớp 6</option>
                          <option value="7">Lớp 7</option>
                          <option value="8">Lớp 8</option>
                          <option value="9">Lớp 9</option>
                          <option value="10">Lớp 10</option>
                          <option value="11">Lớp 11</option>
                          <option value="12">Lớp 12</option>
                          <option value="sv">Sinh viên</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-[#0A2B70] mb-1.5 uppercase tracking-wider">Chương trình quan tâm</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-[#F4F7FF] border border-[#E0E8FF] text-[14px] font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0047F6]/30 focus:border-[#0047F6]/50 transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%230047F6%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat">
                          <option value="">Chọn chương trình</option>
                          <option value="du-hoc">Du học toàn phần</option>
                          <option value="ngoai-khoa">Ngoại khoá quốc tế</option>
                          <option value="nghien-cuu">Nghiên cứu khoa học</option>
                          <option value="chuan-hoa">Kỳ thi chuẩn hoá</option>
                          <option value="khac">Khác</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="block text-[12px] font-bold text-[#0A2B70] mb-1.5 uppercase tracking-wider">Lời nhắn</label>
                      <textarea rows={3} placeholder="Chia sẻ thêm về mong muốn của bạn..." className="w-full px-4 py-3 rounded-xl bg-[#F4F7FF] border border-[#E0E8FF] text-[14px] font-medium text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047F6]/30 focus:border-[#0047F6]/50 transition-all resize-none"></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#0047F6] to-[#0035B8] text-white rounded-xl font-bold text-[15px] shadow-[0_4px_20px_rgba(0,71,246,0.3)] hover:shadow-[0_8px_30px_rgba(0,71,246,0.45)] hover:-translate-y-0.5 transition-all active:translate-y-0 mt-2">
                      <Phone className="w-5 h-5" />
                      Đăng ký nhận tư vấn miễn phí
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-gray-400 text-center font-medium pt-1">
                      🔒 Thông tin của bạn được bảo mật tuyệt đối theo chính sách bảo mật của GSJ
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

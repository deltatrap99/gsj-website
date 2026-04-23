"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  FlaskConical, Search, BarChart3, Brain, Users, Presentation,
  Globe, Trophy, Lightbulb, ChevronDown, CalendarCheck, ArrowRight,
  Microscope, FileText, Target, Beaker
} from "lucide-react";
import Link from "next/link";

// Phase accordion data
const phases = [
  {
    id: 1,
    title: "Nghiên cứu & Xây dựng đề tài",
    items: [
      "Định hướng chủ đề cùng mentor",
      "Tổng quan tài liệu và đề xuất giả thuyết",
      "Xây dựng kế hoạch nghiên cứu chi tiết"
    ]
  },
  {
    id: 2,
    title: "Thực nghiệm & Thu thập dữ liệu",
    items: [
      "Tiến hành thí nghiệm / khảo sát",
      "Thu thập và xử lý dữ liệu",
      "Đánh giá kết quả và rút ra kết luận"
    ]
  },
  {
    id: 3,
    title: "Công bố & Thi đấu quốc tế",
    items: [
      "Viết báo cáo khoa học / paper",
      "Chuẩn bị poster & thuyết trình",
      "Gửi bài và tham gia cuộc thi, hội thảo quốc tế"
    ]
  }
];

// Skills data
const skills = [
  { icon: Search, title: "Tư duy nghiên cứu", desc: "Hình thành tư duy khoa học và khả năng đặt vấn đề." },
  { icon: BarChart3, title: "Kỹ năng phân tích", desc: "Thu thập, xử lý và phân tích dữ liệu chuyên sâu." },
  { icon: Brain, title: "Tư duy phản biện", desc: "Đánh giá, phản biện và đưa ra kết luận logic." },
  { icon: Users, title: "Làm việc nhóm", desc: "Phát triển kỹ năng teamwork và quản lý dự án." },
  { icon: Presentation, title: "Trình bày chuyên nghiệp", desc: "Kỹ năng thuyết trình, viết báo cáo và poster khoa học." },
  { icon: Globe, title: "Hội nhập quốc tế", desc: "Cơ hội tham gia hội thảo, cuộc thi và công bố quốc tế." },
];

// Stats data
const achievementStats = [
  { value: "50+", label: "Dự án NCKH quốc tế", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600" },
  { value: "20+", label: "Giải thưởng quốc tế", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600" },
  { value: "1000+", label: "Học sinh tham gia", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600" },
];

export default function NghienCuuKhoaHocPage() {
  const [openPhase, setOpenPhase] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#F8FAFF] text-gray-800 font-sans overflow-x-hidden">
      <Nav />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EEF3FF] to-[#E4ECFF]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#0047F6]/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0047F6]/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#6DB3F8 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column - Text + Image */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-5 pt-4 space-y-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0047F6] text-white text-[13px] font-bold uppercase tracking-[0.15em] shadow-md">
                <FlaskConical className="w-4 h-4" /> Chương trình trọng điểm
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-black text-[#0A2B70] leading-[1.1] tracking-tight">
                Dự án NCKH<br />Kỹ thuật – Công nghệ
              </h1>

              <p className="text-[16px] text-[#0047F6] font-bold italic">
                Kiến tạo nhà khoa học trẻ – Làm nghiên cứu thật, công bố thật
              </p>

              <p className="text-[14px] text-gray-600 font-medium leading-[1.8]">
                Chương trình giúp học sinh từ ý tưởng đến công bố quốc tế, phát triển tư duy nghiên cứu chuyên sâu và năng lực giải quyết vấn đề của thế kỷ 21.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Microscope, text: "Mentor từ các đại học Top đầu thế giới" },
                  { icon: Beaker, text: "Phòng lab & thiết bị hiện đại" },
                  { icon: Trophy, text: "Cơ hội công bố & thi đấu quốc tế" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#E0E8FF] shadow-sm text-[12px] font-semibold text-[#0A2B70]">
                    <item.icon className="w-4 h-4 text-[#0047F6]" />
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Lab Image with Stats Overlay */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg border-4 border-white mt-2">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200" alt="Học sinh nghiên cứu khoa học" className="w-full h-[260px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B70]/80 via-[#0A2B70]/20 to-transparent"></div>
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0047F6] flex items-center justify-center shrink-0"><Trophy className="w-5 h-5 text-white" /></div>
                      <div><div className="text-[24px] font-black text-white leading-none">1000+</div><div className="text-[11px] text-white/80 font-semibold">Học sinh tham gia dự án</div></div>
                    </div>
                    <div className="flex gap-5 ml-auto">
                      <div><div className="text-[18px] font-black text-white leading-none">200+</div><div className="text-[10px] text-white/70 font-semibold">Dự án nghiên cứu<br/>tiêu biểu</div></div>
                      <div><div className="text-[18px] font-black text-white leading-none">50+</div><div className="text-[10px] text-white/70 font-semibold">Giải thưởng quốc tế<br/>danh giá</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Process Timeline + Accordion */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 space-y-6">
              {/* Process Card */}
              <div className="bg-white rounded-[2rem] shadow-[0_16px_50px_rgba(0,23,74,0.08)] border border-[#E0E8FF] p-7 lg:p-9">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-0.5 bg-[#0047F6]"></div>
                  <h3 className="text-[20px] font-black text-[#0A2B70] uppercase tracking-tight">Quy trình thực hiện dự án</h3>
                  <div className="w-8 h-0.5 bg-[#0047F6]"></div>
                </div>
                <div className="space-y-5">
                  {phases.map((phase) => (
                    <div key={phase.id} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-[#0047F6] text-white flex items-center justify-center shrink-0 shadow-md text-[16px] font-black">{String(phase.id).padStart(2, "0")}</div>
                        {phase.id < 3 && <div className="w-0.5 h-6 bg-[#E0E8FF] mt-1.5"></div>}
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h4 className="text-[16px] font-bold text-[#0A2B70] mb-1.5">{phase.title}</h4>
                        <ul className="space-y-1">
                          {phase.items.map((item, i) => (
                            <li key={i} className="text-[13px] text-gray-600 font-medium flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0047F6] shrink-0"></span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accordion Details */}
              <div className="bg-white rounded-[2rem] shadow-[0_16px_50px_rgba(0,23,74,0.08)] border border-[#E0E8FF] p-7 lg:p-9">
                <h3 className="text-[18px] font-black text-[#0A2B70] uppercase tracking-tight mb-5">Thông tin chi tiết</h3>
                <div className="space-y-3">
                  {phases.map((phase) => (
                    <div key={phase.id} className="border border-[#E0E8FF] rounded-xl overflow-hidden bg-[#FAFBFF] hover:border-[#0047F6]/30 transition-colors">
                      <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpenPhase(openPhase === phase.id ? null : phase.id)}>
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-black text-[#0047F6]">Phase {phase.id}:</span>
                          <span className="text-[14px] font-bold text-[#0A2B70]">{phase.title}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openPhase === phase.id ? "-rotate-180 text-[#0047F6]" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openPhase === phase.id && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="px-5 pb-4">
                              <ul className="space-y-1.5 pl-1">
                                {phase.items.map((item, i) => (
                                  <li key={i} className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0047F6] shrink-0"></span>{item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="w-16 h-1 bg-[#0047F6] mx-auto mb-6"></div>
            <h2 className="text-3xl lg:text-[38px] font-black text-[#0A2B70] uppercase tracking-tight mb-3">
              Giá trị mang lại cho học sinh
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-[#F8FAFF] rounded-2xl p-7 border border-[#E0E8FF] hover:border-[#0047F6]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E0E8FF] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0047F6] group-hover:border-[#0047F6] transition-colors duration-300 shadow-sm">
                  <skill.icon className="w-6 h-6 text-[#0047F6] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-[16px] font-bold text-[#0A2B70] mb-2">{skill.title}</h4>
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEEDBACK HỌC VIÊN ===== */}
      <section className="py-20 bg-[#F8FAFF] border-t border-[#E0E8FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0047F6] text-white text-[13px] font-bold uppercase tracking-[0.12em] mb-5 shadow-md">
              <Presentation className="w-4 h-4" /> Feedback học viên
            </span>
            <h2 className="text-3xl lg:text-[44px] font-black text-[#0A2B70] tracking-tight mb-4 italic">
              Những chia sẻ từ học sinh GSJ
            </h2>
            <p className="text-[15px] text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Cảm nhận thật – Trải nghiệm thật – Kết quả thật từ hành trình nghiên cứu khoa học cùng đội ngũ mentor và môi trường chuẩn quốc tế tại GSJ.
            </p>
          </motion.div>

          {/* Featured Testimonials - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Trần Mai Chi",
                school: "11 Chuyên Sinh – THPT Chuyên Hà Nội – Amsterdam",
                award: "🏆 Giải Bạc ISEF 2024 (Hoa Kỳ)",
                awardColor: "text-[#0047F6]",
                quote: "\"Trải nghiệm quý giá mở ra nhiều cơ hội mới\"",
                detail: "Chương trình giúp em hiểu rõ cách làm nghiên cứu bài bản. Nhờ dự án, em đã đạt giải tại cuộc thi quốc tế và có thêm sự tự tin trong học tập và định hướng tương lai.",
                stars: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop&crop=face"
              },
              {
                name: "Đoàn Nguyễn Thùy Anh",
                school: "11 Chuyên Hóa – THPT Chuyên Hà Nội – Amsterdam",
                award: "🏆 Giải Nhất STEM Innovation 2024",
                awardColor: "text-[#0047F6]",
                quote: "\"Mentor luôn đồng hành và hỗ trợ tận tâm\"",
                detail: "Mentor tại GSJ rất giỏi chuyên môn và tận tình. Các buổi hướng dẫn 1:1 giúp em tiến bộ nhanh chóng, hoàn thành dự án đúng tiến độ và đạt kết quả như mong đợi.",
                stars: 5,
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop&crop=face"
              },
              {
                name: "Vũ Quỳnh Trang",
                school: "11 Chuyên Sinh – THPT Chuyên Khoa học Tự nhiên",
                award: "🏆 Giải Ba ICYS 2023 (Singapore)",
                awardColor: "text-[#0047F6]",
                quote: "\"Môi trường hiện đại, truyền cảm hứng học tập\"",
                detail: "Phòng lab hiện đại, thiết bị đầy đủ và các bạn cùng nhóm đều rất giỏi. Em học được nhiều kỹ năng mới và có những kỷ niệm đáng nhớ tại GSJ.",
                stars: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop&crop=face"
              }
            ].map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-7 border border-[#E0E8FF] shadow-[0_8px_30px_rgba(0,23,74,0.06)] hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Photo */}
                <div className="flex justify-center mb-5">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#E0E8FF] shadow-md">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Quote title */}
                <h4 className="text-[16px] font-black text-[#0047F6] text-center mb-3 leading-snug">{t.quote}</h4>
                {/* Detail */}
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed mb-4 text-center">{t.detail}</p>
                {/* Stars */}
                <div className="flex justify-center gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-[16px]">★</span>
                  ))}
                </div>
                {/* Name & school */}
                <div className="text-center">
                  <p className="text-[14px] font-bold text-[#0A2B70]">{t.name}</p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">{t.school}</p>
                </div>
                {/* Award badge */}
                <div className="flex justify-center mt-3">
                  <span className={`text-[11px] font-bold ${t.awardColor} bg-[#F0F4FF] px-3 py-1 rounded-full`}>{t.award}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Short Quote Cards - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { quote: "Dự án giúp em rèn luyện tư duy logic, kỹ năng giải quyết vấn đề và làm việc nhóm hiệu quả. Đây là hành trang quan trọng cho tương lai của em.", name: "Nguyễn Sơn Tùng", school: "Lớp 9 Trường THCS & THPT Nguyễn Tất Thành" },
              { quote: "Em rất thích cách GSJ tổ chức chương trình khoa học, chuyên nghiệp và bài bản. Em đã tự tin hơn rất nhiều khi thuyết trình dự án trước hội đồng.", name: "Hoàng Giang", school: "12 Chuyên Sinh – THPT Chuyên Hà Nội – Amsterdam" },
              { quote: "Nhờ sự hướng dẫn của mentor, em đã viết được bài báo đầu tiên và được chấp nhận đăng trên tạp chí quốc tế. Khoảng thời gian thật sự đáng nhớ!", name: "Đỗ Hoàng Minh Tuệ", school: "THPT Chuyên KHTN, ĐHQGHN" },
              { quote: "GSJ không chỉ dạy kiến thức mà còn giúp em phát triển tư duy nghiên cứu và định hướng nghề nghiệp rõ ràng hơn.", name: "Lê Trịnh Bảo Hân", school: "THPT Chuyên Nguyễn Huệ" },
            ].map((q, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-[#E0E8FF] shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="text-[#0047F6]/20 text-[32px] font-black leading-none mb-2">&ldquo;</div>
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed mb-4">{q.quote}</p>
                <div>
                  <p className="text-[13px] font-bold text-[#0A2B70]">{q.name}</p>
                  <p className="text-[11px] text-gray-400 font-medium">{q.school}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,23,74,0.06)] border border-[#E0E8FF] p-6 lg:p-8 mb-10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, value: "1000+", label: "Học sinh tham gia dự án", sub: "trong và ngoài nước" },
                { icon: Trophy, value: "200+", label: "Giải thưởng quốc tế", sub: "từ các cuộc thi uy tín" },
                { icon: FileText, value: "50+", label: "Bài báo khoa học", sub: "được công bố & chấp nhận" },
                { icon: Target, value: "100%", label: "Học sinh hài lòng", sub: "với chương trình tại GSJ" },
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

          {/* Closing Quote */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center py-6">
            <p className="text-[18px] lg:text-[22px] text-[#0A2B70] font-bold italic max-w-3xl mx-auto leading-relaxed">
              <span className="text-[#0047F6] text-[28px] font-black mr-1">&ldquo;</span>
              Tại GSJ, mỗi dự án không chỉ là một nghiên cứu – mà là một hành trình trưởng thành.
              <span className="text-[#0047F6] text-[28px] font-black ml-1">&rdquo;</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 bg-[#0047F6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/3"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-white">
              <h2 className="text-3xl lg:text-[36px] font-black mb-4 leading-tight">
                Bạn có ý tưởng nghiên cứu?
              </h2>
              <p className="text-blue-100 text-[16px] font-medium leading-relaxed">
                Đội ngũ mentor của GSJ luôn sẵn sàng đồng hành cùng bạn biến ý tưởng thành dự án thực tế và giá trị.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0047F6] font-bold text-[15px] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group border border-white/80 whitespace-nowrap"
              >
                <CalendarCheck className="w-5 h-5" />
                Đặt lịch tư vấn 1:1
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent text-white font-bold text-[15px] shadow-lg hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 group border border-white/40 whitespace-nowrap"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Đăng ký tham gia dự án
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

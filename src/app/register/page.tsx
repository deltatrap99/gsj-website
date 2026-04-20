"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2, FlaskConical, Globe, BookOpen, Star, Sparkles, User, Mail, Phone, GraduationCap, MapPin, Clock, CalendarHeart } from "lucide-react";
import Link from "next/link";

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Submit logic goes here
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#0047F6]/20 selection:text-[#0A2B70]">
      <Nav />
      
      {/* 1. HERO & FORM SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-[#F4F7FF] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#0047F6]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0047F6]/10 text-[#0047F6] text-xs font-bold uppercase tracking-widest border border-[#0047F6]/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0047F6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0047F6]"></span>
                </span>
                Tuyển sinh 2024
              </div>
              
              <h1 className="text-4xl lg:text-[54px] font-black text-[#0A2B70] leading-[1.1] tracking-tight">
                Đăng ký Học thử <br/><span className="text-[#0047F6]">Trải nghiệm</span>
              </h1>
              
              <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-lg">
                Khám phá tiềm năng khoa học và tư duy lãnh đạo của học sinh qua các lớp học thực nghiệm chuẩn quốc tế tại Global Science Journey.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#F4F7FF] flex items-center justify-center text-[#0047F6]">
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-[#0A2B70] leading-snug">Phương pháp<br/>thực chứng</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#F4F7FF] flex items-center justify-center text-[#0047F6]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-[#0A2B70] leading-snug">Tiêu chuẩn<br/>Quốc tế</span>
                </div>
              </div>

              <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white aspect-[4/3] md:aspect-video relative group mt-8">
                <img 
                  alt="Student working in lab" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="/science-class.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B70]/80 via-[#0A2B70]/30 to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-lg leading-snug italic">
                    "Môi trường học tập sáng tạo truyền cảm hứng cho những nhà khoa học tương lai."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,30,100,0.05)] border border-gray-100 p-8 lg:p-12">
                
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-[#0047F6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#0047F6]" />
                    </div>
                    <h3 className="text-3xl font-black text-[#0A2B70] mb-4">Đăng ký thành công!</h3>
                    <p className="text-gray-600 font-medium mb-8">
                      Cảm ơn bạn đã quan tâm. Đội ngũ GSJ sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận lịch học thử.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-[#F4F7FF] text-[#0047F6] font-bold py-3 px-8 rounded-full hover:bg-[#0047F6] hover:text-white transition-all"
                    >
                      Đăng ký thêm
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-10 text-center">
                      <h3 className="text-3xl font-black text-[#0A2B70] uppercase">Thông tin Đăng ký</h3>
                      <p className="text-gray-500 font-medium mt-3">Vui lòng điền thông tin để giữ chỗ nhận ưu đãi.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
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
                            <option>Lớp 7</option>
                            <option>Lớp 8</option>
                            <option>Lớp 9</option>
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

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A2B70] flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#0047F6]" /> Địa chỉ Email
                        </label>
                        <input className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-2 focus:ring-[#0047F6]/20 transition-all text-sm p-4 outline-none font-medium text-gray-800" placeholder="example@email.com" type="email" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0A2B70] flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[#0047F6]" /> Chương trình quan tâm
                        </label>
                        <select className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-2 focus:ring-[#0047F6]/20 transition-all text-sm p-4 outline-none font-medium text-gray-800 appearance-none">
                          <option value="">Chọn chương trình</option>
                          <option>Khoa học Thực hành & Nâng cao</option>
                          <option>Kỳ thi Chuẩn hoá Quốc tế (SAT/AP/A-Level)</option>
                          <option>Dự án Nghiên cứu Khoa học</option>
                          <option>Thực tập & Định hướng Du học</option>
                        </select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#0A2B70] flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#0047F6]" /> Cơ sở mong muốn
                          </label>
                          <select className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-2 focus:ring-[#0047F6]/20 transition-all text-sm p-4 outline-none font-medium text-gray-800 appearance-none">
                            <option>Sảnh A - Imperia Garden (Thanh Xuân)</option>
                            <option>Cơ sở ĐH Ngoại Thương</option>
                            <option>Học Online (Trực tuyến)</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-[#0A2B70] flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#0047F6]" /> Thời gian rảnh
                          </label>
                          <select className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-2 focus:ring-[#0047F6]/20 transition-all text-sm p-4 outline-none font-medium text-gray-800 appearance-none">
                            <option>Sáng cuối tuần</option>
                            <option>Chiều cuối tuần</option>
                            <option>Tối các ngày trong tuần</option>
                          </select>
                        </div>
                      </div>

                      <button type="submit" className="w-full bg-[#0047F6] text-white py-4.5 rounded-full font-bold text-lg hover:bg-[#05297A] hover:scale-[1.02] transition-all shadow-lg shadow-[#0047F6]/30 mt-6 flex items-center justify-center gap-2">
                        Xác nhận Đăng ký <Sparkles className="w-5 h-5"/>
                      </button>

                      <p className="text-center text-xs text-gray-500 font-medium pt-2">
                        Bằng việc nhấn đăng ký, bạn đồng ý với <Link href="#" className="underline text-[#0047F6]">Điều khoản</Link> và <Link href="#" className="underline text-[#0047F6]">Chính sách Bảo mật</Link> của GSJ.
                      </p>
                    </form>
                  </>
                )}

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-[40px] font-black text-[#0A2B70] uppercase">Tại sao nên chọn <span className="text-[#0047F6]">GSJ?</span></h2>
            <p className="mt-4 text-lg text-gray-600 font-medium max-w-2xl mx-auto">Hệ sinh thái giáo dục toàn diện, kết hợp giữa triết lý học thuật tiêu chuẩn toàn cầu và năng lực thực thi thế kỷ 21.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:border-[#0047F6]/30 hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-white shadow-md text-[#0047F6] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <BookOpen className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2B70] mb-3">Chương trình<br/>Tiêu chuẩn Quốc tế</h3>
              <p className="text-gray-600 font-medium text-[15px]">Giáo trình được thiết kế chuẩn hóa, phù hợp cho học sinh muốn chinh phục các trường Đại học Top đầu.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:border-[#0047F6]/30 hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-[#0047F6] shadow-md text-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                <GraduationCap className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2B70] mb-3">Đội ngũ Mentor<br/>Hàng đầu</h3>
              <p className="text-gray-600 font-medium text-[15px]">Giảng viên là các Tiến sĩ, Thạc sĩ xuất sắc từ các trường đại học Ivy League Mỹ, Anh, Úc.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:border-[#0047F6]/30 hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-white shadow-md text-[#0047F6] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <FlaskConical className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2B70] mb-3">Môi trường<br/>Thực hành Chuyên nghiệp</h3>
              <p className="text-gray-600 font-medium text-[15px]">Học sinh được cọ xát trực tiếp tại các phòng thí nghiệm, doanh nghiệp đa quốc gia và viện nghiên cứu.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CHĂM SÓC KHÁCH HÀNG / FAQ QUICK */}
      <section className="py-24 bg-[#FAFAFA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0047F6]/10 text-[#0047F6] mb-6 shadow-sm">
                <CalendarHeart className="w-8 h-8" />
             </div>
             <h2 className="text-3xl font-black text-[#0A2B70] uppercase">Bạn cần hỗ trợ thêm?</h2>
             <p className="mt-4 text-lg text-gray-600 font-medium">Đội ngũ Tuyển sinh GSJ luôn sẵn sàng giải đáp.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 pb-8">
             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Phone className="w-8 h-8 text-[#0047F6] mb-4" />
                <h4 className="font-bold text-[#0A2B70] text-lg mb-2">Gọi điện ngay</h4>
                <p className="text-gray-500 text-sm font-medium mb-4">Hotline hỗ trợ 24/7</p>
                <a href="tel:0327326655" className="text-xl font-black text-[#0047F6]">0327.326.655</a>
             </div>
             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Mail className="w-8 h-8 text-[#0047F6] mb-4" />
                <h4 className="font-bold text-[#0A2B70] text-lg mb-2">Gửi Email</h4>
                <p className="text-gray-500 text-sm font-medium mb-4">Chúng tôi sẽ phản hồi trong 2 giờ làm việc</p>
                <a href="mailto:info@gsj.edu.vn" className="text-lg font-bold text-[#0047F6]">info@gsj.edu.vn</a>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import React from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FlaskConical, Dna, Lightbulb, Users, GraduationCap, BookOpen, Brain, Rocket, Sparkles, User, Phone, CheckCircle2 } from "lucide-react";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFF] text-gray-800 font-sans overflow-x-hidden">
      <Nav />
      
      {/* SECTION 1: Chương trình chuyên sâu */}
      <section className="pt-36 pb-20 relative overflow-hidden" id="thuc-hanh">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#0047F6]/10 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(#6DB3F8 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <div className="inline-flex items-center px-5 py-2 rounded-full border border-[#0047F6]/30 text-[#0047F6] text-[13px] font-bold bg-white mb-6 shadow-sm">
                Cá nhân hoá & chuyên sâu
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#0A2B70] leading-[1.15] tracking-tight">
                Chương trình<br />
                chuyên sâu <span className="text-[#0047F6]">tại GSJ</span>
              </h1>
              <div className="w-20 h-1.5 bg-[#0047F6] mt-6"></div>
            </div>
            
            <div className="hidden md:flex bg-[#0047F6] text-white text-5xl font-black w-24 h-24 rounded-3xl shadow-lg mt-6 md:mt-0 items-center justify-center -mr-4">
              05
            </div>
          </div>

          {/* Row 1: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E0E8FF] flex flex-col xl:flex-row gap-6 items-start hover:-translate-y-1 transition-transform duration-300">
              <div className="w-20 h-20 shrink-0 bg-[#F4F7FF] rounded-full flex items-center justify-center relative">
                <div className="absolute top-0 left-0 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                  <span className="text-[#0047F6] text-[10px]">⚛️</span>
                </div>
                <FlaskConical className="w-10 h-10 text-[#0047F6]" />
              </div>
              <div>
                <h3 className="text-[19px] font-black text-[#0A2B70] mb-3 leading-snug">Chương trình<br />Khoa học Thực hành</h3>
                <p className="text-[14px] text-[#4B5563] leading-relaxed">
                  Chương trình tích hợp các lĩnh vực Khoa học Tự nhiên với 100% các buổi học đều có hoạt động thí nghiệm/dự án STEM/DIY, giúp học sinh củng cố nền tảng kiến thức Khoa học vững chắc, rèn luyện kỹ năng thực nghiệm và tư duy giải quyết vấn đề.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E0E8FF] flex flex-col xl:flex-row gap-6 items-start hover:-translate-y-1 transition-transform duration-300">
              <div className="w-20 h-20 shrink-0 bg-[#F4F7FF] rounded-full flex items-center justify-center relative">
                <div className="absolute top-0 left-0 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                   <span className="text-[#0047F6] text-[10px]">💡</span>
                </div>
                <Dna className="w-10 h-10 text-[#0047F6]" />
              </div>
              <div>
                <h3 className="text-[19px] font-black text-[#0A2B70] mb-3 leading-snug">Chương trình Vật lý -<br />Hoá học - Sinh học nâng cao</h3>
                <p className="text-[14px] text-[#4B5563] leading-relaxed">
                  Hệ thống chương trình chuyên sâu theo từng lĩnh vực Khoa học Tự nhiên, kết hợp giảng dạy lý thuyết, các chuyên đề nâng cao và thực hành, dự án STEM giúp học sinh có nền tảng kiến thức vững chắc, giải thành thạo các dạng bài tập nâng cao.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Stats */}
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E0E8FF] mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
              
              <div className="flex items-center gap-5 sm:pl-0 pt-4 sm:pt-0">
                <div className="w-14 h-14 rounded-full bg-[#F0F4FF] flex items-center justify-center shrink-0">
                  <FlaskConical className="w-7 h-7 text-[#0047F6]" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-[#0047F6] leading-none mb-1.5">100%</h4>
                  <p className="text-[13px] font-semibold text-[#4B5563] leading-snug">Giờ học có hoạt<br />động thực hành</p>
                </div>
              </div>

              <div className="flex items-center gap-5 lg:pl-8 pt-6 sm:pt-0">
                <div className="w-14 h-14 rounded-full bg-[#F0F4FF] flex items-center justify-center shrink-0">
                  <Lightbulb className="w-7 h-7 text-[#0047F6]" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-[#0047F6] leading-none mb-1.5">12+</h4>
                  <p className="text-[13px] font-semibold text-[#4B5563] leading-snug">Dự án STEM &<br />DIY mỗi khoá</p>
                </div>
              </div>

              <div className="flex items-center gap-5 lg:pl-8 pt-6 lg:pt-0">
                <div className="w-14 h-14 rounded-full bg-[#F0F4FF] flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7 text-[#0047F6]" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-[#0047F6] leading-none mb-1.5">1:1</h4>
                  <p className="text-[13px] font-semibold text-[#4B5563] leading-snug">Cố vấn học tập &<br />định hướng khối STEM</p>
                </div>
              </div>

              <div className="flex items-center gap-5 lg:pl-8 pt-6 lg:pt-0">
                <div className="w-14 h-14 rounded-full bg-[#F0F4FF] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7 text-[#0047F6]" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-[#0047F6] leading-none mb-1.5">02</h4>
                  <p className="text-[13px] font-semibold text-[#4B5563] leading-snug">Khung chương trình<br />tham chiếu (MOET - Cambridge)</p>
                </div>
              </div>

            </div>
          </div>

          {/* Row 3: Roadmap bar */}
          <div className="bg-[#EEF2FF] rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white flex flex-col xl:flex-row items-center gap-8 xl:gap-4 relative overflow-hidden">
            <div className="w-full xl:w-1/4 flex justify-center xl:justify-start xl:pl-4">
               {/* Use an abstract 3D science image placeholder */}
               <img src="https://images.unsplash.com/photo-1614935151651-0bea6508ab6b?w=400&h=400&fit=crop" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mix-blend-multiply opacity-80" alt="Science Background" />
            </div>
            
            <div className="w-full xl:w-3/4 flex flex-col md:flex-row gap-6 relative z-10 justify-between">
               
               {/* Step 1 */}
               <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-[#E0E8FF] relative group hover:-translate-y-1 transition-transform">
                  <div className="absolute top-1/2 -right-3 w-6 h-0.5 border-t-2 border-dashed border-[#0047F6] hidden md:block"></div>
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-lg bg-[#0A2B70] text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md">01</div>
                     <BookOpen className="w-7 h-7 text-[#0047F6]" />
                  </div>
                  <h5 className="font-bold text-[#0A2B70] text-[16px] leading-tight mb-2">Nền tảng kiến thức vững chắc</h5>
                  <p className="text-[13px] text-[#4B5563] leading-relaxed">Củng cố và nắm vững kiến thức trọng tâm trong chương trình Khoa học, Khoa học tự nhiên, kết nối ứng dụng thực tế.</p>
               </div>

               {/* Step 2 */}
               <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-[#E0E8FF] relative group hover:-translate-y-1 transition-transform">
                  <div className="absolute top-1/2 -right-3 w-6 h-0.5 border-t-2 border-dashed border-[#0047F6] hidden md:block"></div>
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-lg bg-[#0047F6] text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md">02</div>
                     <Brain className="w-7 h-7 text-[#0047F6]" />
                  </div>
                  <h5 className="font-bold text-[#0A2B70] text-[16px] leading-tight mb-2">Phát triển tư duy khoa học từ sớm</h5>
                  <p className="text-[13px] text-[#4B5563] leading-relaxed">Kích thích hứng thú tìm tòi và khai phá tiềm năng khoa học tự nhiên. Rèn luyện tư duy logic, phản biện và kỹ năng 4Cs.</p>
               </div>

               {/* Step 3 */}
               <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-[#E0E8FF] relative group hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-lg bg-[#0047F6] text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md">03</div>
                     <Rocket className="w-7 h-7 text-[#0047F6]" />
                  </div>
                  <h5 className="font-bold text-[#0A2B70] text-[16px] leading-tight mb-2">Tiếp cận định hướng nghề nghiệp sớm</h5>
                  <p className="text-[13px] text-[#4B5563] leading-relaxed">Phát hiện sớm và bồi dưỡng học sinh theo năng lực, sở trường và định hướng tổ hợp môn ở THPT.</p>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Form Đăng Ký */}
      <section className="py-20 bg-white border-t border-[#E0E8FF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,30,120,0.08)] border border-[#E0E8FF] overflow-hidden flex flex-col md:flex-row">
            
            {/* Form Info Side */}
            <div className="w-full md:w-5/12 bg-gradient-to-br from-[#0A2B70] to-[#0047F6] text-white p-10 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-black uppercase mb-4 leading-tight">Giữ chỗ ngay</h2>
                 <p className="text-blue-100 text-[15px] font-medium leading-relaxed mb-8">
                   Điền thông tin bên dưới để chuyên gia của GSJ liên hệ và tư vấn chi tiết về Lộ trình Khoa học Thực hành.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex gap-3 items-center">
                       <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                       <span className="text-[15px] font-semibold">Tư vấn lộ trình 1:1 miễn phí</span>
                    </li>
                    <li className="flex gap-3 items-center">
                       <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                       <span className="text-[15px] font-semibold">Nhận test năng lực đầu vào</span>
                    </li>
                 </ul>
               </div>
            </div>

            {/* Form Fields Side */}
            <div className="w-full md:w-7/12 p-10">
               <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Đăng ký thành công! Đội ngũ GSJ sẽ sớm liên hệ."); }}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="space-y-2">
                     <label className="text-[11px] font-bold text-[#0A2B70] uppercase tracking-wider flex items-center gap-1.5">
                       <User className="w-3.5 h-3.5 text-[#0047F6]" /> Tên Phụ huynh
                     </label>
                     <input required className="w-full rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-1 focus:ring-[#0047F6] transition-all text-[14px] p-3.5 outline-none font-semibold text-gray-800" placeholder="Nguyễn Văn A" type="text" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[11px] font-bold text-[#0A2B70] uppercase tracking-wider flex items-center gap-1.5">
                       <GraduationCap className="w-3.5 h-3.5 text-[#0047F6]" /> Tên Học sinh
                     </label>
                     <input required className="w-full rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-1 focus:ring-[#0047F6] transition-all text-[14px] p-3.5 outline-none font-semibold text-gray-800" placeholder="Nguyễn Khắc B" type="text" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-[11px] font-bold text-[#0A2B70] uppercase tracking-wider flex items-center gap-1.5">
                     <Phone className="w-3.5 h-3.5 text-[#0047F6]" /> Số điện thoại liên hệ
                   </label>
                   <input required className="w-full rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-1 focus:ring-[#0047F6] transition-all text-[14px] p-3.5 outline-none font-semibold text-gray-800" placeholder="090 123 4567" type="tel" />
                 </div>

                 <button type="submit" className="w-full bg-[#0047F6] text-white py-4 rounded-xl font-bold text-[15px] hover:bg-[#0A2B70] hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl mt-4 flex items-center justify-center gap-2 uppercase tracking-wide">
                   Đăng ký Tư vấn ngay <Sparkles className="w-4 h-4"/>
                 </button>
                 <p className="text-center text-[12px] text-gray-400 font-medium">Bảo mật thông tin khách hàng 100%</p>
               </form>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

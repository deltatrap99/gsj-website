"use client";

import Link from "next/link";
import Image from "next/image";

export default function Register() {
  return (
    <>
      

<header className="sticky top-0 z-50 w-full border-b border-slate-100 glass-effect">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-white text-2xl">science</span>
</div>
<div>
<h1 className="text-primary font-bold text-xl tracking-tight">GSJ</h1>
<p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Global Science Journey</p>
</div>
</div>
<nav className="hidden md:flex space-x-10">
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Programs</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Achievements</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Resources</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden lg:block text-sm font-semibold text-primary px-4 py-2">Log In</button>
<button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all shadow-md">
                        Join Now
                    </button>
</div>
</div>
</div>
</header>

<section className="relative bg-slate-50 py-16 lg:py-24 overflow-hidden">
<div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-xs font-bold uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
</span>
                        Admission Open 2024
                    </div>
<h1 className="text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tight">
                        Đăng ký Học thử <br/><span className="text-accent-green" />Trải nghiệm</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                        Khám phá tiềm năng khoa học và tư duy lãnh đạo của học sinh qua các lớp học thực nghiệm chuẩn quốc tế tại Global Science Journey.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
<span className="material-symbols-outlined">verified</span>
</div>
<span className="text-sm font-semibold text-slate-700">STEM Certified</span>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
<span className="material-symbols-outlined">public</span>
</div>
<span className="text-sm font-semibold text-slate-700">Global Standards</span>
</div>
</div>
<div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video relative group">
<img alt="Student working in a modern chemistry lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Student conducting a science experiment in lab" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0cu6-q_DSzgiT4N0qPyLojApzBvJ6vTx2SqzMppN_U08YgNdpvR25zW0czCFNRvxh651JnTczTv0maS1UPWPQM_o2f2Nrx43iam73zovs8CuLjIE_xHlUEmHoS6EGlRvbcWFdunMQFztgiUeyp5r3n6MScUjpLwSAwLTplZIh1F8OXu2xazrG0U2uJqmFXJnO5m0d3SWLoZ6HCwh-o0wh6i6eFxHO_6hM-4UdAmn6HuEtW9H05dEz6RAqOSnZsWw1FNONWFU_Tpk"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
<p className="text-white font-medium italic">"Môi trường học tập sáng tạo truyền cảm hứng cho những nhà khoa học tương lai."</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
<div className="mb-8">
<h3 className="text-2xl font-bold text-primary">Trial Class Registration</h3>
<p className="text-slate-500 text-sm mt-1">Fill in the details below to secure your spot.</p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Parent Name</label>
<input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-sm p-3" placeholder="Nguyễn Văn A" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Student Name</label>
<input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-sm p-3" placeholder="Nguyễn Thu B" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Current Grade</label>
<select className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-sm p-3">
<option>Select Grade</option>
<option>Grade 6</option>
<option>Grade 7</option>
<option>Grade 8</option>
<option>Grade 9</option>
<option>High School</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
<input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-sm p-3" placeholder="090 123 4567" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
<input className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-sm p-3" placeholder="example@email.com" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Interested Program</label>
<select className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-sm p-3">
<option>Select a program</option>
<option>Practical Science</option>
<option>Research &amp; Development</option>
<option>Applied Bio Science (ABS)</option>
<option>SAT Elite</option>
<option>Career Camp</option>
</select>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Branch</label>
<select className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-sm p-3">
<option>Main Campus (District 1)</option>
<option>Academic Center (District 7)</option>
<option>Online Session</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time</label>
<select className="w-full rounded-lg border-slate-200 focus:border-primary focus:ring-primary text-sm p-3">
<option>Weekend Morning</option>
<option>Weekend Afternoon</option>
<option>Weekday Evening</option>
</select>
</div>
</div>
<button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-95 transition-all shadow-lg shadow-primary/20 mt-4" type="submit">
                            Đăng ký ngay
                        </button>
<p className="text-center text-xs text-slate-400 mt-4">
                            By clicking, you agree to our <a className="underline" href="#">Terms of Service</a> and <a className="underline" href="#">Privacy Policy</a>.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Tại sao nên chọn GSJ?</h2>
<p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Chúng tôi mang đến nền tảng giáo dục khoa học toàn diện, kết hợp giữa lý thuyết và thực hành chuyên sâu.</p>
</div>
<div className="grid md:grid-cols-3 gap-12">
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
<span className="material-symbols-outlined text-4xl">menu_book</span>
</div>
<h3 className="text-xl font-bold text-primary">International Curriculum</h3>
<p className="text-slate-600">Giáo trình chuẩn quốc tế được thiết kế bởi các chuyên gia hàng đầu từ các trường đại học danh tiếng.</p>
</div>
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-accent-green/5 text-accent-green rounded-2xl flex items-center justify-center mx-auto mb-6">
<span className="material-symbols-outlined text-4xl">school</span>
</div>
<h3 className="text-xl font-bold text-primary">Expert Mentors</h3>
<p className="text-slate-600">Đội ngũ giảng viên là các Tiến sĩ, Thạc sĩ có kinh nghiệm nghiên cứu và giảng dạy tại nước ngoài.</p>
</div>
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
<span className="material-symbols-outlined text-4xl">biotech</span>
</div>
<h3 className="text-xl font-bold text-primary">Modern Lab Facilities</h3>
<p className="text-slate-600">Phòng thí nghiệm hiện đại với trang thiết bị tối tân, đảm bảo môi trường thực hành an toàn và chuyên nghiệp.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-extrabold text-primary">Success Stories</h2>
<p className="mt-2 text-slate-600">Những thành tựu nổi bật của học viên GSJ trên đấu trường quốc tế.</p>
</div>
<a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
                    See all achievements <span className="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-video relative">
<img alt="Student receiving award" className="w-full h-full object-cover" data-alt="Student holding a science competition trophy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd4oMXsGhEgOoJFcxYrTbIJhVB_dQXUmr1XYp5VO7z5OAv6Yq9IaMLo_DACXnIl4LxDsqfOfxUGaKI3lcV-ixWEUOhJ58ilO3zu-7Iv9HezemzXai2pPqAy4pO4b3vN7ZsuFWhguA9J4KC-6ztWGxrhKogCC8elOxwqAi3ie2nrZK0h512E5zpzLVx_V7PiQGBrW3NTD_aiWZBmCosW98uWeQ1TkDPTwY-F4l72cjTx-0w1MPiB6bkWfAE3KjNVvATFnWi2RrztmA"/>
<div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">2023 WINNER</div>
</div>
<div className="p-6">
<h4 className="text-lg font-bold text-primary mb-2">Huy chương Vàng ISEF 2023</h4>
<p className="text-sm text-slate-600">Dự án nghiên cứu về vi khuẩn tự phân hủy nhựa của nhóm học viên GSJ.</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-video relative">
<img alt="Students in international lab" className="w-full h-full object-cover" data-alt="Group of students working in chemistry lab" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyaB71x6p_zC09VxdUPdag3KpVpjzY30K7ZI_yMKvX6lM382L3_pz9UojdMl36tpSCA6igir212txJR3lS7riFzC6KTvxl46NvgeGilZDCOtaU437KxbR9LvwPcYCU_oACuN_5BxNE_A69DgubLxG3DvSa0xQ90VR9Yj6VMPyugfqtiLXep8mpcuaLfdc39YmiJa-zqAXTbcg7Gkll9l3-h29jlyTRTHQRZiMdJVpu3Ifut6yjWOq2xQM6_uNFiVpSY9bH_glKLVc"/>
<div className="absolute top-4 left-4 bg-accent-green text-white text-[10px] font-bold px-2 py-1 rounded">IVY LEAGUE</div>
</div>
<div className="p-6">
<h4 className="text-lg font-bold text-primary mb-2">Học bổng Harvard University</h4>
<p className="text-sm text-slate-600">Cựu học viên SAT Elite khóa 2022 xuất sắc giành học bổng toàn phần.</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-video relative">
<img alt="Students presenting project" className="w-full h-full object-cover" data-alt="Students presenting scientific research poster" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDicZ9XoaXFc8X2xpwEJLmovuRdfAkTXGEFdNaI7bJ5XqnfRunrkF5sp6tpZekjD-6d2vnhjkuMerUFrx-SbZXUZEZvEoWe2c6bUzqcKqx2wGl-KWJfztTU1CDt31rNyNROX0epfLM_yeFy3uNfWVdD4AxJYIwAWd0B-z7wL8gMUYT8vGopDed7U7b1PRWIQr9XDsFG1WsjDBi3_HP67HzPwt9X_Me745r5hzMfT0mkTtI5OTcG9RZeSkBx_tSwLKNgO9TGaoDsGtk"/>
<div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">RESEARCH</div>
</div>
<div className="p-6">
<h4 className="text-lg font-bold text-primary mb-2">Published Paper at 17</h4>
<p className="text-sm text-slate-600">Công bố nghiên cứu trên tạp chí Khoa học Quốc tế từ dự án Research Camp.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-extrabold text-primary text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="border border-slate-200 rounded-xl p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="font-bold text-primary">Lớp học thử có mất phí không?</h4>
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">expand_more</span>
</div>
<p className="mt-4 text-slate-600 text-sm">Buổi trải nghiệm đầu tiên hoàn toàn miễn phí cho học sinh đăng ký qua website lần đầu, giúp các em khám phá định hướng phù hợp.</p>
</div>
<div className="border border-slate-200 rounded-xl p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="font-bold text-primary">Cần chuẩn bị gì cho buổi học trải nghiệm?</h4>
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">expand_more</span>
</div>
<p className="mt-4 text-slate-600 text-sm">GSJ cung cấp toàn bộ dụng cụ thí nghiệm và tài liệu. Học sinh chỉ cần mang theo tinh thần ham học hỏi và sổ ghi chép cá nhân.</p>
</div>
<div className="border border-slate-200 rounded-xl p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h4 className="font-bold text-primary">Lịch học thử được sắp xếp như thế nào?</h4>
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">expand_more</span>
</div>
<p className="mt-4 text-slate-600 text-sm">Sau khi đăng ký, tư vấn viên sẽ gọi điện xác nhận và sắp xếp lịch phù hợp với thời gian biểu của học sinh trong vòng 24 giờ.</p>
</div>
</div>
</div>
</section>

<footer className="bg-primary text-slate-300 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-white/10 flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-white text-xl">science</span>
</div>
<h2 className="text-white font-bold text-xl">GSJ</h2>
</div>
<p className="text-sm leading-relaxed">Hành trình khoa học toàn cầu kiến tạo những nhà lãnh đạo tương lai thông qua giáo dục thực nghiệm chuẩn quốc tế.</p>
<div className="flex gap-4 mt-6">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="#"><span className="material-symbols-outlined text-sm">social_leaderboard</span></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
</div>
</div>
<div>
<h5 className="text-white font-bold mb-6">Quick Links</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-accent-green transition-colors" href="#">Academic Programs</a></li>
<li><a className="hover:text-accent-green transition-colors" href="#">Research Opportunities</a></li>
<li><a className="hover:text-accent-green transition-colors" href="#">Student Life</a></li>
<li><a className="hover:text-accent-green transition-colors" href="#">Scholarships</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-6">Programs</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-accent-green transition-colors" href="#">SAT Elite</a></li>
<li><a className="hover:text-accent-green transition-colors" href="#">Practical Science</a></li>
<li><a className="hover:text-accent-green transition-colors" href="#">Career Camp</a></li>
<li><a className="hover:text-accent-green transition-colors" href="#">Ecosystem Pages</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-6">Contact Us</h5>
<ul className="space-y-4 text-sm">
<li className="flex gap-3">
<span className="material-symbols-outlined text-accent-green text-sm">location_on</span>
                            123 Academic Way, District 1, HCMC
                        </li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-accent-green text-sm">call</span>
                            +84 28 1234 5678
                        </li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-accent-green text-sm">mail</span>
                            admissions@gsj.edu.vn
                        </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium">
<p>© 2024 Global Science Journey. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}

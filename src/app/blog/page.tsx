"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Clock, ArrowRight, Tag, Search, BookOpen, Users, GraduationCap, Lightbulb, Globe, TrendingUp, ChevronRight } from "lucide-react";

// --- Blog Data ---
const categories = [
  { id: "all", name: "Tất cả", icon: <BookOpen className="w-4 h-4" /> },
  { id: "tips", name: "Bí kíp học tập", icon: <Lightbulb className="w-4 h-4" /> },
  { id: "parents", name: "Dành cho Phụ huynh", icon: <Users className="w-4 h-4" /> },
  { id: "abroad", name: "Du học", icon: <Globe className="w-4 h-4" /> },
  { id: "career", name: "Định hướng nghề", icon: <TrendingUp className="w-4 h-4" /> },
  { id: "science", name: "Khoa học", icon: <GraduationCap className="w-4 h-4" /> },
];

const blogPosts = [
  {
    slug: "chien-luoc-sat-1500-tu-a-den-z",
    title: "Chiến lược chinh phục SAT 1500+ từ A đến Z cho học sinh Việt Nam",
    excerpt: "Tổng hợp kinh nghiệm và lộ trình ôn luyện SAT hiệu quả nhất từ đội ngũ mentor GSJ, giúp học sinh bứt phá điểm số trong thời gian ngắn nhất.",
    category: "tips",
    date: "18 Tháng 4, 2026",
    readTime: "8 phút đọc",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200",
    featured: true,
    author: { name: "ThS. Nguyễn Minh Anh", role: "Chuyên gia SAT" },
  },
  {
    slug: "5-sai-lam-ho-so-du-hoc",
    title: "5 sai lầm phổ biến khi làm hồ sơ du học mà phụ huynh cần tránh",
    excerpt: "Nhiều gia đình đã bỏ lỡ cơ hội vàng vì những lỗi tưởng nhỏ nhưng lại quyết định trong quá trình nộp hồ sơ du học. Hãy tránh ngay 5 sai lầm này.",
    category: "parents",
    date: "15 Tháng 4, 2026",
    readTime: "6 phút đọc",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200",
    featured: false,
    author: { name: "Cô Đặng Thuý Nga", role: "Founder GSJ" },
  },
  {
    slug: "top-10-truong-dai-hoc-uc-hoc-bong",
    title: "Top 10 trường Đại học Úc cấp học bổng cao nhất cho học sinh Việt",
    excerpt: "Danh sách chi tiết các trường Đại học hàng đầu nước Úc với chính sách học bổng hấp dẫn dành riêng cho sinh viên quốc tế từ Việt Nam.",
    category: "abroad",
    date: "12 Tháng 4, 2026",
    readTime: "10 phút đọc",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200",
    featured: false,
    author: { name: "TS. Alexander Vu", role: "Cố vấn Du học" },
  },
  {
    slug: "phuong-phap-stem-giao-duc",
    title: "Phương pháp STEM: Tại sao học sinh cần thực hành khoa học từ sớm?",
    excerpt: "Giáo dục STEM không chỉ là xu hướng mà là nền tảng cho tương lai. Tìm hiểu vì sao việc tiếp cận thực hành sớm giúp trẻ phát triển tư duy vượt trội.",
    category: "science",
    date: "10 Tháng 4, 2026",
    readTime: "7 phút đọc",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200",
    featured: false,
    author: { name: "ThS. Trần Đức Minh", role: "Giám đốc STEM Lab" },
  },
  {
    slug: "dinh-huong-nghe-cho-hoc-sinh-thpt",
    title: "Định hướng nghề nghiệp cho học sinh THPT: Bắt đầu từ đâu?",
    excerpt: "Hướng dẫn phụ huynh và học sinh cách khám phá đam mê, đánh giá năng lực bản thân và lựa chọn ngành nghề phù hợp trước ngưỡng cửa đại học.",
    category: "career",
    date: "8 Tháng 4, 2026",
    readTime: "9 phút đọc",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    featured: false,
    author: { name: "Sarah Nguyen", role: "Chiến lược gia Du học" },
  },
  {
    slug: "lam-the-nao-de-con-tu-giac-hoc",
    title: "Làm thế nào để con tự giác học tập? 7 phương pháp hiệu quả",
    excerpt: "Bí quyết giúp phụ huynh xây dựng thói quen tự học cho con mà không cần ép buộc, tạo động lực nội tại từ bên trong thông qua trải nghiệm thực tế.",
    category: "parents",
    date: "5 Tháng 4, 2026",
    readTime: "6 phút đọc",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200",
    featured: false,
    author: { name: "Cô Đặng Thuý Nga", role: "Founder GSJ" },
  },
  {
    slug: "ap-exam-chon-mon-nao",
    title: "Kỳ thi AP: Nên chọn môn nào để tối ưu hồ sơ đại học Mỹ?",
    excerpt: "Phân tích chi tiết từng môn AP phổ biến, độ khó và giá trị đối với hồ sơ xét tuyển đại học tại Mỹ. Lời khuyên từ chuyên gia GSJ.",
    category: "tips",
    date: "2 Tháng 4, 2026",
    readTime: "11 phút đọc",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200",
    featured: false,
    author: { name: "David Tran", role: "Chuyên gia SAT & AP" },
  },
  {
    slug: "nghien-cuu-khoa-hoc-cap-quoc-gia",
    title: "Hành trình từ phòng Lab GSJ đến giải thưởng Nghiên cứu cấp Quốc gia",
    excerpt: "Câu chuyện truyền cảm hứng của học sinh Minh Châu - từ buổi thực hành đầu tiên tại GSJ đến giải Nhất cuộc thi KHKT Quốc gia và công bố trên tạp chí quốc tế.",
    category: "science",
    date: "28 Tháng 3, 2026",
    readTime: "12 phút đọc",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1200",
    featured: false,
    author: { name: "ThS. Trần Đức Minh", role: "Giám đốc STEM Lab" },
  },
];

// --- Hero Section ---
const BlogHero = () => {
  const featured = blogPosts.find((p) => p.featured);
  if (!featured) return null;

  return (
    <section className="relative pt-32 pb-6 lg:pt-40 lg:pb-10 overflow-hidden bg-gradient-to-br from-[#F4F7FF] via-[#E8EFFF] to-[#D4E2FF]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0047F6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0047F6]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-[6px] bg-[#0047F6] text-white text-[13px] font-bold uppercase tracking-widest mb-6 shadow-md">
            GSJ Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-black text-[#0A2B70] mb-6 leading-[1.1] tracking-tight uppercase">
            Chia sẻ & <span className="text-[#0047F6]">Truyền cảm hứng</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Những bài viết hữu ích về học tập, du học, và phát triển bản thân dành cho Phụ huynh & Học sinh.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href={`/blog/${featured.slug}`} className="block group">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,33,71,0.1)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-7/12 aspect-[16/9] lg:aspect-auto overflow-hidden relative">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0047F6] text-white px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider shadow-md">
                  ⭐ Bài viết nổi bật
                </div>
              </div>
              <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#0047F6] text-[13px] font-bold uppercase tracking-wider">
                    {categories.find((c) => c.id === featured.category)?.name}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-[#0A2B70] uppercase leading-tight mb-4 group-hover:text-[#0047F6] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F4F7FF] flex items-center justify-center text-[#0047F6] font-bold text-sm border border-[#0047F6]/10">
                      {featured.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0A2B70]">{featured.author.name}</p>
                      <p className="text-xs text-gray-500 font-medium">{featured.date}</p>
                    </div>
                  </div>
                  <span className="text-[#0047F6] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Đọc thêm <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// --- Blog Grid ---
const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .filter(
      (p) =>
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Search */}
          <div className="mb-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#0047F6] focus:ring-2 focus:ring-[#0047F6]/10 transition-all text-sm outline-none font-medium text-gray-800"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all border ${
                  activeCategory === cat.id
                    ? "bg-[#0047F6] text-white border-[#0047F6] shadow-[0_8px_20px_rgba(0,71,246,0.25)]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#0047F6]/50 hover:text-[#0047F6]"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-md text-[#0047F6] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-white/50 shadow-sm">
                          {categories.find((c) => c.id === post.category)?.name}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3 text-sm">
                        <span className="text-gray-400 font-medium">{post.date}</span>
                        <span className="text-gray-200">•</span>
                        <span className="text-gray-400 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-[#0A2B70] uppercase leading-snug mb-3 group-hover:text-[#0047F6] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Author & Read More */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#F4F7FF] flex items-center justify-center text-[#0047F6] font-bold text-xs border border-[#0047F6]/10">
                            {post.author.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#0A2B70]">{post.author.name}</p>
                            <p className="text-[10px] text-gray-400 font-medium">{post.author.role}</p>
                          </div>
                        </div>
                        <span className="text-[#0047F6] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Đọc <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-400 mb-2">Không tìm thấy bài viết</h3>
            <p className="text-gray-400 font-medium">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
          </div>
        )}
      </div>
    </section>
  );
};

// --- Newsletter CTA ---
const NewsletterCTA = () => (
  <section className="py-20 bg-[#FAFAFA] border-t border-gray-200">
    <div className="max-w-4xl mx-auto px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#0047F6] to-[#0A2B70] rounded-[2.5rem] p-10 lg:p-16 shadow-2xl text-white relative overflow-hidden text-center"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0A2B70]/50 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 leading-tight">
            Nhận bài viết mới <br />
            <span className="text-yellow-400">mỗi tuần</span>
          </h2>
          <p className="text-blue-100 font-medium mb-8 max-w-lg mx-auto">
            Đăng ký nhận bản tin từ GSJ để cập nhật những kiến thức mới nhất về giáo dục, du học và phát triển bản thân.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Đăng ký nhận bản tin thành công! 🎉");
            }}
          >
            <input
              type="email"
              required
              placeholder="Nhập email của bạn..."
              className="flex-1 px-5 py-4 rounded-xl text-gray-800 font-medium text-sm outline-none focus:ring-2 focus:ring-yellow-400 border-0"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-[#0A2B70] px-8 py-4 rounded-xl font-bold text-sm hover:bg-yellow-300 transition-colors shadow-lg shrink-0"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#0047F6]/20 selection:text-[#001955] overflow-x-hidden">
      <Nav />
      <BlogHero />
      <BlogGrid />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}

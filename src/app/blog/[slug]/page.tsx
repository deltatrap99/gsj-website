"use client";

import React from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Clock, ArrowLeft, Calendar, User, Tag, Share2, BookOpen, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";

// --- Blog Data (same as listing, for demo) ---
const blogPosts: Record<string, {
  slug: string; title: string; excerpt: string; category: string; categoryLabel: string;
  date: string; readTime: string; image: string;
  author: { name: string; role: string };
  content: string[];
}> = {
  "chien-luoc-sat-1500-tu-a-den-z": {
    slug: "chien-luoc-sat-1500-tu-a-den-z",
    title: "Chiến lược chinh phục SAT 1500+ từ A đến Z cho học sinh Việt Nam",
    excerpt: "Tổng hợp kinh nghiệm và lộ trình ôn luyện SAT hiệu quả nhất từ đội ngũ mentor GSJ.",
    category: "tips", categoryLabel: "Bí kíp học tập",
    date: "18 Tháng 4, 2026", readTime: "8 phút đọc",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200",
    author: { name: "ThS. Nguyễn Minh Anh", role: "Chuyên gia SAT" },
    content: [
      "Kỳ thi SAT là một trong những bài thi chuẩn hóa quan trọng nhất cho hành trình du học Mỹ. Với format mới Digital SAT, việc chuẩn bị đúng đắn sẽ giúp học sinh tiết kiệm thời gian và đạt kết quả tối ưu.",
      "## 1. Hiểu rõ cấu trúc đề thi SAT mới",
      "SAT Digital gồm 2 phần chính: Reading & Writing (RW) và Math. Mỗi phần có 2 module, trong đó module 2 sẽ được điều chỉnh độ khó dựa trên kết quả module 1. Đây là điểm then chốt mà nhiều học sinh bỏ qua.",
      "## 2. Xây dựng nền tảng vững chắc (Tháng 1-2)",
      "Trong giai đoạn đầu, hãy tập trung vào việc mở rộng vốn từ vựng học thuật và ôn luyện ngữ pháp nền tảng. Đối với phần Math, cần nắm vững các chủ đề Algebra, Advanced Math, và Problem Solving. GSJ khuyến nghị học sinh dành ít nhất 2 tiếng mỗi ngày cho giai đoạn này.",
      "## 3. Chiến thuật làm bài phần Reading & Writing",
      "Phần RW chiếm 50% tổng điểm SAT. Kỹ thuật annotation (gạch chân, ghi chú) khi đọc passage sẽ giúp học sinh tiết kiệm thời gian đáng kể. Ngoài ra, việc nhận diện dạng câu hỏi (Main Idea, Inference, Vocabulary in Context) giúp áp dụng chiến thuật phù hợp.",
      "## 4. Luyện đề thi thực chiến (Tháng 3-4)",
      "Sử dụng tài liệu từ College Board (Bluebook App) để luyện tập. Mỗi tuần nên hoàn thành ít nhất 2 bộ đề full để làm quen với áp lực thời gian. Sau mỗi bài thi thử, phân tích kỹ từng câu sai để không lặp lại lỗi.",
      "## 5. Bí quyết bứt phá từ 1400 lên 1500+",
      "Điểm khác biệt giữa level 1400 và 1500+ nằm ở khả năng tránh \"bẫy\" trong câu hỏi khó. Tại GSJ, mentor sẽ đồng hành phân tích pattern câu hỏi khó và xây dựng chiến thuật loại trừ đáp án nhiễu hiệu quả.",
      "## Kết luận",
      "Hành trình chinh phục SAT 1500+ không phải là không thể, nhưng đòi hỏi một lộ trình rõ ràng và sự kiên trì. Với sự đồng hành của đội ngũ mentor giàu kinh nghiệm tại GSJ, học sinh hoàn toàn có thể tự tin bước vào phòng thi và đạt kết quả như mong đợi.",
    ],
  },
  "5-sai-lam-ho-so-du-hoc": {
    slug: "5-sai-lam-ho-so-du-hoc",
    title: "5 sai lầm phổ biến khi làm hồ sơ du học mà phụ huynh cần tránh",
    excerpt: "Nhiều gia đình đã bỏ lỡ cơ hội vàng vì những lỗi tưởng nhỏ nhưng lại quyết định.",
    category: "parents", categoryLabel: "Dành cho Phụ huynh",
    date: "15 Tháng 4, 2026", readTime: "6 phút đọc",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200",
    author: { name: "Cô Đặng Thuý Nga", role: "Founder GSJ" },
    content: [
      "Quá trình chuẩn bị hồ sơ du học là giai đoạn quan trọng và nhạy cảm. Một sai sót nhỏ có thể khiến con bạn bỏ lỡ cơ hội trúng tuyển vào trường mơ ước.",
      "## Sai lầm 1: Bắt đầu quá muộn",
      "Nhiều gia đình chỉ bắt đầu chuẩn bị hồ sơ du học khi con học lớp 12. Thực tế, quá trình xây dựng profile cần bắt đầu từ lớp 9-10. Điều này bao gồm hoạt động ngoại khóa, thành tích học thuật, và các dự án cá nhân.",
      "## Sai lầm 2: Chạy theo số lượng thay vì chất lượng hoạt động",
      "Phụ huynh thường nghĩ rằng con tham gia càng nhiều hoạt động càng tốt. Tuy nhiên, các trường đại học Top đánh giá cao sự cam kết dài hạn và thành tích chuyên sâu trong 2-3 lĩnh vực hơn là tham gia qua loa 10 câu lạc bộ.",
      "## Sai lầm 3: Essay thiếu cá tính",
      "Bài luận (Personal Statement) là cơ hội để thể hiện con người thực sự của con bạn. Nhiều học sinh viết essay theo khuôn mẫu, thiếu câu chuyện cá nhân, khiến hồ sơ trở nên nhạt nhẽo giữa hàng ngàn ứng viên.",
      "## Sai lầm 4: Không nghiên cứu kỹ trường đích",
      "Mỗi trường đại học có giá trị cốt lõi và tiêu chí tuyển sinh riêng. Nộp hồ sơ generic cho tất cả các trường là sai lầm lớn. Hãy tìm hiểu và customize từng bộ hồ sơ cho phù hợp.",
      "## Sai lầm 5: Bỏ qua yếu tố tài chính",
      "Không phải trường nào cũng có chính sách học bổng giống nhau. Phụ huynh cần tìm hiểu kỹ về Financial Aid, Need-based và Merit-based scholarships để tối ưu chi phí du học cho con.",
      "## Lời khuyên từ GSJ",
      "Tại GSJ, chúng tôi đồng hành từ bước đầu tiên - đánh giá năng lực, xây dựng profile, đến hoàn thiện hồ sơ và phỏng vấn. Liên hệ ngay để nhận tư vấn 1-1 miễn phí.",
    ],
  },
};

// Fallback content for slugs not in the detailed map
const defaultPost = {
  content: [
    "Nội dung bài viết đang được cập nhật. Vui lòng quay lại sau để đọc bài viết hoàn chỉnh.",
    "## Về GSJ Blog",
    "GSJ Blog là nơi chia sẻ những kiến thức, kinh nghiệm và câu chuyện truyền cảm hứng về giáo dục, du học và phát triển bản thân. Mỗi bài viết được biên soạn bởi đội ngũ chuyên gia giàu kinh nghiệm của GSJ.",
    "Hãy theo dõi Blog thường xuyên để cập nhật những thông tin mới nhất nhé!",
  ],
};

// Related posts for sidebar
const relatedSlugs = [
  { slug: "chien-luoc-sat-1500-tu-a-den-z", title: "Chiến lược chinh phục SAT 1500+ từ A đến Z", category: "Bí kíp học tập" },
  { slug: "5-sai-lam-ho-so-du-hoc", title: "5 sai lầm khi làm hồ sơ du học phụ huynh cần tránh", category: "Dành cho Phụ huynh" },
  { slug: "top-10-truong-dai-hoc-uc-hoc-bong", title: "Top 10 trường ĐH Úc cấp học bổng cao nhất", category: "Du học" },
  { slug: "phuong-phap-stem-giao-duc", title: "Phương pháp STEM: Tại sao cần thực hành từ sớm?", category: "Khoa học" },
];

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts[slug];

  // If post not found in detailed data, show a generic detail
  const title = post?.title || "Bài viết GSJ Blog";
  const excerpt = post?.excerpt || "";
  const image = post?.image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200";
  const date = post?.date || "2026";
  const readTime = post?.readTime || "5 phút đọc";
  const author = post?.author || { name: "GSJ Team", role: "Biên tập viên" };
  const categoryLabel = post?.categoryLabel || "Blog";
  const content = post?.content || defaultPost.content;

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#0047F6]/20 selection:text-[#001955] overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative pt-28 pb-0 lg:pt-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-[#0047F6] transition-colors">Trang chủ</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#0047F6] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-600 truncate max-w-[200px]">{title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4F7FF] text-[#0047F6] text-[12px] font-bold uppercase tracking-wider mb-5 border border-[#0047F6]/10">
              {categoryLabel}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-black text-[#0A2B70] mb-6 leading-[1.15] tracking-tight uppercase">
              {title}
            </h1>
            {excerpt && (
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8 max-w-3xl">
                {excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 pb-10 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#F4F7FF] flex items-center justify-center text-[#0047F6] font-bold text-lg border border-[#0047F6]/10">
                  {author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#0A2B70]">{author.name}</p>
                  <p className="text-sm text-gray-500 font-medium">{author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-8/12"
            >
              {/* Featured Image */}
              <div className="rounded-[2rem] overflow-hidden mb-12 shadow-lg border border-gray-100">
                <img
                  src={image}
                  alt={title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose-custom space-y-6">
                {content.map((paragraph, idx) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={idx}
                        className="text-2xl font-black text-[#0A2B70] uppercase mt-12 mb-4 tracking-tight leading-tight"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p
                      key={idx}
                      className="text-[17px] text-gray-700 font-medium leading-[1.85] tracking-[-0.01em]"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Share & Tags */}
              <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-[#0047F6]" />
                  <span className="text-sm font-bold text-gray-500">Tags:</span>
                  <span className="bg-[#F4F7FF] text-[#0047F6] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#0047F6]/10">{categoryLabel}</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">GSJ</span>
                </div>
                <button
                  className="flex items-center gap-2 text-gray-500 hover:text-[#0047F6] font-bold text-sm transition-colors"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Đã copy link bài viết!");
                    }
                  }}
                >
                  <Share2 className="w-4 h-4" /> Chia sẻ bài viết
                </button>
              </div>

              {/* Back to Blog */}
              <div className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#0047F6] font-bold hover:gap-3 transition-all text-sm bg-[#F4F7FF] px-6 py-3 rounded-full hover:bg-[#0047F6] hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" /> Quay lại Blog
                </Link>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:w-4/12">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Related Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100"
                >
                  <h3 className="text-lg font-black text-[#0A2B70] uppercase mb-6 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#0047F6]" /> Bài viết liên quan
                  </h3>
                  <ul className="space-y-4">
                    {relatedSlugs
                      .filter((r) => r.slug !== slug)
                      .slice(0, 3)
                      .map((related, i) => (
                        <li key={i}>
                          <Link
                            href={`/blog/${related.slug}`}
                            className="block p-4 bg-white rounded-xl border border-gray-100 hover:border-[#0047F6]/30 hover:shadow-md transition-all group"
                          >
                            <span className="text-[11px] text-[#0047F6] font-bold uppercase tracking-wider">{related.category}</span>
                            <h4 className="text-sm font-bold text-[#0A2B70] mt-1 group-hover:text-[#0047F6] transition-colors leading-snug">
                              {related.title}
                            </h4>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </motion.div>

                {/* CTA Sidebar */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-[#0047F6] to-[#0A2B70] rounded-2xl p-8 text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-black uppercase mb-3">Bạn cần tư vấn?</h3>
                    <p className="text-blue-100 text-sm font-medium mb-6 leading-relaxed">
                      Liên hệ ngay với chuyên gia GSJ để nhận tư vấn 1-1 miễn phí về lộ trình học tập và du học.
                    </p>
                    <Link
                      href="/register"
                      className="inline-block w-full text-center bg-white text-[#0A2B70] py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
                    >
                      Đăng ký Tư vấn
                    </Link>
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

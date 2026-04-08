"use client";

import Link from "next/link";
import Image from "next/image";

export default function Achievements() {
  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 px-4 md:px-10 py-3">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-10 flex items-center justify-center bg-primary rounded-lg text-white">
<span className="material-symbols-outlined text-2xl">school</span>
</div>
<div>
<h1 className="text-primary dark:text-white text-xl font-bold leading-tight tracking-tight">GSJ</h1>
<p className="text-[10px] uppercase tracking-widest text-primary/60 font-semibold">Global Science Journey</p>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Trang chủ</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Chương trình</a>
<a className="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">Thành tựu</a>
<a className="text-sm font-semibold hover:text-primary transition-colors" href="#">Tin tức</a>
<button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                    Liên hệ tư vấn
                </button>
</div>
<button className="md:hidden text-primary">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</nav>

<section className="relative overflow-hidden bg-primary py-20 px-4 md:px-10">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-accent-green rounded-full shadow-lg">Wall of Fame</span>
<h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                Hành trình Tự hào &amp; <br/> Thành tựu Quốc tế
            </h1>
<p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                GSJ đồng hành cùng tài năng trẻ Việt Nam vươn ra biển lớn, chinh phục các đỉnh cao khoa học và đổi mới sáng tạo trên đấu trường toàn cầu.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
<span className="material-symbols-outlined">download</span>
                    Tải Brochure Thành tựu
                </button>
<button className="flex items-center justify-center gap-2 bg-primary border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                    Liên hệ tư vấn
                </button>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto -mt-12 px-4 relative z-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl shadow-primary/5 border border-primary/5 text-center transition-transform hover:-translate-y-1">
<p className="text-accent-green font-bold text-sm uppercase tracking-wider mb-1">Huy chương Vàng</p>
<h3 className="text-primary dark:text-white text-4xl font-black">50+</h3>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl shadow-primary/5 border border-primary/5 text-center transition-transform hover:-translate-y-1">
<p className="text-primary/60 dark:text-slate-400 font-bold text-sm uppercase tracking-wider mb-1">Huy chương Bạc</p>
<h3 className="text-primary dark:text-white text-4xl font-black">80+</h3>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl shadow-primary/5 border border-primary/5 text-center transition-transform hover:-translate-y-1">
<p className="text-primary/60 dark:text-slate-400 font-bold text-sm uppercase tracking-wider mb-1">Huy chương Đồng</p>
<h3 className="text-primary dark:text-white text-4xl font-black">120+</h3>
</div>
<div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl shadow-primary/5 border border-primary/5 text-center transition-transform hover:-translate-y-1">
<p className="text-primary/60 dark:text-slate-400 font-bold text-sm uppercase tracking-wider mb-1">Giải đặc biệt</p>
<h3 className="text-primary dark:text-white text-4xl font-black">15+</h3>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-4 py-20">
<div className="flex items-center gap-4 mb-12">
<div className="h-px bg-primary/20 flex-1"></div>
<h2 className="text-2xl md:text-3xl font-black text-primary text-center px-4">Olympic Khoa học Quốc tế</h2>
<div className="h-px bg-primary/20 flex-1"></div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/5 shadow-md hover:shadow-2xl transition-all flex flex-col">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Học sinh đạt giải tại Olympic KIYO 2024" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3KuJ_EzTR2bvRuSdTTY0DzjOyUNEVHQkSz9KPFSNunNTW7Rfkc81W9tR_r-tGQquZANLmwlNyu5IA3c_Cv1PDyoVmG82PyCjhFfGJGet2YLJHdBwkDVo0OoveV8cQAvR2Nuf1IunCCZ2jsUSAZ8Mt3eqiPboivxlSVRqPNx8QonmYtqUjQtODh1c_2cG8G0pWeNybohYeyYCvs1u2wZ5uThmLSdkSKSWG_iHM2gs60Ikdmh_WlFl9Fff4kxiHWHNNagyYBrSocpw"/>
<div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">KIYO 2024</div>
</div>
<div className="p-8 flex-1">
<h3 className="text-xl font-bold text-primary dark:text-white mb-4">Olympic Khoa học Quốc tế Hàn Quốc KIYO 2024</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        Thành tích rực rỡ của đoàn học sinh Việt Nam tại Seoul với chuỗi Huy chương Vàng quốc tế. Các dự án nghiên cứu thuộc lĩnh vực môi trường và vật liệu mới của đoàn GSJ được ban giám khảo đánh giá cao về tính ứng dụng.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="bg-accent-green/10 text-accent-green text-xs font-bold px-3 py-1 rounded-lg">#HuyChuongVang</span>
<span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-lg">#ScienceInvention</span>
<span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-lg">#Seoul</span>
</div>
</div>
</div>

<div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-primary/5 shadow-md hover:shadow-2xl transition-all flex flex-col">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Đoàn học sinh tại Global Youth Summit 2025" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2QAclrG3vXK9tC54IG6Nv2IpLmmVcFpgPnheCZLKmhtWeJSNCINdvHT6kifYC8_PNS2j-t0YQ5htd5t-PYWIfkvcjSRMc_M4huuSe9n8xRb_-UfbZ4lc9GFX7v4SqZ3FykbvIOOG6m2-oZLzxygxIUbz9c3Dp6FezUCXCpmB9DhwTqokLFCifUp2BLdBDBsygHkKTbjyWoUQensYL8w5njmKeUyNJV1PcyKOphWEckx0DXzu4z83R0544wluX8itO0UpoSHQwPn8"/>
<div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">GYS 2025</div>
</div>
<div className="p-8 flex-1">
<h3 className="text-xl font-bold text-primary dark:text-white mb-4">Global Youth Summit (GYS) 2025</h3>
<p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        Dấu ấn trí tuệ trẻ tại hội nghị thượng đỉnh khoa học toàn cầu. Đoàn Việt Nam tham gia với 3 đề tài nghiên cứu trọng điểm, đạt giải thưởng sáng tạo xuất sắc nhất trong lĩnh vực Y sinh học và AI.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="bg-accent-green/10 text-accent-green text-xs font-bold px-3 py-1 rounded-lg">#GlobalSummit</span>
<span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-lg">#CreativeAwards</span>
<span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-lg">#Innovation</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-100 dark:bg-slate-900/50 py-20 px-4">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center mb-16">
<h2 className="text-2xl md:text-3xl font-black text-primary mb-4">Sáng tạo &amp; Đổi mới (Innovation Awards)</h2>
<p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl">Vinh danh các phát minh đột phá và ý tưởng giải quyết vấn đề thực tiễn của học sinh GSJ.</p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="bg-white dark:bg-slate-800 p-1 rounded-2xl shadow-lg group">
<div className="relative overflow-hidden rounded-xl h-48 mb-6">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Hội nghị sáng chế quốc tế WICO" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKRa_MdCL2bTC3ms8SYFCaiwcwUdXrA5kU7_bygXcPxAGbUNiz0yMN_x6YHMmZ2-XiQxNZuHk51zls77I_UHdBelLZIUR0xSzBn5xPELwWGNj-wMolJ36Huiw9fOf88sk0OlAegTj7_0dTBxaeT_Op1-rA9zt0O_0MhOpmJdVxRZCHtgkPC5hXA-V1yJTL68xIgicQqMtLAwhdNKGEnE4C_aZhPPO2I5u1NOKM95nVlFP8de4npWMiy1uXH428yadEFA20xiLIPDQ"/>
<div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white text-4xl">visibility</span>
</div>
</div>
<div className="px-6 pb-6">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-accent-green text-lg">workspace_premium</span>
<span className="text-xs font-bold text-accent-green uppercase">WICO 2025</span>
</div>
<h4 className="text-lg font-bold text-primary dark:text-white mb-2 leading-snug">World Invention Creativity Olympic</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">Giải thưởng đặc biệt cho dự án "Hệ thống lọc nước thông minh tích hợp IoT" của nhóm học sinh tài năng.</p>
</div>
</div>

<div className="bg-white dark:bg-slate-800 p-1 rounded-2xl shadow-lg group">
<div className="relative overflow-hidden rounded-xl h-48 mb-6">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Hệ thống robot AI đạt giải thưởng" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSX7_PBi3MCTWhNYQ-fhK6BYdgzmyQ_J28ZMKETWmvT5H9mhFjSs881LZStp3xlkB3mHZYTVH6cvLLMgVA9rp48UbvjG16LFfNXiTxuV2JwnaUMMvr6fZyH_EFw-2ngGXMDydMklWREaYeFNZmny1kdsvJQblj9ViTtDuUnRsc0bmsd7E0qFtSXBCFc-Zh517PSuM0Oy0MRHt09j98fFCar6c4O58dhYH1Qy3CCR0eb6np8o-t-AVCDS8X4v64OolFtIZ--KOSSRI"/>
<div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white text-4xl">visibility</span>
</div>
</div>
<div className="px-6 pb-6">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-accent-green text-lg">workspace_premium</span>
<span className="text-xs font-bold text-accent-green uppercase">GYS Details</span>
</div>
<h4 className="text-lg font-bold text-primary dark:text-white mb-2 leading-snug">Hợp tác nghiên cứu Đa quốc gia</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">Thành công trong việc kết nối và phát triển dự án liên ngành cùng các chuyên gia hàng đầu tại GYS.</p>
</div>
</div>

<div className="bg-white dark:bg-slate-800 p-1 rounded-2xl shadow-lg group">
<div className="relative overflow-hidden rounded-xl h-48 mb-6">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Nhóm học sinh đạt giải quốc tế" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyXfnAJhRBMurS_cNpH1pcWhscjfMNjY5RRebHEuVzAKV-FuQNsT5kZmybQc-3EOkxOqmsYW5kdmlvWF477riWUaLKqNLWvLoIXI0YF6bpWIEqGyBt6Ed-vMJfrhsXBn8hsDGEe_4r5ixCHeGyOGWfZmBKowihijNNUKJipkEVv1v1Ca5B8TjujayIKxmoXkUhIMqrLwZeA8dv5QX9B2AKTDEroUZW_r8OoUshIizFKv7L26A2J4ZK7TUyyqBrL13NaVyJkiADFk0"/>
<div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white text-4xl">visibility</span>
</div>
</div>
<div className="px-6 pb-6">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-accent-green text-lg">workspace_premium</span>
<span className="text-xs font-bold text-accent-green uppercase">Science Awards</span>
</div>
<h4 className="text-lg font-bold text-primary dark:text-white mb-2 leading-snug">Vinh danh Sáng tạo Học đường</h4>
<p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">Top 10 dự án đổi mới sáng tạo có khả năng thương mại hóa cao nhất tại khu vực Châu Á.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-20">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<span className="text-accent-green font-bold text-sm tracking-widest uppercase">Global Networking</span>
<h2 className="text-3xl md:text-4xl font-black text-primary mt-2 mb-6 leading-tight">Diễn đàn Kinh doanh &amp; Lãnh đạo Trẻ</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="size-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">groups</span>
</div>
<div>
<h4 className="font-bold text-lg text-primary">World Youth Economic Forum (WYEF) 2025</h4>
<p className="text-slate-600 dark:text-slate-400 text-sm">Nơi học sinh GSJ trình bày các mô hình kinh tế xanh và giải pháp phát triển bền vững trước hội đồng quốc tế.</p>
</div>
</div>
<div className="flex gap-4">
<div className="size-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">psychology</span>
</div>
<div>
<h4 className="font-bold text-lg text-primary">AI JAM US 2025</h4>
<p className="text-slate-600 dark:text-slate-400 text-sm">Chinh phục thung lũng Silicon với những ý tưởng khởi nghiệp dựa trên công nghệ trí tuệ nhân tạo.</p>
</div>
</div>
</div>
<button className="mt-10 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Xem thêm diễn đàn</button>
</div>
<div className="md:w-1/2 grid grid-cols-2 gap-4">
<div className="rounded-2xl overflow-hidden h-64 shadow-xl">
<img className="w-full h-full object-cover" data-alt="Học sinh thuyết trình tại diễn đàn kinh tế" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmEntXRBHFsdqOy0H_vh_NuhLur-wVCdJPAFhsY_MSWoberBPj-ZioaAlgQ85zRrz3soYQZFdNSl6GquoJwTF5tsIfA_nVE8gRshLcNOoZCC_pCqhIMTkm2cIAle3uzs6V9RYFOgsrR7hVtF5u9qlYkEh-MxuzihNjzxYrQYvsikvIzFZFYaUedVdz-CnHgMQYVPMwteap_vGx1Ux3m3mSU1_ruRgBxlKO8xMUicO_UJmtvY4cVDpBplQcieVoapUbBhp3JdnQQcU"/>
</div>
<div className="rounded-2xl overflow-hidden h-48 mt-16 shadow-xl">
<img className="w-full h-full object-cover" data-alt="Thảo luận nhóm lãnh đạo trẻ" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6DPKreDZSDtGSHwKKyIg8pdHqOBE2oLm4Uf4l0SLS-4bQsQa9Umwt_AdxkGOqEqNVF7k2fCGbTn3A6H56IRfRQN7bouyMz5ZZzqkFVB7xzTqeyHLVYEX-4uvHwOpOQ8qowvP4g69xoRN7U6uBu0FuoaBNKlQIeNTcwg3X5zQ33TgLyd1k8-GVptqVGdGGVtSiikOFRH-SJm3uJK-SkmV3JGzWqBDZ92PM5fLUrrj1b2w6O9YifL1I_mKWvR2GgGovPAoBTLKvy4U"/>
</div>
<div className="rounded-2xl overflow-hidden h-48 -mt-16 shadow-xl">
<img className="w-full h-full object-cover" data-alt="Giao lưu văn hóa quốc tế" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPi5B2gyMkRj7m0sjnXTcbznOaPKmSDM2vw6I0g-MqhoZ272ZxCcu9_-S7DKhdBNu8lfm7Qrog6CAim9InPt7W8AjWCVZ1GMxK6IpPV6oPVRHBPLCEpC2qXQOJFuNBwY0q6c610ANqYDEljjU9OTs0A4h7845HzYEMsqf-1YW1ncv03I84QphEDYb8Rdg9SQ3jvmR-n48CJNf4dnkEOrqu84VeSptOr19vGwu8lLj_ABDPuoBHNCIi1t4--EjDgtyFdGfXexFVeBI"/>
</div>
<div className="rounded-2xl overflow-hidden h-64 shadow-xl">
<img className="w-full h-full object-cover" data-alt="Workshop sáng tạo tại Mỹ" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv3t6QCg9_zQreqvTa7Du1PNrT3ET9XIS0GGQe1ULXeEpCb9MhWeuQ-pPt3Zmqm8CenF5nDTXn3lTjiKZw3LSI5iFYfA5Ph5YfY888_Yg7Zf2Uc63pU7Cy7bfLrfbL4I2vBb4_YIqdzZyHNVhDfNJ-CO7S5tTxBZnJ7eWiN7xuTTTf7lrtZgwMR6seG-E5RSQT05svyI0LAYItnPPoTgkp9hjoh1jXPJgLNmGUCjmB4qU4Gkwk3bRskN6QtLgHwQ58MujhPsviFsc"/>
</div>
</div>
</div>
</section>

<section className="bg-primary/5 py-20 px-4">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-3xl font-black text-primary text-center mb-16">Khoảnh khắc Vinh quang &amp; Báo chí</h2>
<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-sm border border-primary/10">
<img className="w-full rounded-xl mb-4" data-alt="Giấy chứng nhận huy chương vàng quốc tế" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfd51psb4bj1PXopX28Asrp61BiCcU-BV1Ng05nsPiA10KRwLEBmZqaT6-Fjmw2_geKheZgF0atuCaDQ2pHiHq8isq0Y9l6AswBdO69c9SzZNOrEVET6f7fQFmlBy_F-uFqHevB8IfdjLlT7PYSufE95Zv2ZkHiKzzyMrx53W-IfOJ6IBQysy8YEY7L1H_l0RvMWbqqHYnuy-SBOGflKTSnr6m9P2VOf04D5pfB14QhJjahCJ3nVDcNfssG-RCI3k-gCiyLsqf9W4"/>
<p className="px-3 pb-3 text-sm font-bold text-primary italic">Giấy chứng nhận Huy chương Vàng từ Hiệp hội Sáng chế Hàn Quốc.</p>
</div>

<div className="break-inside-avoid bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-sm border border-primary/10">
<img className="w-full rounded-xl mb-4" data-alt="Hình ảnh tập thể đoàn Việt Nam tại sân bay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL9IfcA-pZEN2RF_kCaUzB3gxnqzbx_uvVmQNIdfSGqR1HnttfGN-EDDRsu_hQw2ZmAqdQnMAzMOYRvPKBqjePWyjGijLVv9rHvikd5BnHmFbkyn_IoBUoPNR4ZknQPdQ-eFGeUFgX0EuCSJVJ03huOWMq86KbjC5ssaPBiSexwjGEhwUuKdT73N76-PiXPZy3xpcmt1t4sWibiYCLFSvzpxEdOYa1eE1zWTEs-vaKhmIkegLDYUQMm6zSW3uX28NLMN-q3dAc7RU"/>
<p className="px-3 pb-3 text-sm font-bold text-primary italic">Đoàn GSJ lên đường tham dự GYS tại Singapore.</p>
</div>

<div className="break-inside-avoid bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-sm border border-primary/10">
<img className="w-full rounded-xl mb-4" data-alt="Trao giải trên sân khấu quốc tế" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIi56rXq7mpJtkx4M3TLIduC1Uxooa2IJ6rPKyUn1bphEJjKskh8_aLlKR6cUN_ltvjO1aRgzMIF6bmrTg4NKB8Xu3ciWtAJLIO80Vk_OyOwRsX1NZofphYBwzaSwWpvFXB3w4X1nb3fMpqGKHVZijKLB3JJM94ZY3AlfQ7lu9RtOHNVn6Elp6ygoRA8AFCB-ZSgSfobCJ18Qe5pJbJEGqsDvsqpsLPT3K6TpqHnzvQeaEni2OIHVcuN9nEjVJS4u2OaxLuEyzERE"/>
<p className="px-3 pb-3 text-sm font-bold text-primary italic">Khoảnh khắc vinh dự nhận giải đặc biệt tại WICO.</p>
</div>

<div className="break-inside-avoid bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-sm border border-primary/10">
<img className="w-full rounded-xl mb-4" data-alt="Học sinh GSJ phỏng vấn báo chí" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzhNekemRw67tyA3Kx0Tln6y5G4IAM-gblnyccjL69fTJOWqvnDSnMcu0SkmoYiUXbH-vqKezYaStZoWqqyk1aSh9sDxDWkZCLQsKMOYoTT1LqLjQmwgmj0ODXBO1-E2d4UppSRqfahPSisnrwQnfQ30gVKgxaIUjpzkM4OFiqUYmSgC-aApa4sRoRc-53hs8Hl6FuSvaT4lS8w2AfUMDW3pd_sCZo25b2wKzRHjENhUk1Ucm3Lqkne9eaTC-tmaGLHkoIbZd9q-w"/>
<p className="px-3 pb-3 text-sm font-bold text-primary italic">Báo Giáo dục &amp; Thời đại đưa tin về thành công của đoàn GSJ.</p>
</div>

<div className="break-inside-avoid bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-sm border border-primary/10">
<img className="w-full rounded-xl mb-4" data-alt="Cúp và huy chương" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAExkgZDIYw6igZR71QOHmaMqM401p_Xde_e53wFLvhtkMjaoqLXLWo6KxuAv5MSRWoLz-N2IvN9sUIkHPPkyNhF-8094srXbqUWvB8OOTUrSCxGsqaTmJSl9g4rzQzyzTALsmzjfiVzJxFuOln9_o7Q3MVXakCSCf3DszOyjlZIwoMSreDztU_WsR_5P_08JD_pIQvygPu6c5HacDwk91_uAqARZCV0hScxBn5fUMvvq55wUn9lF7Bt18_xAkflbFmO6PekcmzXvo"/>
<p className="px-3 pb-3 text-sm font-bold text-primary italic">Bộ sưu tập huy chương danh giá của các học sinh GSJ.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 bg-white dark:bg-background-dark">
<div className="max-w-5xl mx-auto rounded-3xl academic-gradient p-12 md:p-16 text-center text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-black mb-8">Bắt đầu hành trình của bạn ngay hôm nay</h2>
<p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">Tải về bộ tài liệu chi tiết các thành tựu và lộ trình tham gia các cuộc thi quốc tế cùng GSJ.</p>
<div className="flex flex-wrap gap-4 justify-center">
<button className="bg-accent-green text-white px-10 py-4 rounded-xl font-bold hover:bg-accent-green/90 transition-all flex items-center gap-2">
<span className="material-symbols-outlined">description</span>
                        Tải Brochure Thành tựu
                    </button>
<button className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
                        Liên hệ tư vấn (Miễn phí)
                    </button>
</div>
</div>

<div className="absolute -bottom-24 -right-24 size-96 bg-white/5 rounded-full"></div>
<div className="absolute -top-12 -left-12 size-48 bg-white/5 rounded-full"></div>
</div>
</section>

<footer className="bg-slate-900 text-white py-12 px-4 md:px-10">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
<div className="col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="size-8 flex items-center justify-center bg-white rounded text-primary">
<span className="material-symbols-outlined text-xl">school</span>
</div>
<span className="text-xl font-bold">GSJ</span>
</div>
<p className="text-slate-400 max-w-sm mb-6">
                    Global Science Journey (GSJ) - Tổ chức giáo dục tiên phong đưa học sinh Việt Nam tiếp cận các sân chơi trí tuệ hàng đầu thế giới.
                </p>
<div className="flex gap-4">
<a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<span className="material-symbols-outlined text-sm">public</span>
</a>
<a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<span className="material-symbols-outlined text-sm">mail</span>
</a>
</div>
</div>
<div>
<h4 className="font-bold mb-6">Liên kết nhanh</h4>
<ul className="space-y-4 text-slate-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Trang chủ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Chương trình</a></li>
<li><a className="hover:text-white transition-colors text-white font-bold" href="#">Thành tựu</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tin tức</a></li>
<li><a className="hover:text-white transition-colors" href="#">Liên hệ</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6">Văn phòng</h4>
<ul className="space-y-4 text-slate-400 text-sm">
<li className="flex gap-2">
<span className="material-symbols-outlined text-sm">location_on</span>
<span>TP. Hồ Chí Minh, Việt Nam</span>
</li>
<li className="flex gap-2">
<span className="material-symbols-outlined text-sm">call</span>
<span>+84 123 456 789</span>
</li>
<li className="flex gap-2">
<span className="material-symbols-outlined text-sm">schedule</span>
<span>Thứ 2 - Thứ 7 (8:00 - 17:30)</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 text-center text-slate-500 text-xs">
            © 2024 Global Science Journey. Tất cả quyền được bảo lưu.
        </div>
</footer>

    </>
  );
}

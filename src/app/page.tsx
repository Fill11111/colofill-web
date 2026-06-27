"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const tickerItems = [
    "Personal Brand",
    "AI Tools",
    "Content Strategy",
    "@colofill",
    "AI Prompt Mastery",
    "เริ่มต้นได้ทันที",
    "TikTok · Instagram",
  ];

  return (
    <>
      {/* ── NAV ── */}
      <nav
        className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-3 rounded-full border border-[#E2E2E2] bg-white/90 backdrop-blur-[14px]"
        role="navigation"
        aria-label="Navigation หลัก"
      >
        <a
          href="#"
          className="font-display font-black text-[1.0625rem] tracking-[-0.04em] text-[#0A0A0A] no-underline"
        >
          colofill.
        </a>
        <ul className="flex items-center gap-7 list-none m-0 p-0">
          <li className="hidden md:block">
            <a
              href="#about"
              className="text-sm font-medium text-[#0A0A0A] opacity-55 hover:opacity-100 transition-opacity no-underline"
            >
              เกี่ยวกับ
            </a>
          </li>
          <li className="hidden md:block">
            <a
              href="#process"
              className="text-sm font-medium text-[#0A0A0A] opacity-55 hover:opacity-100 transition-opacity no-underline"
            >
              วิธีการ
            </a>
          </li>
          <li className="hidden md:block">
            <a
              href="#product"
              className="text-sm font-medium text-[#0A0A0A] opacity-55 hover:opacity-100 transition-opacity no-underline"
            >
              สินค้า
            </a>
          </li>
          <li className="hidden sm:block">
            <a
              href="#product"
              className="font-thai font-bold text-sm bg-[#0A0A0A] text-white px-5 py-2 rounded-full no-underline hover:scale-[1.04] hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all"
            >
              ซื้อเลย
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3.5">
          <div id="auth-slot" />
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section
          className="min-h-svh pt-[7.5rem] px-[5vw] pb-20 grid md:grid-cols-2 items-center gap-16 max-w-[1400px] mx-auto"
          aria-labelledby="hero-heading"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#888] border border-[#E2E2E2] rounded-full px-[0.875rem] py-[0.3rem] mb-7 before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#0A0A0A]">
              Personal Brand × AI Tools
            </div>
            <h1
              className="font-thai font-extrabold text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.18] tracking-[-0.02em] mb-[1.375rem]"
              id="hero-heading"
            >
              เลิกเสียเวลา
              <br />
              หาตัวเองแบบ
              <br />
              <span className="font-display italic font-black">ลองผิดลองถูก</span>
            </h1>
            <p className="font-thai text-[1.0625rem] leading-[1.8] text-[#4a4a4a] max-w-[440px] mb-10">
              AI Prompt Mastery คือระบบที่จะช่วยให้คุณค้นหาตัวตน
              วางแนวทางคอนเทนต์ และสร้าง Personal Brand
              ได้อย่างชัดเจนภายในไม่กี่ชั่วโมง
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <a
                href="#product"
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-thai font-bold text-[0.9375rem] px-7 py-[0.875rem] rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all group"
              >
                ซื้อเลย 299 บาท
                <svg
                  className="transition-transform group-hover:translate-x-[3px]"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7.5h11M8.5 3.5l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="font-thai text-[0.8125rem] text-[#888]">
                Digital file · ได้รับทันที
              </span>
            </div>
          </div>

          <div className="flex justify-center order-first md:order-last">
            <div className="relative w-full max-w-[380px]">
              <div className="rounded-3xl overflow-hidden bg-[#d4cfc9] aspect-[3/4]">
                <Image
                  src="/assets/profile.jpg"
                  alt="Fill — Founder ของ Colofill, Creator สอน Personal Brand และ AI Tools"
                  width={380}
                  height={507}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute bottom-6 -left-5 bg-white border border-[#E2E2E2] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-3.5 py-[0.625rem] flex items-center gap-2 min-w-[148px]">
                <span
                  className="w-[7px] h-[7px] rounded-full bg-[#22c55e] flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <div className="font-thai text-[0.8125rem] font-bold">
                    Fill · Colofill
                  </div>
                  <div className="font-thai text-[0.6875rem] text-[#888]">
                    Content Creator
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TICKER ── */}
        <div
          className="border-t border-b border-[#E2E2E2] py-[0.9375rem] overflow-hidden bg-[#F6F4F1]"
          aria-hidden="true"
        >
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 px-6 text-xs font-bold tracking-[0.1em] uppercase whitespace-nowrap after:content-['·'] after:text-[#888] after:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <section
          id="about"
          className="py-[6.5rem] px-[5vw] max-w-[1400px] mx-auto"
          aria-labelledby="about-heading"
        >
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="reveal">
              <div className="inline-flex items-center gap-2.5 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#888] mb-5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#E2E2E2]">
                เกี่ยวกับฉัน
              </div>
              <h2
                className="font-thai font-extrabold text-[clamp(1.875rem,3.75vw,3rem)] leading-[1.2] tracking-[-0.02em]"
                id="about-heading"
              >
                คุณไม่ได้ขาด
                <br />
                ความสามารถ
                <br />
                <span className="font-display italic font-black">แค่ขาดทิศทาง</span>
              </h2>
            </div>
            <div className="reveal" style={{ transitionDelay: "0.2s" }}>
              <p className="font-thai text-[1.0625rem] leading-[1.85] text-[#3d3d3d]">
                ตอนใกล้จบมหาวิทยาลัย ฉันเป็นคนที่ดูคอนเทนต์พัฒนาตัวเองมาเยอะมาก
                แต่ไม่กล้าลงมือทำเลย จนตั้งคำถามกับตัวเองว่า{" "}
                <strong>&ldquo;เรามาได้แค่นี้จริงๆ หรอ?&rdquo;</strong>
              </p>
              <div className="border-l-2 border-[#0A0A0A] pl-5 my-[1.875rem]">
                <p className="font-thai text-base font-semibold leading-[1.7] italic text-[#333]">
                  &ldquo;Personal Brand ไม่ได้เริ่มจากการโพสต์
                  แต่มันเริ่มจากการเข้าใจตัวเองและเข้าใจคนที่เราอยากช่วย&rdquo;
                </p>
              </div>
              <div className="flex flex-wrap gap-2 my-7">
                {[
                  "ไม่กล้าสร้างตัวตนออนไลน์",
                  "กลัวถูกมองไม่ดี",
                  "ไม่รู้จะใช้ AI ยังไง",
                  "ไม่รู้จะเริ่มยังไง",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="font-thai text-[0.8125rem] font-medium border border-[#E2E2E2] rounded-full px-[0.875rem] py-[0.3rem] text-[#333]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex gap-10 pt-8 border-t border-[#E2E2E2]">
                {[
                  { num: "1K+", lbl: "วิวต่อคลิป" },
                  { num: "299฿", lbl: "ราคาเริ่มต้น" },
                  { num: "2026", lbl: "ปีที่เริ่มต้น" },
                ].map((s) => (
                  <div key={s.lbl}>
                    <div className="font-display font-black text-[2.125rem] tracking-[-0.04em] leading-none">
                      {s.num}
                    </div>
                    <div className="font-thai text-[0.8125rem] text-[#888] mt-[0.2rem]">
                      {s.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DARK BANNER ── */}
        <div
          className="reveal bg-[#0A0A0A] text-white py-20 px-[5vw] flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 overflow-hidden"
          role="region"
          aria-label="สถิติ"
        >
          <div
            className="font-display font-black text-[clamp(5rem,13vw,9.5rem)] tracking-[-0.06em] leading-none flex-shrink-0"
            aria-hidden="true"
          >
            40%
          </div>
          <div className="max-w-[420px]">
            <h3 className="font-thai font-bold text-[1.25rem] leading-[1.5] mb-3">
              ของคนที่อยากสร้าง Personal Brand ไม่เคยโพสต์แม้แต่ครั้งเดียว
            </h3>
            <p className="font-thai text-[0.9375rem] text-[#888] leading-[1.75]">
              เพราะรอให้ตัวเองพร้อมก่อน แต่ความพร้อมนั้นไม่เคยมาถึง
            </p>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {[
                "Personal Brand",
                "Content Strategy",
                "AI Tools",
                "TikTok",
                "Instagram",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium border border-[#2a2a2a] rounded-full px-3 py-[0.2rem] text-[#777]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROCESS ── */}
        <section
          id="process"
          className="py-[6.5rem] px-[5vw] bg-[#F6F4F1]"
          aria-labelledby="process-heading"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
              <div className="reveal inline-flex items-center gap-2.5 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#888] mb-5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#E2E2E2]">
                วิธีการทำงาน
              </div>
              <h2
                className="reveal font-thai font-extrabold text-[clamp(1.875rem,3.75vw,3rem)] leading-[1.2] tracking-[-0.02em]"
                id="process-heading"
                style={{ transitionDelay: "0.1s" }}
              >
                ให้ฉันพาคุณผ่าน
                <br />
                <span className="font-display italic font-black">4 ขั้นตอนนี้</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  num: "01",
                  title: "ค้นหาตัวตน",
                  body: "ระบบ AI จะพาคุณค้นหาตัวตนอย่างลึกซึ้ง เข้าใจว่าคุณคือใคร อยากช่วยใคร และมีอะไรที่น่าสนใจ",
                  cls: "p-card-1",
                },
                {
                  num: "02",
                  title: "หา Niche ที่ใช่",
                  body: "กำหนด Niche และ Audience ให้ชัดเจน ไม่ต้องเดาเอง มี Framework พร้อมให้ทำตาม",
                  cls: "p-card-2",
                },
                {
                  num: "03",
                  title: "วางแผนคอนเทนต์",
                  body: "แผนคอนเทนต์ 30 วัน + Viral Framework + Hook Templates ที่ใช้งานได้จริง",
                  cls: "p-card-3",
                },
                {
                  num: "04",
                  title: "เริ่มโพสต์ได้เลย",
                  body: "Prompt ฉบับเต็มและระบบทำงานต่อเนื่อง ทำให้คุณเดินหน้าได้ทุกวันโดยไม่ต้องคิดเองทั้งหมด",
                  cls: "p-card-4",
                },
              ].map((card) => (
                <div
                  key={card.num}
                  className={`p-card ${card.cls} bg-white rounded-[1.25rem] p-[2rem_1.75rem_2.25rem] border border-black/[0.06] relative cursor-default`}
                >
                  <div
                    className="absolute top-[1.125rem] right-[1.375rem] w-3 h-3 rounded-full bg-[#0A0A0A] shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
                    aria-hidden="true"
                  />
                  <div className="font-display font-black text-xs tracking-[0.08em] text-[#ccc] mb-[1.125rem]">
                    {card.num}
                  </div>
                  <h3 className="font-thai font-extrabold text-[1.3125rem] leading-[1.3] mb-3">
                    {card.title}
                  </h3>
                  <p className="font-thai text-sm text-[#555] leading-[1.75]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="reveal text-center mt-10 font-display italic text-[1.0625rem] text-[#aaa]">
              — Ready to be delivered!
            </p>
          </div>
        </section>

        {/* ── PRODUCT ── */}
        <section
          id="product"
          className="py-[6.5rem] px-[5vw] max-w-[1400px] mx-auto"
          aria-labelledby="product-heading"
        >
          <div className="reveal inline-flex items-center gap-2.5 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#888] mb-5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-[#E2E2E2]">
            สินค้า
          </div>
          <h2
            className="reveal font-thai font-extrabold text-[clamp(1.875rem,3.75vw,3rem)] leading-[1.2] tracking-[-0.02em] mb-10"
            id="product-heading"
            style={{ transitionDelay: "0.1s" }}
          >
            เครื่องมือที่คุณต้องการ
            <br />
            <span className="font-display italic font-black">มีครบในที่เดียว</span>
          </h2>

          <div className="reveal grid md:grid-cols-2 border border-[#E2E2E2] rounded-[2rem] overflow-hidden">
            {/* Left — dark */}
            <div className="bg-[#0A0A0A] text-white p-14">
              <span className="inline-flex bg-white/[0.08] border border-white/[0.12] rounded-full px-[0.875rem] py-[0.25rem] text-[0.6875rem] font-bold tracking-[0.12em] uppercase mb-8">
                Digital Product
              </span>
              <h3 className="font-display font-black text-[clamp(1.875rem,3.5vw,2.625rem)] tracking-[-0.04em] leading-[1.1] mb-3.5">
                AI Prompt
                <br />
                Mastery
              </h3>
              <p className="font-thai text-[0.9375rem] text-[#999] leading-[1.75] mb-8">
                ระบบค้นหาตัวตน วางแนวทางคอนเทนต์ และสร้าง Personal Brand
                ได้อย่างชัดเจนภายในไม่กี่ชั่วโมง
              </p>
              <div className="inline-flex items-center gap-2 bg-[#0A0A0A] border border-white/10 text-white font-thai text-[0.8125rem] font-bold px-4 py-[0.375rem] rounded-full mb-8">
                <span aria-hidden="true">🔥</span> โปรโมชั่นพิเศษ — จำกัดเวลา
              </div>
              <div className="flex items-baseline gap-3 flex-wrap mb-8">
                <span className="font-display font-bold text-2xl text-[#aaa] line-through tracking-[-0.03em]">
                  599
                </span>
                <span className="font-display font-black text-[3.25rem] tracking-[-0.05em] leading-none">
                  299
                </span>
                <span className="font-thai text-[1.125rem] font-semibold text-[#888]">
                  บาท
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-thai font-bold text-[0.9375rem] px-7 py-[0.875rem] rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.18)] transition-all group"
              >
                ซื้อเลย
                <svg
                  className="transition-transform group-hover:translate-x-[3px]"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7.5h11M8.5 3.5l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <p className="font-thai text-[0.8125rem] text-[#555] mt-3.5">
                Digital file · ได้รับทันที · จ่ายครั้งเดียว
              </p>
            </div>

            {/* Right — features */}
            <div className="bg-[#F6F4F1] p-14">
              <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#888] mb-6">
                สิ่งที่คุณจะได้รับ
              </p>
              <ul className="list-none flex flex-col gap-[0.9375rem] p-0 m-0">
                {[
                  "ระบบค้นหาตัวตนด้วย AI",
                  "Framework หา Niche ที่ชัดเจน",
                  "Framework หา Audience ของคุณ",
                  "ระบบสร้างแนวทางคอนเทนต์",
                  "แผนคอนเทนต์ 30 วัน",
                  "Viral Content Framework",
                  "Hook Templates พร้อมใช้",
                  "ระบบช่วยคิดคอนเทนต์ต่อเนื่อง",
                  "Prompt ฉบับเต็มพร้อมใช้งาน",
                ].map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3.5 font-thai text-[0.9375rem] leading-[1.55]"
                  >
                    <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#0A0A0A] flex-shrink-0 mt-[2px]">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3.5 8l3 3 6-6"
                          stroke="white"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="reveal bg-[#0A0A0A] text-white py-32 px-[5vw] text-center"
          aria-labelledby="cta-heading"
        >
          <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#555] mb-6">
            เริ่มต้นได้ตั้งแต่วันนี้
          </p>
          <h2
            className="font-thai font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.18] tracking-[-0.025em] max-w-[840px] mx-auto mb-12"
            id="cta-heading"
          >
            อย่าปล่อยให้การหาตัวเอง
            <br />
            กินเวลาเป็นปี
          </h2>
          <a
            href="#product"
            className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] font-thai font-bold text-[1.0625rem] px-9 py-4 rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.18)] transition-all group"
          >
            เริ่มต้นสร้างตัวตน — 299 บาท
            <svg
              className="transition-transform group-hover:translate-x-[3px]"
              width="17"
              height="17"
              viewBox="0 0 15 15"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 7.5h11M8.5 3.5l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className="font-thai text-[0.9375rem] text-[#555] mt-5">
            เริ่มต้นสร้างตัวตนที่ชัดเจน และสร้างคอนเทนต์อย่างมีทิศทางตั้งแต่วันนี้
          </p>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0A0A0A] border-t border-[#161616] py-10 px-[5vw]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between flex-wrap gap-6">
          <span className="font-display font-black text-[1.125rem] tracking-[-0.04em] text-white">
            colofill.
          </span>
          <ul className="flex flex-wrap gap-7 list-none p-0 m-0">
            <li>
              <a
                href="mailto:kantaphat.19@gmail.com"
                className="font-thai text-sm text-[#555] no-underline hover:text-white transition-colors"
              >
                kantaphat.19@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/colofill"
                target="_blank"
                rel="noopener noreferrer"
                className="font-thai text-sm text-[#555] no-underline hover:text-white transition-colors"
              >
                Instagram @colofill
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@colofill"
                target="_blank"
                rel="noopener noreferrer"
                className="font-thai text-sm text-[#555] no-underline hover:text-white transition-colors"
              >
                TikTok @colofill
              </a>
            </li>
          </ul>
          <p className="text-xs text-[#333]">© 2026 Colofill · All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

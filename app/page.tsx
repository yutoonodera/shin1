"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const heroImages = ["/images/image3.jpg", "/images/image4.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroImages.length]);
  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#222]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <a href="#" className="leading-tight">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#a7792f]">
              SHIN - Lab for Financial Education
            </p>
            <h1 className="mt-1 text-lg font-bold tracking-wide text-[#1d1d1d]">
              シン金融教育研究所
            </h1>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#333] md:flex">
            <a href="#top" className="hover:text-[#a7792f]">
              TOP
            </a>
            <a href="#message" className="hover:text-[#a7792f]">
              想い
            </a>
            <a href="#profile" className="hover:text-[#a7792f]">
              講師紹介
            </a>
            <a href="#policy" className="hover:text-[#a7792f]">
              3つの金融リテラシー
            </a>
            <a href="#company" className="hover:text-[#a7792f]">
              会社概要
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#fffaf0]">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#f0d89c]/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#a7792f]/30 bg-white px-4 py-2 text-sm font-bold text-[#a7792f]">
                金融を、わかりやすく・楽しく・カンタンに。
              </p>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-[#1c1c1c] md:text-6xl">
                営業のためではなく、
                <br />
                学ぶための
                <br />
                金融教育を。
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-9 text-[#555] md:text-lg">
                世の中のマネーセミナーの多くが、金融商品や保険の営業目的になりがちです。
                小学生から高齢の方々まで、金融・経済のことを少しでもわかりやすく、楽しく、カンタンに伝えるために活動しています。
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#policy"
                  className="rounded-full bg-[#3f7a5a] px-7 py-4 text-center text-sm font-bold text-white shadow transition hover:bg-[#35684d]"
                >
                  3つの金融リテラシー
                </a>
                <a
                  href="#profile"
                  className="rounded-full border border-[#3f7a5a] bg-white px-7 py-4 text-center text-sm font-bold text-[#3f7a5a] transition hover:bg-[#f4f7f3]"
                >
                  講師プロフィール
                </a>
              </div>
            </div>

            <div className="relative h-fit self-center overflow-hidden rounded-[2rem] border border-black/10 bg-[#f7f4ed] shadow-xl">
              <div className="relative aspect-[447/275] w-full overflow-hidden">
                {heroImages.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`シン金融教育研究所 イメージ ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 480px"
                    quality={90}
                    className={`object-cover transition-opacity duration-700 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-sm font-bold tracking-[0.18em] text-[#f0d89c]">
                    FINANCIAL EDUCATION
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-tight">
                    楽しく学ぶ、
                    <br />
                    これからの金融教育。
                  </h3>
                </div>

                <div className="absolute bottom-4 right-5 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === currentImageIndex ? "bg-white" : "bg-white/45"
                      }`}
                      aria-label={`画像${index + 1}を表示`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Message */}
        <section id="message" className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-5">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold tracking-[0.2em] text-[#a7792f]">
                MESSAGE
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                金融を、もっと身近なものへ。
              </h2>
            </div>

            <div className="rounded-[2rem] bg-[#f7f4ed] p-8 leading-9 text-[#444] md:p-12 md:text-lg">
              <p>
                本来「金融」は、単にお金を増やす技術ではありません。人々の生活を守り、人生の選択肢を増やすための「教養」です。だからこそ「金融取引」と「学習」をしっかりと切り分け、純粋に学ぶことに集中できる研修を届けたいです。変化の激しい現代を生き抜くための「お金のルール」と「判断力」を、多くの方が身に付けることで、社会全体が良い方向に進んでいくと信じています。
              </p>
            </div>
          </div>
        </section>

        {/* Three literacy */}
        <section id="service" className="bg-[#3f7a5a] py-20 text-white">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-12">
              <p className="text-sm font-bold tracking-[0.2em] text-[#e5c46f]">
                FINANCIAL LITERACY
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                3つの金融リテラシー向上で社会に貢献
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] bg-white/10 p-7">
                <p className="text-5xl font-black text-[#e5c46f]">真</p>
                <h3 className="mt-5 text-xl font-bold">真 金融リテラシー</h3>
                <p className="mt-4 leading-8 text-white/80">
                  テクニックではなく、教養として金融を学ぶ。
                </p>
              </div>

              <div className="rounded-[2rem] bg-white/10 p-7">
                <p className="text-5xl font-black text-[#e5c46f]">新</p>
                <h3 className="mt-5 text-xl font-bold">新 金融リテラシー</h3>
                <p className="mt-4 leading-8 text-white/80">
                  デフレからインフレへのマインド転換で生活を守る。
                </p>
              </div>

              <div className="rounded-[2rem] bg-white/10 p-7">
                <p className="text-5xl font-black text-[#e5c46f]">信</p>
                <h3 className="mt-5 text-xl font-bold">信 金融リテラシー</h3>
                <p className="mt-4 leading-8 text-white/80">
                  信頼される金融担当者の育成をサポートする。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile */}
        <section id="profile" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10">
              <p className="text-sm font-bold tracking-[0.2em] text-[#a7792f]">
                PROFILE
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                講師プロフィール
              </h2>
            </div>

            <div className="grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              {" "}
              {/* 左側：プロフィールカード */}
              <div className="space-y-7">
                <div className="rounded-[2rem] border border-black/10 bg-[#fffaf0] p-6 shadow-sm md:p-7">
                  <p className="text-sm font-bold text-[#a7792f]">
                    代表取締役 兼 講師
                  </p>

                  <h3 className="mt-3 text-3xl font-black">山田 紳一郎</h3>
                  <p className="mt-2 text-sm text-[#777]">Shinichiro Yamada</p>

                  <div className="mt-6 flex justify-center">
                    <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[1.5rem] bg-[#f7f4ed] shadow-sm">
                      <Image
                        src="/images/profile1.jpg"
                        alt="山田紳一郎 講師プロフィール写真1"
                        fill
                        sizes="(max-width: 768px) 100vw, 280px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-[#555]">
                    大学卒業後、みずほ銀行へ入行。のちに希望していた外国為替部門に配属されるが、毎日13時間働く過酷な環境から精神的にも追い込まれ体調を壊し退職。その後、心の癒しを目的にオーストラリアで1年間を過ごす。その中で職を探した結果、未経験にも関わらず中国人夫妻が経営する中国式マッサージ店でマッサージ師として働く。帰国後、地元福岡で金融の世界に戻り、外資系保険会社などを経てIFAとして独立。「金融をもっと身近な存在にしたい」をテーマに、2024年シン金融教育研究所を設立。「金融」は、単にお金を増やす技術ではなく、人々の生活を守り、人生の選択肢を増やすための「教養」との信念で活動する。マッサージと同様に『痛いところに手が届く』日本唯一の証券アナリスト。
                  </p>
                  <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-5">
                    <p className="mb-3 text-sm font-bold text-[#a7792f]">
                      基本情報
                    </p>

                    <p className="text-sm leading-7 text-[#555]">
                      ・福岡県小郡市出身 1978年生まれ かに座
                      <br />
                      ・妻1人子供2人の4人家族
                      <br />
                      ・日本証券アナリスト協会 認定アナリスト
                      <br />
                      ・一般社団法人マネーリテラシー推進協会 認定講師
                    </p>
                  </div>
                </div>
              </div>
              {/* 右側：経歴情報 */}
              <div className="h-full rounded-[2rem] border border-black/10 bg-[#fffaf0] p-6 shadow-sm md:p-8">
                {" "}
                <dl className="grid gap-6">
                  <div className="border-b border-black/10 pb-5">
                    <dt className="text-sm font-bold text-[#a7792f]">経歴</dt>
                    <dd className="mt-2 leading-8 text-[#444]">
                      小郡市立御原小学校 → 小郡市立宝城中学校 →
                      国立久留米工業高等専門学校 → 九州大学経済学部 → みずほ銀行
                      → オーストラリア放浪 → マニュライフ生命保険などを経て独立
                    </dd>
                  </div>

                  <div className="border-b border-black/10 pb-5">
                    <dt className="text-sm font-bold text-[#a7792f]">資格</dt>
                    <dd className="mt-2 leading-8 text-[#444]">
                      日本証券アナリスト協会　認定アナリスト
                    </dd>
                  </div>

                  <div className="border-b border-black/10 pb-5">
                    <dt className="text-sm font-bold text-[#a7792f]">
                      専門分野
                    </dt>
                    <dd className="mt-2 leading-8 text-[#444]">
                      外国為替、欧州通貨、インフレーションの歴史
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-bold text-[#a7792f]">趣味</dt>
                    <dd className="mt-2 leading-8 text-[#444]">
                      テニス（シングルス）　海外旅行（現地の物価調査）
                    </dd>

                    <div className="my-5 border-t border-black/10" />

                    <dt className="text-sm font-bold text-[#a7792f]">特技</dt>
                    <dd className="mt-2 leading-8 text-[#444]">
                      中国式マッサージ
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Training */}
        <section className="bg-[#fffaf0] py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold tracking-[0.2em] text-[#a7792f]">
                TRAINING
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">研修実績</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "株式会社共栄会保険代行 福岡支店",
                "株式会社みなさまの保険 福岡支店",
                "株式会社C＆C",
                "On association株式会社",
                "一般の方向け研修 多数",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-white p-5 font-bold text-[#333] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company */}
        <section id="company" className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-5">
            <div className="mb-10">
              <p className="text-sm font-bold tracking-[0.2em] text-[#a7792f]">
                COMPANY
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">企業概要</h2>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10">
              {[
                ["社名", "株式会社 シン金融教育研究所"],
                ["英文表記", "SHIN - Lab for Financial Education"],
                ["代表", "山田紳一郎"],
                ["所在地", "福岡県福岡市"],
                ["設立", "2024年12月"],
                ["事業概要", "金融教育事業 / 子供達向けお金教育の研究"],
                ["取引金融機関", "福岡信用金庫 薬院支店"],
                ["事業提携", "一般社団法人マネーリテラシー推進協会"],
                ["師", "濱田智幸氏"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid border-b border-black/10 last:border-b-0 md:grid-cols-[220px_1fr]"
                >
                  <div className="bg-[#f7f4ed] px-6 py-5 text-sm font-bold text-[#a7792f]">
                    {label}
                  </div>
                  <div className="px-6 py-5 leading-8 text-[#444]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111] px-5 py-8 text-center text-sm text-white/60">
        © SHIN - Lab for Financial Education
      </footer>
    </div>
  );
}

"use client";

import {
  Layers,
  FileText,
  Box,
  Share2,
  Search,
  Sun,
  ArrowRight,
  Youtube,
  Instagram,
  Linkedin,
  Link2,
} from "lucide-react";

const areas = [
  {
    number: "01",
    title: "NRI",
    subtitle: "Narrative Reasoning Intelligence",
    description:
      "Analisis narasi secara sistematis dan berlapis. Bukan hanya apa yang terlihat, tetapi juga apa yang tersembunyi di baliknya.",
    link: "Buka NRI",
    icon: Layers,
    image: "/images/card-nri.jpg",
  },
  {
    number: "02",
    title: "Opini",
    subtitle: "Tulisan & Analisis",
    description:
      "Catatan, opini, dan refleksi tentang isu-isu penting dari sudut pandang yang jernih dan kritis.",
    link: "Baca Artikel",
    icon: FileText,
    image: "/images/card-opini.jpg",
  },
  {
    number: "03",
    title: "Projects",
    subtitle: "Apps & Works",
    description:
      "Beragam proyek, aplikasi, dan eksperimen untuk menjawab masalah nyata dengan teknologi dan pemikiran sistematis.",
    link: "Lihat Projects",
    icon: Box,
    image: "/images/card-projects.jpg",
  },
  {
    number: "04",
    title: "Social Live",
    subtitle: "Aktivitas Terkini",
    description:
      "Update terkini dari berbagai platform sosial media dalam satu tempat.",
    link: "Lihat Social Live",
    icon: Share2,
    image: "/images/card-social.jpg",
  },
];

const articles = [
  {
    category: "SOCIETY",
    title: "Ketika Narasi Mengalahkan Fakta",
    date: "12 Sep 2026",
    read: "8 min read",
    image: "/images/article-01.jpg",
  },
  {
    category: "TECHNOLOGY",
    title: "Di Balik Layar Algoritma",
    date: "10 Sep 2026",
    read: "6 min read",
    image: "/images/article-02.jpg",
  },
  {
    category: "REFLECTION",
    title: "Generasi yang Tumbuh di Dunia yang Berbeda",
    date: "7 Sep 2026",
    read: "5 min read",
    image: "/images/article-03.jpg",
  },
];

const navigation = [
  { label: "Home", href: "#" },
  { label: "NRI", href: "#nri" },
  { label: "Opini", href: "#opini" },
  { label: "Projects", href: "#projects" },
  { label: "Social Live", href: "#social" },
  { label: "About", href: "#about" },
];

export default function Home() {
  return (
    <main className="site">

      {/* =========================
          NAVBAR
      ========================= */}
      <header className="site-header">
        <div className="brand">
          <div className="brand-name">YULIA HARTATI</div>
          <div className="brand-tagline">
            IDEAS · ANALYSIS · TOOLS · WORK
          </div>
        </div>

        <nav className="main-nav">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={index === 0 ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="search-button" aria-label="Search">
            <Search size={17} strokeWidth={1.5} />
            <span>Search...</span>
          </button>

          <button className="theme-button" aria-label="Toggle theme">
            <Sun size={18} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* =========================
          HERO
      ========================= */}
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">
            WELCOME TO MY DIGITAL SPACE
          </span>

          <h1>
            Understand
            <br />
            the narrative.
            <br />
            <em>See the bigger picture.</em>
          </h1>

          <p>
            Exploring the intersection of society, technology, and human
            behavior through analysis, writing, and tools that help us think
            more clearly.
          </p>

          <div className="hero-actions">
            <a href="#nri" className="button button-primary">
              Explore NRI
              <ArrowRight size={17} />
            </a>

            <a href="#opini" className="button button-secondary">
              Read Latest Article
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(7,12,16,.96) 0%, rgba(7,12,16,.68) 35%, rgba(7,12,16,.10) 75%), url('/images/hero.jpg')",
          }}
        >
          <div className="hero-quote">
            <span className="quote-mark">“</span>
            <p>
              Dunia tidak lagi
              <br />
              diperintah senjata.
              <br />
              Tetapi narasi.
            </p>
            <span className="quote-line" />
          </div>
        </div>
      </section>

      {/* =========================
          FOUR MAIN AREAS
      ========================= */}
      <section className="areas-section" id="nri">
        <div className="areas-grid">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                className="area-card"
                key={area.title}
                style={{
                  backgroundImage: `
                    linear-gradient(
                      180deg,
                      rgba(8,13,17,.18) 0%,
                      rgba(8,13,17,.72) 52%,
                      rgba(8,13,17,.97) 100%
                    ),
                    url('${area.image}')
                  `,
                }}
              >
                <div className="area-card-inner">
                  <span className="card-number">
                    {area.number}
                  </span>

                  <div className="area-icon">
                    <Icon size={29} strokeWidth={1.35} />
                  </div>

                  <div className="area-content">
                    <h2>{area.title}</h2>

                    <span className="area-subtitle">
                      {area.subtitle}
                    </span>

                    <p>{area.description}</p>

                    <a href="#">
                      {area.link}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================
          LATEST ARTICLES
      ========================= */}
      <section className="articles-section" id="opini">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FEATURED</span>

            <h2>Artikel Terbaru</h2>

            <p>
              Pemikiran tentang isu penting, manusia, teknologi,
              dan masa depan.
            </p>
          </div>

          <a href="#">
            Lihat semua artikel
            <ArrowRight size={15} />
          </a>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <div
                className="article-thumb"
                style={{
                  backgroundImage: `url('${article.image}')`,
                }}
              />

              <div className="article-body">
                <span className="article-category">
                  {article.category}
                </span>

                <h3>{article.title}</h3>

                <div className="article-meta">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          SOCIAL LIVE
      ========================= */}
      <section className="social-section" id="social">
        <div className="social-inner">
          <span className="eyebrow">
            04 / SOCIAL LIVE
          </span>

          <h2>
            Ideas don&apos;t stop
            <br />
            at the website.
          </h2>

          <p>
            A live layer connecting the ecosystem with ongoing
            conversations, publications, and activity across
            social platforms.
          </p>

          <a href="#" className="button button-secondary">
            Lihat Social Live
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}
      <section className="about-section" id="about">
        <div className="about-label eyebrow">
          ABOUT
        </div>

        <div className="about-grid">
          <h2>
            Yulia
            <br />
            Hartati.
          </h2>

          <div className="about-copy">
            <p>
              Writing, analysis, experimentation, and building
              tools around one recurring question:
            </p>

            <strong>
              how do we understand what we are seeing?
            </strong>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="site-footer">
        <div className="footer-main">

          <div className="footer-quote">
            <blockquote>
              “Lebih banyak pertanyaan,
              <br />
              lebih sedikit kepastian,
              <br />
              dunia akan jadi tempat
              <br />
              yang lebih baik.”
            </blockquote>

            <span className="quote-line" />
          </div>

          <div className="footer-links">
            <span className="footer-heading">
              QUICK LINKS
            </span>

            <a href="#nri">NRI</a>
            <a href="#opini">Opini</a>
            <a href="#projects">Projects</a>
            <a href="#social">Social Live</a>
            <a href="#about">About</a>
          </div>

          <div className="footer-connect">
            <span className="footer-heading">
              STAY CONNECTED
            </span>

            <div className="social-icons">
              <a href="#" aria-label="YouTube">
                <Youtube size={18} />
              </a>

              <a href="#" aria-label="X">
                X
              </a>

              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>

              <a href="#" aria-label="TikTok">
                ♪
              </a>

              <a href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>

              <a href="#" aria-label="Link">
                <Link2 size={18} />
              </a>
            </div>

            <div className="newsletter">
              <p>
                Dapatkan update artikel dan proyek terbaru.
              </p>

              <form>
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  aria-label="Email"
                />

                <button type="submit" aria-label="Subscribe">
                  <ArrowRight size={17} />
                </button>
              </form>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>YULIA HARTATI</span>

          <span>
            © 2026 yuliahartati.com. All rights reserved.
          </span>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
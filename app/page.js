import {
  Layers3,
  FileText,
  Box,
  Share2,
  ArrowRight,
  Search,
  Sun,
} from "lucide-react";

const areas = [
  {
    number: "01",
    title: "NRI",
    subtitle: "Narrative Reasoning Intelligence",
    text: "Analisis narasi secara sistematis dan berlapis. Bukan hanya apa yang terlihat, tetapi juga apa yang tersembunyi di baliknya.",
    link: "Buka NRI",
    icon: Layers3,
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "Opini",
    subtitle: "Tulisan & Analisis",
    text: "Catatan, opini, dan refleksi tentang isu-isu penting dari sudut pandang yang jernih dan kritis.",
    link: "Baca Artikel",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Projects",
    subtitle: "Apps & Works",
    text: "Beragam proyek, aplikasi, dan eksperimen untuk menjawab masalah nyata dengan teknologi dan pemikiran sistematis.",
    link: "Lihat Projects",
    icon: Box,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    title: "Social Live",
    subtitle: "Aktivitas Terkini",
    text: "Update terkini dari berbagai platform sosial media dalam satu tempat.",
    link: "Lihat Social Live",
    icon: Share2,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  },
];

const articles = [
  {
    category: "SOCIETY",
    title: "Ketika Narasi Mengalahkan Fakta",
    date: "12 Sep 2026",
    read: "8 min read",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "TECHNOLOGY",
    title: "Di Balik Layar Algoritma",
    date: "10 Sep 2026",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "REFLECTION",
    title: "Generasi yang Tumbuh di Dunia yang Berbeda",
    date: "7 Sep 2026",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
  },
];

const projects = [
  {
    number: "01",
    title: "NRI",
    description: "Narrative Reasoning Intelligence",
  },
  {
    number: "02",
    title: "MapelQ",
    description: "AI-powered learning environment",
  },
  {
    number: "03",
    title: "LiaOS",
    description: "Framework for layered reality analysis",
  },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="brand">
          <div className="brand-name">YULIA HARTATI</div>
          <div className="brand-meta">IDEAS · ANALYSIS · TOOLS · WORK</div>
        </div>

        <nav className="main-nav">
          <a className="active" href="#">
            Home
          </a>
          <a href="#nri">NRI</a>
          <a href="#opini">Opini</a>
          <a href="#projects">Projects</a>
          <a href="#social">Social Live</a>
          <a href="#about">About</a>
        </nav>

        <div className="header-actions">
          <button aria-label="Search">
            <Search size={16} strokeWidth={1.5} />
            <span>Search...</span>
          </button>

          <button aria-label="Theme">
            <Sun size={16} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow">WELCOME TO MY DIGITAL SPACE</div>

          <h1>
            Understand
            <br />
            the narrative.
            <br />
            <span>See the bigger picture.</span>
          </h1>

          <p>
            Exploring the intersection of society, technology, and human
            behavior through analysis, writing, and tools that help us think
            more clearly.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#nri">
              Explore NRI <ArrowRight size={15} />
            </a>

            <a className="button button-outline" href="#opini">
              Read Latest Article
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(5,10,13,.12), rgba(5,10,13,.05)), url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85')",
          }}
        >
          <div className="hero-quote">
            <span>“</span>
            <p>
              Dunia tidak lagi
              <br />
              diperintah senjata.
              <br />
              Tetapi narasi.
            </p>
            <i />
          </div>
        </div>
      </section>

      {/* FOUR AREAS */}
      <section className="areas-section">
        <div className="areas-grid">
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <a
                key={area.number}
                href={
                  area.title === "NRI"
                    ? "#nri"
                    : area.title === "Opini"
                    ? "#opini"
                    : area.title === "Projects"
                    ? "#projects"
                    : "#social"
                }
                className="area-card"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(7,11,14,.96) 0%, rgba(7,11,14,.82) 58%, rgba(7,11,14,.38) 100%), url('${area.image}')`,
                }}
              >
                <div className="area-number">{area.number}</div>

                <div className="area-icon">
                  <Icon size={22} strokeWidth={1.35} />
                </div>

                <div className="area-content">
                  <h2>{area.title}</h2>
                  <div className="area-subtitle">{area.subtitle}</div>
                  <p>{area.text}</p>

                  <span className="area-link">
                    {area.link} <ArrowRight size={13} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ARTICLES */}
      <section id="opini" className="articles-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">FEATURED</div>
            <h2>Artikel Terbaru</h2>
            <p>
              Pemikiran tentang isu penting, manusia, teknologi, dan masa
              depan.
            </p>
          </div>

          <a href="#opini" className="section-link">
            Lihat semua artikel <ArrowRight size={13} />
          </a>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <div
                className="article-image"
                style={{
                  backgroundImage: `url('${article.image}')`,
                }}
              />

              <div className="article-body">
                <div className="article-category">{article.category}</div>

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

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">PROJECTS</div>
            <h2>Things being built.</h2>
            <p>Tools, experiments, and systems in development.</p>
          </div>

          <a href="#projects" className="section-link">
            Lihat semua <ArrowRight size={13} />
          </a>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <a href="#projects" className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>

              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <ArrowRight size={14} />
            </a>
          ))}
        </div>
      </section>

      {/* SOCIAL LIVE */}
      <section id="social" className="social-section">
        <div className="eyebrow">04 / SOCIAL LIVE</div>

        <h2>
          Ideas don&apos;t stop
          <br />
          at the website.
        </h2>

        <p>
          A live layer connecting the ecosystem with ongoing conversations,
          publications, and activity across social platforms.
        </p>

        <a href="#social" className="button button-outline">
          Lihat Social Live <ArrowRight size={14} />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="eyebrow">ABOUT</div>

        <div className="about-grid">
          <h2>
            Yulia
            <br />
            Hartati.
          </h2>

          <div className="about-copy">
            <p>
              Writing, analysis, experimentation, and building tools around
              one recurring question:
            </p>

            <strong>how do we understand what we are seeing?</strong>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-quote">
          “Lebih banyak pertanyaan,
          <br />
          lebih sedikit kepastian,
          <br />
          dunia akan jadi tempat
          <br />
          yang lebih baik.”
        </div>

        <div className="footer-column">
          <div className="footer-label">QUICK LINKS</div>
          <a href="#nri">NRI</a>
          <a href="#opini">Opini</a>
          <a href="#projects">Projects</a>
          <a href="#social">Social Live</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-column">
          <div className="footer-label">STAY CONNECTED</div>

          <div className="social-icons">
            <span>YouTube</span>
            <span>X</span>
            <span>Instagram</span>
            <span>TikTok</span>
            <span>LinkedIn</span>
          </div>

          <div className="newsletter">
            <p>Dapatkan update artikel dan proyek terbaru.</p>

            <div className="newsletter-input">
              <span>Masukkan email Anda</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>YULIA HARTATI</span>
          <span>© 2026 yuliahartati.com. All rights reserved.</span>

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
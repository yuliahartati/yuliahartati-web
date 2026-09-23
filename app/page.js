"use client";

const sections = [
  {
    number: "01",
    title: "NRI",
    subtitle: "Narrative Reasoning Intelligence",
    text: "Analisis narasi secara sistematis dan berlapis. Bukan hanya apa yang terlihat, tetapi juga apa yang tersembunyi di baliknya.",
    action: "Buka NRI",
  },
  {
    number: "02",
    title: "Opini",
    subtitle: "Tulisan & Analisis",
    text: "Catatan, opini, dan refleksi tentang isu-isu penting dari sudut pandang yang jernih dan kritis.",
    action: "Baca Artikel",
  },
  {
    number: "03",
    title: "Projects",
    subtitle: "Apps & Works",
    text: "Beragam proyek, aplikasi, dan eksperimen untuk menjawab masalah nyata dengan teknologi dan pemikiran sistematis.",
    action: "Lihat Projects",
  },
  {
    number: "04",
    title: "Social Live",
    subtitle: "Aktivitas Terkini",
    text: "Update terkini dari berbagai platform sosial media dalam satu tempat.",
    action: "Lihat Social Live",
  },
];

const articles = [
  {
    category: "SOCIETY",
    title: "Ketika Narasi Mengalahkan Fakta",
    date: "12 Sep 2026",
    read: "8 min read",
    image: "article-image article-one",
  },
  {
    category: "TECHNOLOGY",
    title: "Di Balik Layar Algoritma",
    date: "10 Sep 2026",
    read: "6 min read",
    image: "article-image article-two",
  },
  {
    category: "REFLECTION",
    title: "Generasi yang Tumbuh di Dunia yang Berbeda",
    date: "7 Sep 2026",
    read: "5 min read",
    image: "article-image article-three",
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
    <main className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <div className="brand">
          <strong>YULIA HARTATI</strong>
          <span>IDEAS · ANALYSIS · TOOLS · WORK</span>
        </div>

        <nav className="main-nav">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#nri">NRI</a>
          <a href="#opini">Opini</a>
          <a href="#projects">Projects</a>
          <a href="#social">Social Live</a>
          <a href="#about">About</a>
        </nav>

        <div className="header-tools">
          <button className="search-button" aria-label="Search">
            <span>⌕</span>
            <span>Search...</span>
          </button>

          <button className="theme-button" aria-label="Toggle theme">
            ☼
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">WELCOME TO MY DIGITAL SPACE</span>

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
            <a className="button button-primary" href="#nri">
              Explore NRI <span>→</span>
            </a>

            <a className="button button-secondary" href="#opini">
              Read Latest Article
            </a>
          </div>
        </div>

        <div className="hero-visual">
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

      {/* FOUR MAIN AREAS */}
      <section id="nri" className="areas-section">
        <div className="areas-grid">
          {sections.map((item) => (
            <article
              key={item.number}
              className={`area-card area-${item.number}`}
            >
              <div className="area-number">{item.number}</div>

              <div className="area-icon">
                {item.number === "01" && "◇"}
                {item.number === "02" && "▤"}
                {item.number === "03" && "□"}
                {item.number === "04" && "⌘"}
              </div>

              <div className="area-content">
                <h2>{item.title}</h2>
                <span>{item.subtitle}</span>
                <p>{item.text}</p>

                <a href={item.number === "01" ? "#nri" : `#${item.title.toLowerCase().replace(" ", "-")}`}>
                  {item.action} <b>→</b>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section id="opini" className="articles-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FEATURED</span>
            <h2>Artikel Terbaru</h2>
            <p>
              Pemikiran tentang isu penting, manusia, teknologi, dan masa
              depan.
            </p>
          </div>

          <a href="#opini">Lihat semua artikel →</a>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.title}>
              <div className={article.image} />

              <div className="article-body">
                <span>{article.category}</span>
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
            <span className="eyebrow">PROJECTS</span>
            <h2>Things being built.</h2>
            <p>Tools, experiments, and systems in development.</p>
          </div>

          <a href="#projects">Lihat semua →</a>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <span className="project-number">{project.number}</span>

              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <span className="project-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* SOCIAL LIVE */}
      <section id="social" className="social-section">
        <div>
          <span className="eyebrow">04 / SOCIAL LIVE</span>

          <h2>
            Ideas don't stop
            <br />
            at the website.
          </h2>

          <p>
            A live layer connecting the ecosystem with ongoing conversations,
            publications, and activity across social platforms.
          </p>

          <a className="button button-secondary" href="#social">
            Lihat Social Live →
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-title">
          <span className="eyebrow">ABOUT</span>

          <h2>
            Yulia
            <br />
            Hartati.
          </h2>
        </div>

        <div className="about-copy">
          <p>
            Writing, analysis, experimentation, and building tools around one
            recurring question:
          </p>

          <strong>how do we understand what we are seeing?</strong>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
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

          <span>—</span>
        </div>

        <div className="footer-links">
          <span>QUICK LINKS</span>
          <a href="#nri">NRI</a>
          <a href="#opini">Opini</a>
          <a href="#projects">Projects</a>
          <a href="#social">Social Live</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-social">
          <span>STAY CONNECTED</span>

          <div className="social-icons">
            <span>▶</span>
            <span>𝕏</span>
            <span>◎</span>
            <span>♪</span>
            <span>in</span>
            <span>↗</span>
          </div>

          <div className="newsletter">
            <p>Dapatkan update artikel dan proyek terbaru.</p>

            <div>
              <span>Masukkan email Anda</span>
              <b>→</b>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <strong>YULIA HARTATI</strong>

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
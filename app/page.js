const navigation = [
  { label: "Home", href: "/" },
  { label: "NRI", href: "#nri" },
  { label: "Opini", href: "#opini" },
  { label: "Projects", href: "#projects" },
  { label: "Social Live", href: "#social" },
  { label: "About", href: "#about" },
];

const ecosystem = [
  {
    number: "01",
    title: "NRI",
    subtitle: "Narrative Reasoning Intelligence",
    description:
      "Analisis narasi secara sistematis dan berlapis. Bukan hanya apa yang terlihat, tetapi juga apa yang tersembunyi di baliknya.",
    action: "Buka NRI",
    href: "#nri",
  },
  {
    number: "02",
    title: "Opini",
    subtitle: "Tulisan & Analisis",
    description:
      "Catatan, opini, dan refleksi tentang isu-isu penting dari sudut pandang yang jernih dan kritis.",
    action: "Baca Artikel",
    href: "#opini",
  },
  {
    number: "03",
    title: "Projects",
    subtitle: "Apps & Works",
    description:
      "Beragam proyek, aplikasi, dan eksperimen untuk menjawab masalah nyata dengan teknologi dan pemikiran sistematis.",
    action: "Lihat Projects",
    href: "#projects",
  },
  {
    number: "04",
    title: "Social Live",
    subtitle: "Aktivitas Terkini",
    description:
      "Update terkini dari berbagai platform sosial media dalam satu tempat.",
    action: "Lihat Social Live",
    href: "#social",
  },
];

const articles = [
  {
    category: "SOCIETY",
    title: "Ketika Narasi Mengalahkan Fakta",
    date: "12 Sep 2026",
    read: "8 min read",
  },
  {
    category: "TECHNOLOGY",
    title: "Di Balik Layar Algoritma",
    date: "10 Sep 2026",
    read: "6 min read",
  },
  {
    category: "REFLECTION",
    title: "Generasi yang Tumbuh di Dunia yang Berbeda",
    date: "7 Sep 2026",
    read: "5 min read",
  },
];

export default function Home() {
  return (
    <main className="home">
      {/* HEADER */}
      <header className="site-header">
        <div className="brand">
          <a href="/" className="brand-name">
            YULIA HARTATI
          </a>
          <span className="brand-tagline">
            IDEAS · ANALYSIS · TOOLS · WORK
          </span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={item.label === "Home" ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="search-button" type="button">
            <span className="search-icon">⌕</span>
            <span>Search...</span>
          </button>

          <button className="theme-button" type="button" aria-label="Theme">
            ☼
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <span className="section-kicker">
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
              Explore NRI <span>→</span>
            </a>

            <a href="#opini" className="button button-secondary">
              Read Latest Article
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image hero-image-main">
            <span className="hero-image-placeholder">
              HERO IMAGE
            </span>
          </div>

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

      {/* ECOSYSTEM */}
      <section className="ecosystem-section" id="nri">
        <div className="ecosystem-grid">
          {ecosystem.map((item) => (
            <article className="ecosystem-card" key={item.number}>
              <div className="card-number">{item.number}</div>

              <div className="card-icon">
                {item.number === "01" && "◈"}
                {item.number === "02" && "▤"}
                {item.number === "03" && "◇"}
                {item.number === "04" && "⌘"}
              </div>

              <div className="card-content">
                <h2>{item.title}</h2>
                <span>{item.subtitle}</span>

                <p>{item.description}</p>

                <a href={item.href} className="card-link">
                  {item.action} <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="featured-section" id="opini">
        <div className="featured-intro">
          <span className="section-kicker">FEATURED</span>

          <h2>Artikel Terbaru</h2>

          <p>
            Pemikiran tentang isu penting, manusia, teknologi, dan masa depan.
          </p>
        </div>

        <div className="article-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={article.title}>
              <div className={`article-image article-image-${index + 1}`}>
                <span>{article.category}</span>
              </div>

              <div className="article-content">
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

        <div className="section-more">
          <a href="#opini">
            Lihat semua artikel <span>→</span>
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">PROJECTS</span>
            <h2>Things being built.</h2>
          </div>

          <a href="#projects" className="section-link">
            View Projects → 
          </a>
        </div>

        <div className="project-list">
          <a href="#nri" className="project-row">
            <span>01</span>
            <div>
              <h3>NRI</h3>
              <p>Narrative Reasoning Intelligence</p>
            </div>
            <span className="project-arrow">↗</span>
          </a>

          <a href="#projects" className="project-row">
            <span>02</span>
            <div>
              <h3>MapelQ</h3>
              <p>AI-powered learning environment</p>
            </div>
            <span className="project-arrow">↗</span>
          </a>

          <a href="#projects" className="project-row">
            <span>03</span>
            <div>
              <h3>LiaOS</h3>
              <p>Framework for layered reality analysis</p>
            </div>
            <span className="project-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* SOCIAL LIVE */}
      <section className="social-section" id="social">
        <div>
          <span className="section-kicker">04 / SOCIAL LIVE</span>

          <h2>
            Ideas don&apos;t stop
            <br />
            at the website.
          </h2>

          <p>
            A live layer connecting the ecosystem with ongoing conversations,
            publications, and activity across social platforms.
          </p>

          <a href="#social" className="button button-secondary">
            Social Live →
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div>
          <span className="section-kicker">ABOUT</span>

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
        <div className="footer-main">
          <div className="footer-quote">
            <p>
              “Lebih banyak pertanyaan,
              <br />
              lebih sedikit kepastian,
              <br />
              dunia akan jadi tempat
              <br />
              yang lebih baik.”
            </p>

            <span />
          </div>

          <div className="footer-links">
            <span className="footer-label">QUICK LINKS</span>

            <a href="#nri">NRI</a>
            <a href="#opini">Opini</a>
            <a href="#projects">Projects</a>
            <a href="#social">Social Live</a>
            <a href="#about">About</a>
          </div>

          <div className="footer-social">
            <span className="footer-label">STAY CONNECTED</span>

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

              <div className="newsletter-input">
                <span>Masukkan email Anda</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <strong>YULIA HARTATI</strong>

          <span>© 2026 yuliahartati.com. All rights reserved.</span>

          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
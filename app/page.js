const navigation = [
  { label: "NRI", href: "#nri" },
  { label: "Opini", href: "#opini" },
  { label: "Projects", href: "#projects" },
  { label: "Social Live", href: "#social" },
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <a href="/" className="brand">
          YULIA HARTATI
        </a>

        <nav className="main-nav">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#about" className="header-link">
          About
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">
          THINKING · ANALYSIS · CREATION
        </div>

        <h1>
          Understanding
          <br />
          <span>how ideas move.</span>
        </h1>

        <p className="hero-description">
          A personal ecosystem for analysis, writing, experiments,
          and tools for understanding narratives and the systems behind them.
        </p>

        <div className="hero-actions">
          <a href="#nri" className="button button-primary">
            Explore NRI
          </a>

          <a href="#opini" className="button button-secondary">
            Read Opini
          </a>
        </div>
      </section>

      {/* NRI */}
      <section id="nri" className="feature-section">
        <div className="section-label">01 / NRI</div>

        <div className="feature-grid">
          <div>
            <p className="eyebrow">NARRATIVE REASONING INTELLIGENCE</p>

            <h2>
              Beyond the
              <br />
              surface of a narrative.
            </h2>
          </div>

          <div className="feature-copy">
            <p>
              NRI is a narrative analysis system designed to examine
              claims, evidence, assumptions, context, and reasoning.
            </p>

            <a href="/nri" className="text-link">
              Open NRI →
            </a>
          </div>
        </div>
      </section>

      {/* OPINI */}
      <section id="opini" className="content-section">
        <div className="section-heading">
          <div>
            <div className="section-label">02 / OPINI</div>
            <h2>Ideas in writing.</h2>
          </div>

          <a href="/opini" className="text-link">
            All Opini →
          </a>
        </div>

        <div className="card-grid">
          <article className="content-card">
            <div className="card-meta">ANALYSIS</div>
            <h3>Understanding the structure behind information.</h3>
            <p>
              Essays, observations, and analytical notes about information,
              reasoning, society, and systems.
            </p>
            <a href="/opini">Read article →</a>
          </article>

          <article className="content-card">
            <div className="card-meta">THOUGHTS</div>
            <h3>Questions before conclusions.</h3>
            <p>
              A space for ideas that begin with questions rather than
              predetermined answers.
            </p>
            <a href="/opini">Explore →</a>
          </article>

          <article className="content-card">
            <div className="card-meta">ESSAYS</div>
            <h3>Patterns worth examining.</h3>
            <p>
              Longer-form writing about narratives, education, technology,
              and human reasoning.
            </p>
            <a href="/opini">Explore →</a>
          </article>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="content-section projects-section">
        <div className="section-heading">
          <div>
            <div className="section-label">03 / PROJECTS</div>
            <h2>Things being built.</h2>
          </div>

          <a href="/projects" className="text-link">
            View Projects →
          </a>
        </div>

        <div className="project-list">
          <div className="project-item">
            <span>01</span>
            <div>
              <h3>NRI</h3>
              <p>Narrative Reasoning Intelligence</p>
            </div>
            <span>↗</span>
          </div>

          <div className="project-item">
            <span>02</span>
            <div>
              <h3>MapelQ</h3>
              <p>AI-powered learning environment</p>
            </div>
            <span>↗</span>
          </div>

          <div className="project-item">
            <span>03</span>
            <div>
              <h3>LiaOS</h3>
              <p>Framework for layered reality analysis</p>
            </div>
            <span>↗</span>
          </div>
        </div>
      </section>

      {/* SOCIAL LIVE */}
      <section id="social" className="social-section">
        <div className="section-label">04 / SOCIAL LIVE</div>

        <div className="social-inner">
          <h2>
            Ideas don't stop
            <br />
            at the website.
          </h2>

          <p>
            A live layer connecting the ecosystem with ongoing conversations,
            publications, and activity across social platforms.
          </p>

          <a href="/social-live" className="button button-secondary">
            Social Live →
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="section-label">ABOUT</div>

        <div className="about-grid">
          <h2>
            Yulia
            <br />
            Hartati.
          </h2>

          <p>
            Writing, analysis, experimentation, and building tools around
            one recurring question:
            <br />
            <strong>how do we understand what we are seeing?</strong>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div>© {new Date().getFullYear()} Yulia Hartati</div>

        <div className="footer-links">
          <a href="#nri">NRI</a>
          <a href="#opini">Opini</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </footer>
    </main>
  );
}
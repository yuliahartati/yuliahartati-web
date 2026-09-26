import styles from "./admin.module.css";

const menu = [
  {
    section: "CONTENT",
    items: ["Dashboard", "Opini", "Projects", "Social Live"],
  },
  {
    section: "MEDIA",
    items: ["Media Library"],
  },
  {
    section: "SYSTEM",
    items: ["Settings"],
  },
];

const menuLinks = {
  Dashboard: "/admin",
  Opini: "/admin/opini",
  Projects: "/admin/projects",
  "Social Live": "/admin/social",
  "Media Library": "/admin/media",
  Settings: "/admin/settings",
};

export default function AdminPage() {
  return (
    <main className={styles.admin}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <strong>YULIA HARTATI</strong>
          <span>ADMIN</span>
        </div>

        <nav>
          {menu.map((group) => (
            <div key={group.section} className={styles.menuGroup}>
              <div className={styles.sectionTitle}>{group.section}</div>

              {group.items.map((item) => (
                <a
                  key={item}
                  href={menuLinks[item]}
                  className={`${styles.menuItem} ${
                    item === "Dashboard" ? styles.active : ""
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <section className={styles.main}>
        <header className={styles.topbar}>
          <div>
            <div className={styles.eyebrow}>ADMIN PANEL</div>
            <h1>Dashboard</h1>
          </div>

          <div className={styles.user}>
            <span className={styles.avatar}>YH</span>
            <span>Yulia Hartati</span>
          </div>
        </header>

        <section className={styles.content}>
          <div className={styles.welcome}>
            <p className={styles.label}>CONTENT SYSTEM</p>
            <h2>Good morning, Yulia.</h2>
            <p>
              Manage your writing, projects, social activity, and media from
              one place.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.card}>
              <span>OPINI</span>
              <strong>0</strong>
              <small>Published articles</small>
            </div>

            <div className={styles.card}>
              <span>PROJECTS</span>
              <strong>0</strong>
              <small>Active projects</small>
            </div>

            <div className={styles.card}>
              <span>SOCIAL LIVE</span>
              <strong>0</strong>
              <small>Published posts</small>
            </div>

            <div className={styles.card}>
              <span>MEDIA</span>
              <strong>0</strong>
              <small>Uploaded files</small>
            </div>
          </div>

          <div className={styles.columns}>
            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <span className={styles.label}>RECENT</span>
                  <h3>Recent Opini</h3>
                </div>

                <a href="/admin/opini">View all</a>
              </div>

              <div className={styles.empty}>
                <p>No articles yet.</p>
                <span>
                  Your published and draft articles will appear here.
                </span>
              </div>
            </section>

            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <div>
                  <span className={styles.label}>QUICK ACTIONS</span>
                  <h3>Create something</h3>
                </div>
              </div>

              <div className={styles.actions}>
                <a href="/admin/opini/new">Tulis Opini Baru</a>
                <a href="/admin/projects">Tambah Project</a>
                <a href="/admin/social">Buat Social Post</a>
                <a href="/admin/media">Upload Media</a>
              </div>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}

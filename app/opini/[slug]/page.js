"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";

const STORAGE_KEY = "yulia_opini";

export default function OpiniDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug;

  useEffect(() => {
    if (!slug) return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const articles = raw ? JSON.parse(raw) : [];

      const found = articles.find(
        (item) =>
          item.slug === slug &&
          item.status === "Published"
      );

      setArticle(found || null);
    } catch (error) {
      console.error("Gagal membaca artikel:", error);
      setArticle(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <main style={styles.page}>
        <div style={styles.loading}>Memuat artikel...</div>
      </main>
    );
  }

  if (!article) {
    return (
      <main style={styles.page}>
        <div style={styles.notFound}>
          <div style={styles.eyebrow}>404 / ARTICLE NOT FOUND</div>

          <h1 style={styles.notFoundTitle}>
            Artikel tidak ditemukan.
          </h1>

          <p style={styles.notFoundText}>
            Artikel mungkin belum dipublish atau sudah tidak tersedia.
          </p>

          <button
            onClick={() => router.push("/")}
            style={styles.backButton}
          >
            <ArrowLeft size={15} />
            Kembali ke Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      {/* TOP BAR */}
      <div style={styles.topBar}>
        <button
          onClick={() => router.back()}
          style={styles.backLink}
        >
          <ArrowLeft size={14} />
          Kembali
        </button>

        <span style={styles.topBrand}>
          YULIA HARTATI
        </span>
      </div>

      {/* ARTICLE HEADER */}
      <article style={styles.article}>
        <div style={styles.category}>
          {article.category || "OPINI"}
        </div>

        <h1 style={styles.title}>
          {article.title}
        </h1>

        {article.excerpt && (
          <p style={styles.excerpt}>
            {article.excerpt}
          </p>
        )}

        <div style={styles.meta}>
          {article.publishDate && (
            <span style={styles.metaItem}>
              <Calendar size={14} />
              {formatDate(article.publishDate)}
            </span>
          )}

          {article.tags && (
            <span style={styles.metaItem}>
              <Tag size={14} />
              {article.tags}
            </span>
          )}
        </div>

        {/* COVER */}
        {article.cover && (
          <div style={styles.coverWrapper}>
            <img
              src={article.cover}
              alt={article.title}
              style={styles.cover}
            />
          </div>
        )}

        {/* CONTENT */}
        <div style={styles.content}>
          {article.content}
        </div>

        {/* FOOTER */}
        <div style={styles.articleFooter}>
          <div>
            <div style={styles.footerLabel}>
              YULIA HARTATI
            </div>

            <div style={styles.footerText}>
              Ideas · Analysis · Tools · Work
            </div>
          </div>

          <button
            onClick={() => router.push("/")}
            style={styles.homeButton}
          >
            Artikel lainnya
            <ArrowRight size={14} />
          </button>
        </div>
      </article>
    </main>
  );
}

function formatDate(value) {
  try {
    return new Date(value).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return value;
  }
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#070707",
    color: "#f4f1eb",
  },

  loading: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#999",
    fontSize: 13,
  },

  notFound: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "140px 24px",
  },

  eyebrow: {
    fontSize: 10,
    letterSpacing: "0.18em",
    color: "#999",
    marginBottom: 18,
  },

  notFoundTitle: {
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    fontSize: "clamp(42px, 7vw, 76px)",
    lineHeight: 0.98,
    margin: 0,
    maxWidth: 700,
  },

  notFoundText: {
    color: "#888",
    marginTop: 24,
    fontSize: 14,
  },

  topBar: {
    height: 72,
    borderBottom: "1px solid #222",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5vw",
  },

  topBrand: {
    fontFamily: "Georgia, serif",
    fontSize: 15,
    letterSpacing: "0.08em",
  },

  backLink: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "transparent",
    border: "none",
    color: "#999",
    cursor: "pointer",
    fontSize: 12,
    padding: 0,
  },

  article: {
    maxWidth: 900,
    margin: "0 auto",
    padding: "90px 24px 120px",
  },

  category: {
    fontSize: 10,
    letterSpacing: "0.2em",
    color: "#aaa",
    marginBottom: 22,
  },

  title: {
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    fontSize: "clamp(44px, 7vw, 82px)",
    lineHeight: 0.98,
    letterSpacing: "-0.025em",
    margin: 0,
    maxWidth: 850,
  },

  excerpt: {
    maxWidth: 700,
    fontSize: 18,
    lineHeight: 1.7,
    color: "#aaa",
    marginTop: 30,
  },

  meta: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 28,
    paddingTop: 20,
    borderTop: "1px solid #222",
    color: "#777",
    fontSize: 11,
  },

  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: 7,
  },

  coverWrapper: {
    marginTop: 55,
    width: "100%",
    aspectRatio: "16 / 8",
    overflow: "hidden",
    background: "#111",
  },

  cover: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  content: {
    maxWidth: 760,
    margin: "60px auto 0",
    whiteSpace: "pre-wrap",
    fontFamily: "Georgia, serif",
    fontSize: 18,
    lineHeight: 1.9,
    color: "#ddd",
  },

  articleFooter: {
    marginTop: 90,
    paddingTop: 30,
    borderTop: "1px solid #222",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },

  footerLabel: {
    fontFamily: "Georgia, serif",
    fontSize: 14,
    letterSpacing: "0.08em",
  },

  footerText: {
    marginTop: 6,
    fontSize: 10,
    color: "#666",
    letterSpacing: "0.08em",
  },

  homeButton: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "11px 16px",
    background: "transparent",
    border: "1px solid #333",
    color: "#ccc",
    cursor: "pointer",
    fontSize: 11,
  },

  backButton: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 18px",
    background: "#e7d4a8",
    border: "none",
    color: "#111",
    cursor: "pointer",
    fontSize: 12,
  },
};

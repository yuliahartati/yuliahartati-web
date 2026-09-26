"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

const STORAGE_KEY = "yulia_opini";

const fallbackCover =
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=85";

export default function OpiniDetailPage() {
  const params = useParams();

  const slug =
    typeof params?.slug === "string"
      ? params.slug
      : Array.isArray(params?.slug)
      ? params.slug[0]
      : "";

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        setLoading(false);
        return;
      }

      const stored = JSON.parse(raw);

      if (!Array.isArray(stored)) {
        setLoading(false);
        return;
      }

      const found = stored.find(
        (item) =>
          item &&
          String(item.slug || "") === String(slug) &&
          String(item.status || "").toLowerCase() ===
            "published"
      );

      setArticle(found || null);
    } catch (error) {
      console.error(
        "Gagal membaca artikel:",
        error
      );

      setArticle(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#f7f7f5",
          color: "#171717",
          padding: "80px 24px",
          fontFamily:
            "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            color: "#777",
            fontSize: 14,
          }}
        >
          Memuat artikel...
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#f7f7f5",
          color: "#171717",
          padding: "80px 24px",
          fontFamily:
            "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#666",
              textDecoration: "none",
              fontSize: 13,
              marginBottom: 40,
            }}
          >
            <ArrowLeft size={14} />
            Kembali ke Home
          </a>

          <h1
            style={{
              margin: 0,
              fontSize: 36,
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
          >
            Artikel tidak ditemukan
          </h1>

          <p
            style={{
              marginTop: 14,
              color: "#777",
              lineHeight: 1.7,
            }}
          >
            Artikel mungkin belum dipublish atau
            slug artikel tidak ditemukan.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f5",
        color: "#171717",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      <article>
        {/* HEADER */}
        <header
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: "50px 24px 30px",
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#777",
              textDecoration: "none",
              fontSize: 13,
              marginBottom: 42,
            }}
          >
            <ArrowLeft size={14} />
            Kembali
          </a>

          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 14,
            }}
          >
            {article.category || "OPINI"}
          </div>

          <h1
            style={{
              margin: 0,
              fontSize:
                "clamp(36px, 6vw, 64px)",
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: "-0.04em",
            }}
          >
            {article.title}
          </h1>

          {article.excerpt && (
            <p
              style={{
                margin:
                  "24px 0 0",
                fontSize: 18,
                lineHeight: 1.7,
                color: "#666",
                maxWidth: 720,
              }}
            >
              {article.excerpt}
            </p>
          )}

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 24,
              color: "#999",
              fontSize: 12,
            }}
          >
            <span>
              {formatDate(
                article.publishDate
              )}
            </span>

            <span>·</span>

            <span>
              {estimateReadTime(
                article.content
              )}
            </span>
          </div>
        </header>

        {/* COVER */}
        {article.cover && (
          <div
            style={{
              maxWidth: 1200,
              margin: "20px auto 0",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 8",
                borderRadius: 8,
                overflow: "hidden",
                backgroundImage: `url('${article.cover}')`,
                backgroundSize: "cover",
                backgroundPosition:
                  "center",
              }}
            />
          </div>
        )}

        {/* CONTENT */}
        <div
          style={{
            maxWidth: 760,
            margin: "60px auto 100px",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              fontSize: 17,
              lineHeight: 1.9,
              color: "#292929",
              whiteSpace: "pre-wrap",
            }}
          >
            {article.content}
          </div>
        </div>
      </article>
    </main>
  );
}

function formatDate(value) {
  if (!value) {
    return "Tanggal belum ditentukan";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return date.toLocaleDateString(
    "id-ID",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );
}

function estimateReadTime(content) {
  if (!content) {
    return "1 min read";
  }

  const words = String(content)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return `${Math.max(
    1,
    Math.ceil(words / 200)
  )} min read`;
              }

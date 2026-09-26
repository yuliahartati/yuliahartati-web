"use client";

import { useState } from "react";

const STORAGE_KEY = "yulia_opini";

export default function NewOpiniPage() {
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("Draft");
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    cover: "",
    content: "",
    category: "",
    tags: "",
    publishDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function makeSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function handleTitleChange(e) {
    const title = e.target.value;

    setForm((prev) => ({
      ...prev,
      title,
      slug: prev.slug || makeSlug(title),
    }));
  }

  function saveArticle(targetStatus) {
    if (!form.title.trim()) {
      alert("Judul opini wajib diisi.");
      return;
    }

    if (!form.excerpt.trim()) {
      alert("Excerpt wajib diisi.");
      return;
    }

    if (!form.content.trim()) {
      alert("Isi artikel wajib diisi.");
      return;
    }

    if (!form.category) {
      alert("Kategori wajib dipilih.");
      return;
    }

    setSaving(true);

    try {
      const existing = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      const article = {
        id: Date.now(),
        title: form.title.trim(),
        slug: form.slug.trim() || makeSlug(form.title),
        excerpt: form.excerpt.trim(),
        cover: form.cover,
        content: form.content.trim(),
        category: form.category,
        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        publishDate:
          form.publishDate ||
          new Date().toISOString().split("T")[0],
        status: targetStatus,
        featured,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([article, ...existing])
      );

      alert(
        targetStatus === "Published"
          ? "Opini berhasil dipublish."
          : "Draft berhasil disimpan."
      );

      window.location.href = "/admin/opini";
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan opini.");
      setSaving(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f5",
        color: "#171717",
        padding: "32px 36px 60px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: 30 }}>
          <a
            href="/admin/opini"
            style={{
              color: "#777",
              textDecoration: "none",
              fontSize: 12,
            }}
          >
            ← Back to Opini
          </a>

          <div
            style={{
              marginTop: 20,
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#999",
            }}
          >
            Content / Opini
          </div>

          <h1
            style={{
              margin: "8px 0 0",
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            New Opini
          </h1>

          <p
            style={{
              margin: "8px 0 0",
              color: "#777",
              fontSize: 13,
            }}
          >
            Create a new article, analysis, or reflection.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveArticle(status);
          }}
        >
          <section
            style={{
              background: "#fff",
              border: "1px solid #e4e4e1",
              borderRadius: 8,
              padding: 24,
            }}
          >
            {/* TITLE */}
            <Field label="Judul" required>
              <input
                name="title"
                type="text"
                value={form.title}
                onChange={handleTitleChange}
                placeholder="Masukkan judul opini..."
                style={inputStyle}
              />
            </Field>

            {/* SLUG */}
            <Field label="Slug">
              <input
                name="slug"
                type="text"
                value={form.slug}
                onChange={handleChange}
                placeholder="slug-artikel"
                style={inputStyle}
              />

              <small style={helpStyle}>
                URL artikel. Bisa diedit secara manual.
              </small>
            </Field>

            {/* EXCERPT */}
            <Field label="Excerpt" required>
              <textarea
                name="excerpt"
                rows={4}
                value={form.excerpt}
                onChange={handleChange}
                placeholder="Ringkasan singkat artikel..."
                style={{
                  ...inputStyle,
                  height: "auto",
                  paddingTop: 12,
                  resize: "vertical",
                }}
              />
            </Field>

            {/* COVER */}
            <Field label="Cover">
              <div
                style={{
                  border: "1px dashed #ccc",
                  borderRadius: 6,
                  padding: 28,
                  textAlign: "center",
                  background: "#fafaf8",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    color: "#666",
                  }}
                >
                  Cover image
                </div>

                <button
                  type="button"
                  style={{
                    marginTop: 10,
                    height: 36,
                    padding: "0 14px",
                    border: "1px solid #ccc",
                    borderRadius: 5,
                    background: "#fff",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                  onClick={() =>
                    alert(
                      "Media Library belum dihubungkan. Kita sambungkan setelah CRUD Opini selesai."
                    )
                  }
                >
                  Choose from Media
                </button>
              </div>
            </Field>

            {/* CONTENT */}
            <Field label="Isi Artikel" required>
              <textarea
                name="content"
                rows={14}
                value={form.content}
                onChange={handleChange}
                placeholder="Tulis isi artikel di sini..."
                style={{
                  ...inputStyle,
                  height: "auto",
                  paddingTop: 12,
                  resize: "vertical",
                  lineHeight: 1.7,
                }}
              />
            </Field>

            {/* CATEGORY */}
            <Field label="Kategori" required>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="" disabled>
                  Pilih kategori
                </option>

                <option value="opini">Opini</option>
                <option value="analisis">Analisis</option>
                <option value="refleksi">Refleksi</option>
                <option value="teknologi">Teknologi</option>
                <option value="pendidikan">Pendidikan</option>
                <option value="sosial">Sosial</option>
              </select>
            </Field>

            {/* TAGS */}
            <Field label="Tags">
              <input
                name="tags"
                type="text"
                value={form.tags}
                onChange={handleChange}
                placeholder="narrative, teknologi, pendidikan"
                style={inputStyle}
              />

              <small style={helpStyle}>
                Pisahkan beberapa tag dengan koma.
              </small>
            </Field>

            {/* DATE */}
            <Field label="Tanggal Publikasi">
              <input
                name="publishDate"
                type="date"
                value={form.publishDate}
                onChange={handleChange}
                style={inputStyle}
              />
            </Field>

            {/* OPTIONS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                marginTop: 8,
              }}
            >
              {/* STATUS */}
              <div>
                <label style={labelStyle}>Status</label>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  style={inputStyle}
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>

              {/* FEATURED */}
              <div>
                <label style={labelStyle}>Featured</label>

                <button
                  type="button"
                  onClick={() => setFeatured(!featured)}
                  style={{
                    width: "100%",
                    height: 42,
                    border: "1px solid #ddd",
                    borderRadius: 6,
                    background: featured ? "#171717" : "#fff",
                    color: featured ? "#fff" : "#555",
                    textAlign: "left",
                    padding: "0 13px",
                    cursor: "pointer",
                    fontSize: 13,
                  }}
                >
                  {featured ? "✓ Featured" : "Not Featured"}
                </button>
              </div>
            </div>
          </section>

          {/* ACTIONS */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 10,
              marginTop: 18,
            }}
          >
            <a
              href="/admin/opini"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 42,
                padding: "0 18px",
                border: "1px solid #ddd",
                borderRadius: 6,
                background: "#fff",
                color: "#555",
                textDecoration: "none",
                fontSize: 13,
              }}
            >
              Cancel
            </a>

            {/* SAVE DRAFT */}
            <button
              type="button"
              disabled={saving}
              onClick={() => saveArticle("Draft")}
              style={{
                height: 42,
                padding: "0 18px",
                border: "1px solid #ccc",
                borderRadius: 6,
                background: saving ? "#eee" : "#fff",
                color: "#333",
                fontSize: 13,
                cursor: saving ? "not-allowed" : "pointer",
              }}
            >
              {saving ? "Menyimpan..." : "Simpan Draft"}
            </button>

            {/* PUBLISH */}
            <button
              type="button"
              disabled={saving}
              onClick={() => saveArticle("Published")}
              style={{
                height: 42,
                padding: "0 20px",
                border: "none",
                borderRadius: 6,
                background: saving ? "#777" : "#171717",
                color: "#fff",
                fontSize: 13,
                cursor: saving ? "not-allowed" : "pointer",
              }}
            >
              {saving ? "Publishing..." : "Publish"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({ label, required, children }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <label style={labelStyle}>
        {label}

        {required && (
          <span
            style={{
              color: "#999",
              marginLeft: 3,
            }}
          >
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: 8,
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#777",
};

const inputStyle = {
  width: "100%",
  height: 42,
  boxSizing: "border-box",
  border: "1px solid #ddd",
  borderRadius: 6,
  background: "#fff",
  padding: "0 12px",
  outline: "none",
  fontSize: 13,
  color: "#222",
};

const helpStyle = {
  display: "block",
  marginTop: 6,
  fontSize: 11,
  color: "#999",
};

"use client";

import { useState } from "react";

export default function NewOpiniPage() {
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("Draft");

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
        <form>
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
                type="text"
                placeholder="Masukkan judul opini..."
                style={inputStyle}
              />
            </Field>

            {/* SLUG */}
            <Field label="Slug">
              <input
                type="text"
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
                rows={4}
                placeholder="Ringkasan singkat artikel..."
                style={{
                  ...inputStyle,
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
                >
                  Choose from Media
                </button>
              </div>
            </Field>

            {/* CONTENT */}
            <Field label="Isi Artikel" required>
              <textarea
                rows={14}
                placeholder="Tulis isi artikel di sini..."
                style={{
                  ...inputStyle,
                  paddingTop: 12,
                  resize: "vertical",
                  lineHeight: 1.7,
                }}
              />
            </Field>

            {/* CATEGORY */}
            <Field label="Kategori" required>
              <select style={inputStyle} defaultValue="">
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
                type="text"
                placeholder="narrative, teknologi, pendidikan"
                style={inputStyle}
              />
              <small style={helpStyle}>
                Pisahkan beberapa tag dengan koma.
              </small>
            </Field>

            {/* DATE */}
            <Field label="Tanggal Publikasi">
              <input type="date" style={inputStyle} />
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

            <button
              type="button"
              style={{
                height: 42,
                padding: "0 18px",
                border: "1px solid #ccc",
                borderRadius: 6,
                background: "#fff",
                color: "#333",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Simpan Draft
            </button>

            <button
              type="button"
              style={{
                height: 42,
                padding: "0 20px",
                border: "none",
                borderRadius: 6,
                background: "#171717",
                color: "#fff",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Publish
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
          <span style={{ color: "#999", marginLeft: 3 }}>*</span>
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
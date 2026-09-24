"use client";

import { useState } from "react";

const OPINI = [];

export default function OpiniPage() {
  const [status, setStatus] = useState("All");

  const filteredOpini =
    status === "All"
      ? OPINI
      : OPINI.filter((item) => item.status === status);

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
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#999",
                marginBottom: 8,
              }}
            >
              Content
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              Opini
            </h1>

            <p
              style={{
                margin: "8px 0 0",
                color: "#777",
                fontSize: 13,
              }}
            >
              Manage tulisan, analisis, dan refleksi.
            </p>
          </div>

          <a
            href="/admin/opini/new"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 42,
              padding: "0 18px",
              borderRadius: 6,
              background: "#171717",
              color: "#fff",
              textDecoration: "none",
              fontSize: 13,
            }}
          >
            + New Opini
          </a>
        </div>

        {/* TOOLBAR */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Search opini..."
            style={{
              width: 260,
              height: 40,
              border: "1px solid #ddd",
              borderRadius: 6,
              background: "#fff",
              padding: "0 13px",
              outline: "none",
              fontSize: 13,
            }}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{
              height: 40,
              border: "1px solid #ddd",
              borderRadius: 6,
              background: "#fff",
              padding: "0 12px",
              fontSize: 13,
              color: "#444",
            }}
          >
            <option value="All">All Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        {/* TABLE */}
        <section
          style={{
            background: "#fff",
            border: "1px solid #e5e5e2",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(260px, 1fr) 150px 130px 130px 70px",
              padding: "13px 18px",
              borderBottom: "1px solid #e8e8e5",
              background: "#fafaf8",
              color: "#999",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span>Title</span>
            <span>Category</span>
            <span>Status</span>
            <span>Date</span>
            <span></span>
          </div>

          {filteredOpini.length === 0 ? (
            <div
              style={{
                minHeight: 260,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 8,
                color: "#999",
                textAlign: "center",
                padding: 30,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  color: "#555",
                }}
              >
                No articles yet.
              </div>

              <div
                style={{
                  fontSize: 12,
                }}
              >
                Your published and draft articles will appear here.
              </div>

              <a
                href="/admin/opini/new"
                style={{
                  marginTop: 12,
                  color: "#171717",
                  fontSize: 12,
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                Create your first Opini →
              </a>
            </div>
          ) : (
            filteredOpini.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "minmax(260px, 1fr) 150px 130px 130px 70px",
                  padding: "16px 18px",
                  borderBottom: "1px solid #eee",
                  alignItems: "center",
                  fontSize: 13,
                }}
              >
                <strong>{item.title}</strong>
                <span>{item.category}</span>
                <span>{item.status}</span>
                <span>{item.date}</span>
                <a href="#" style={{ color: "#555" }}>
                  Edit
                </a>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
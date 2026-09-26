"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "yulia_opini";

export default function OpiniPage() {
  const [opini, setOpini] = useState([]);
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadOpini();

    const handleStorage = (event) => {
      if (event.key === STORAGE_KEY) {
        loadOpini();
      }
    };

    window.addEventListener(
      "storage",
      handleStorage
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorage
      );
    };
  }, []);

  function loadOpini() {
    try {
      const raw =
        localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        setOpini([]);
        return;
      }

      const data = JSON.parse(raw);

      if (!Array.isArray(data)) {
        setOpini([]);
        return;
      }

      setOpini(data);
    } catch (error) {
      console.error(
        "Gagal membaca opini:",
        error
      );

      setOpini([]);
    }
  }

  const filteredOpini = opini.filter((item) => {
    const matchesStatus =
      status === "All" ||
      String(item.status || "") === status;

    const query =
      search.trim().toLowerCase();

    const matchesSearch =
      !query ||
      String(item.title || "")
        .toLowerCase()
        .includes(query) ||
      String(item.category || "")
        .toLowerCase()
        .includes(query);

    return (
      matchesStatus &&
      matchesSearch
    );
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f5",
        color: "#171717",
        padding: "32px 36px 60px",
        fontFamily:
          "Arial, Helvetica, sans-serif",
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
            justifyContent:
              "space-between",
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
                textTransform:
                  "uppercase",
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
                letterSpacing:
                  "-0.02em",
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
              Manage tulisan, analisis,
              dan refleksi.
            </p>
          </div>

          <a
            href="/admin/opini/new"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent:
                "center",
              minHeight: 42,
              padding: "0 18px",
              borderRadius: 6,
              background: "#171717",
              color: "#fff",
              textDecoration:
                "none",
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
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={{
              width: 260,
              height: 40,
              border:
                "1px solid #ddd",
              borderRadius: 6,
              background: "#fff",
              padding: "0 13px",
              outline: "none",
              fontSize: 13,
            }}
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            style={{
              height: 40,
              border:
                "1px solid #ddd",
              borderRadius: 6,
              background: "#fff",
              padding: "0 12px",
              fontSize: 13,
              color: "#444",
            }}
          >
            <option value="All">
              All Status
            </option>

            <option value="Published">
              Published
            </option>

            <option value="Draft">
              Draft
            </option>
          </select>
        </div>

        {/* TABLE */}

        <section
          style={{
            background: "#fff",
            border:
              "1px solid #e5e5e2",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(260px, 1fr) 150px 130px 130px 100px",
              padding:
                "13px 18px",
              borderBottom:
                "1px solid #e8e8e5",
              background: "#fafaf8",
              color: "#999",
              fontSize: 10,
              letterSpacing:
                "0.12em",
              textTransform:
                "uppercase",
            }}
          >
            <span>Title</span>
            <span>Category</span>
            <span>Status</span>
            <span>Date</span>
            <span></span>
          </div>

          {filteredOpini.length ===
          0 ? (
            <div
              style={{
                minHeight: 260,
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                flexDirection:
                  "column",
                gap: 8,
                color: "#999",
                textAlign:
                  "center",
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
                Your published and
                draft articles will
                appear here.
              </div>

              <a
                href="/admin/opini/new"
                style={{
                  marginTop: 12,
                  color: "#171717",
                  fontSize: 12,
                  textDecoration:
                    "underline",
                  textUnderlineOffset:
                    3,
                }}
              >
                Create your first
                Opini →
              </a>
            </div>
          ) : (
            filteredOpini.map(
              (item) => (
                <div
                  key={item.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "minmax(260px, 1fr) 150px 130px 130px 100px",
                    padding:
                      "16px 18px",
                    borderBottom:
                      "1px solid #eee",
                    alignItems:
                      "center",
                    fontSize: 13,
                  }}
                >
                  <div>
                    <strong>
                      {item.title}
                    </strong>

                    {item.featured && (
                      <span
                        style={{
                          marginLeft: 8,
                          fontSize: 11,
                        }}
                      >
                        ★
                      </span>
                    )}
                  </div>

                  <span>
                    {item.category}
                  </span>

                  <span>
                    {item.status}
                  </span>

                  <span>
                    {formatDate(
                      item.publishDate
                    )}
                  </span>

                  <a
                    href={
                      item.slug
                        ? `/opini/${item.slug}`
                        : "#"
                    }
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#555",
                    }}
                  >
                    View
                  </a>
                </div>
              )
            )
          )}
        </section>
      </div>
    </main>
  );
}

function formatDate(value) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
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

export default function OverviewSection({ data }) {
  return (
    <section id="overview" style={{ padding: "5rem 2rem", background: "#fff",  margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[
            { bg: "#1a8a5a", h: 200 }, { bg: "#e8f5ee", h: 160 },
            { bg: "#e8f5ee", h: 160 }, { bg: "#2a9d6e", h: 200 }
          ].map((b, i) => (
            <div key={i} style={{ background: b.bg, borderRadius: 16, height: b.h, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {i === 0 && <span style={{ fontSize: 40 }}>🏢</span>}
              {i === 1 && <span style={{ fontSize: 40 }}>🌿</span>}
              {i === 2 && <span style={{ fontSize: 40 }}>🏊</span>}
              {i === 3 && <span style={{ fontSize: 40 }}>🌇</span>}
            </div>
          ))}
        </div>
        <div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, color: "#0f3320", marginBottom: 20 }}>{data.title}</h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, marginBottom: 28 }}>{data.description}</p>
          <button style={{ background: "#1a8a5a", color: "#fff", border: "none", borderRadius: 8, padding: "12px 28px", fontSize: 13, fontWeight: 600, cursor: "pointer", letterSpacing: 0.5 }}>
            {data.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}
export default function AboutSection({ data }) {
  return (
    <section id='developer'style={{ padding: "5rem 2rem", background: "#fff" }}>
      <div style={{  margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: "#0f3320", marginBottom: 8 }}>{data.title}</h2>
        <p style={{ textAlign: "center", fontSize: 13, color: "#777", marginBottom: "2rem", maxWidth: 700, margin: "0 auto 2rem" }}>{data.description}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: "3rem", flexWrap: "wrap" }}>
          {data.stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "16px 24px", background: "#f0faf4", borderRadius: 12, border: "1px solid #c5e8d5", minWidth: 100 }}>
              <div style={{ fontSize: 20, fontFamily: "Georgia, serif", fontWeight: 700, color: "#1a8a5a" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ borderRadius: 20, overflow: "hidden", height: 280, background: "linear-gradient(160deg, #c5e8d5, #1a8a5a)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 80 }}>🏛️</span>
        </div>
      </div>
    </section>
  );
}
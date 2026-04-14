export default function ConstructionSection({ data }) {
  return (
    <section id='contact'style={{ padding: "5rem 2rem", background: "linear-gradient(135deg, #f0faf4, #e8f5ee)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: "#0f3320", marginBottom: 12 }}>{data.title}</h2>
        <div style={{ width: 60, height: 3, background: "#1a8a5a", margin: "0 auto 3rem" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {data.updates.map((u, i) => (
            <div key={i} style={{ borderRadius: 16, overflow: "hidden", background: "#fff", border: "1px solid #c5e8d5" }}>
              <div style={{ height: 180, background: i === 0 ? "linear-gradient(160deg, #888, #555)" : i === 1 ? "linear-gradient(160deg, #1a8a5a, #0f3320)" : "linear-gradient(160deg, #2a9d6e, #1a8a5a)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 50 }}>{i === 0 ? "🏗️" : i === 1 ? "🏢" : "🌳"}</span>
              </div>
              <div style={{ padding: "12px 16px", textAlign: "center" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#0f3320" }}>{u.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

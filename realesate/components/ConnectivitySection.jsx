export default function ConnectivitySection({ data }) {
  return (
    <section id="connectivity" style={{ padding: "5rem 2rem", background: "linear-gradient(135deg, #f0faf4, #e8f5ee)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: "#0f3320", marginBottom: 12 }}>{data.title}</h2>
        <div style={{ width: 60, height: 3, background: "#1a8a5a", margin: "0 auto 3rem" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
          {data.items.map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "24px 12px", textAlign: "center", border: "1px solid #c5e8d5", transition: "transform 0.2s" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#0f3320", marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: "#1a8a5a", fontWeight: 600 }}>{item.distance}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
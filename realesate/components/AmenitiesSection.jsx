
export default function AmenitiesSection({ data }) {
  return (
    <section 
    id='amenities'style={{ padding: "5rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: "#0f3320", marginBottom: 8 }}>{data.title}</h2>
        <p style={{ textAlign: "center", fontSize: 13, color: "#777", marginBottom: "3rem", maxWidth: 600, margin: "0 auto 3rem" }}>{data.subtitle}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32 }}>
          <div style={{ borderRadius: 20, overflow: "hidden", background: "linear-gradient(160deg, #1a8a5a, #2ec87a)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 280 }}>
            <div style={{ textAlign: "center", color: "#fff" }}>
              <div style={{ fontSize: 60, marginBottom: 8 }}>🏊</div>
              <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 1 }}>INFINITY POOL</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {data.items.map((item, i) => (
              <div key={i} style={{ background: "#f0faf4", borderRadius: 16, padding: "24px 16px", textAlign: "center", border: "1px solid #d0f0e0" }}>
                <div style={{ width: 48, height: 48, background: "#1a8a5a", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 22 }}>{item.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#0f3320" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <button style={{ background: "#1a8a5a", color: "#fff", border: "none", borderRadius: 8, padding: "12px 32px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>See More</button>
        </div>
      </div>
    </section>
  );
}
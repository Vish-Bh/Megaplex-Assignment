import { useState } from "react";
export default function FloorPlansSection({ data }) {
  const [active, setActive] = useState(0);
  return (
    <section id="floor-plans" style={{ padding: "5rem 2rem", background: "linear-gradient(135deg, #f0faf4, #e0f2e8)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: "#0f3320", marginBottom: 8 }}>{data.title}</h2>
        <p style={{ textAlign: "center", fontSize: 13, color: "#777", marginBottom: "2rem" }}>{data.subtitle}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: "2rem" }}>
          {data.types.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: "8px 24px", borderRadius: 8, border: "2px solid #1a8a5a",
              background: active === i ? "#1a8a5a" : "transparent",
              color: active === i ? "#fff" : "#1a8a5a",
              fontWeight: 600, fontSize: 13, cursor: "pointer"
            }}>{t.label}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: 40, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 300, border: "1px solid #c5e8d5" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 70, marginBottom: 16 }}>🏠</div>
              <div style={{ fontSize: 12, color: "#888" }}>Floor Plan Illustration</div>
            </div>
          </div>
          <div>
            <div style={{ background: "#fff", borderRadius: 16, padding: 28, border: "1px solid #c5e8d5" }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: "#1a8a5a", fontWeight: 600, letterSpacing: 2, marginBottom: 4 }}>TYPE</div>
                <div style={{ fontSize: 24, fontFamily: "Georgia, serif", fontWeight: 700, color: "#0f3320" }}>{data.types[active].label}</div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>AREA</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#0f3320" }}>{data.types[active].area}</div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>PRICE</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#1a8a5a" }}>{data.types[active].price}</div>
              </div>
              <button style={{ background: "#1a8a5a", color: "#fff", border: "none", borderRadius: 8, padding: "12px 28px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                Download Floor Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
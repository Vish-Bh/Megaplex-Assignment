import { useState } from "react";

export default function FAQSection({ data }) {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ padding: "5rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: "#0f3320", marginBottom: 12 }}>{data.title}</h2>
        <div style={{ width: 60, height: 3, background: "#1a8a5a", margin: "0 auto 3rem" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.items.map((item, i) => (
            <div key={i} style={{ border: "1px solid #d0f0e0", borderRadius: 12, overflow: "hidden" }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "18px 20px", background: open === i ? "#f0faf4" : "#fff",
                border: "none", cursor: "pointer", textAlign: "left"
              }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#0f3320", paddingRight: 16 }}>{item.q}</span>
                <span style={{ fontSize: 20, color: "#1a8a5a", fontWeight: 300, flexShrink: 0 }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 20px 18px", fontSize: 13, color: "#555", lineHeight: 1.7, background: "#f0faf4" }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

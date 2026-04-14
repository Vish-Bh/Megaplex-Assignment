export default function Footer() {
  return (
    <footer style={{ background: "#0f3320", color: "#a0c8b0", padding: "3rem 2rem", textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
        <div style={{ width: 32, height: 32, background: "#1a8a5a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>M</span>
        </div>
        <span style={{ fontFamily: "Georgia, serif", fontSize: 18, color: "#fff", letterSpacing: 2 }}>MEGAPLEX PRIME</span>
      </div>
      <p style={{ fontSize: 12, marginBottom: 8 }}>RERA Registered | All rights reserved © 2024</p>
      <p style={{ fontSize: 11, opacity: 0.6 }}>Disclaimer: This is for informational purposes only. Prices subject to change.</p>
    </footer>
  );
}
import { useState } from "react";

export default function AdminLogin({ onLogin, error, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #e8f5ee, #d0ede0)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button
        onClick={onBack}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          background: "none",
          border: "none",
          fontSize: 18,
          cursor: "pointer",
          color: "#666"
        }}
      >
        ✕
      </button><div style={{ background: "#fff", borderRadius: 20, padding: "48px 40px", width: 380, boxShadow: "0 20px 60px rgba(26,138,90,0.15)", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, background: "linear-gradient(135deg, #1a8a5a, #2ec87a)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <span style={{ color: "#fff", fontSize: 24, fontWeight: 700 }}>M</span>
          </div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 24, color: "#0f3320", marginBottom: 4 }}>Admin Panel</h2>
          <p style={{ fontSize: 12, color: "#888" }}>Megaplex Prime CMS</p>
        </div>
        {error && <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", fontSize: 12, color: "#dc2626", marginBottom: 16 }}>{error}</div>}
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 11, fontWeight: 600, color: "#000000", letterSpacing: 1, display: "block", marginBottom: 6 }}>EMAIL</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="admin@gmail.com" style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #d0f0e0", fontSize: 14, outline: "none",color:'#000000', boxSizing: "border-box" }} />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ fontSize: 11, fontWeight: 600, color: "#000000", letterSpacing: 1, display: "block", marginBottom: 6 }}>PASSWORD</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="••••••" style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #d0f0e0", fontSize: 14, outline: "none",color:'#000000',  boxSizing: "border-box" }} />
        </div>
        <button onClick={() => onLogin(email, password)} style={{ width: "100%", background: "#1a8a5a", color: "#fff", border: "none", borderRadius: 10, padding: "14px", fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: 0.5 }}>
          Login to Admin Panel
        </button>
        <p style={{ textAlign: "center", marginTop: 16, fontSize: 11, color: "#aaa" }}>admin@gmail.com / 1234</p>
      </div>
    </div>
  );
}
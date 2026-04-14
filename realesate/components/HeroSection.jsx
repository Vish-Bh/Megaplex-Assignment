"use client";
import Image from "next/image";

export default function HeroSection({ data }) {
  return (
    <section
      id="home"
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "60px 20px 50px",
        boxSizing: "border-box",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          gap: 40,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT: Image */}
        <div style={{ flex: "1.1", minWidth: 280, position: "relative" }}>
          <Image
            src="/hero.png"
            alt="Building"
            width={600}
            height={480}
            priority
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 10,
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Overlay */}
          <div style={{ position: "absolute", top: 16, left: 16 }}>
            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 11,
                letterSpacing: 2,
                color: "#fff",
                margin: "0 0 2px",
                fontWeight: 400,
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
              }}
            >
              {data?.tagline}
            </p>

            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 9,
                color: "rgba(255,255,255,0.85)",
                margin: 0,
                letterSpacing: 1,
                textShadow: "0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              {data?.subTagline}
            </p>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div style={{ flex: 1, minWidth: 260 }}>
          
          {/* Logo (unchanged) */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div
              style={{
                width: 38,
                height: 38,
                border: "1.5px solid #8a7a5a",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3 C10 3 6 7 6 11 C6 13.2 7.8 15 10 15 C12.2 15 14 13.2 14 11 C14 7 10 3 10 3Z" stroke="#8a7a5a" strokeWidth="1"/>
                <path d="M10 15 L10 18" stroke="#8a7a5a" strokeWidth="1"/>
              </svg>
            </div>

            <div>
              <p style={{ fontSize: 8, letterSpacing: 3, color: "#8a7a5a", margin: 0 }}>
                VIGHNAHARTA
              </p>
              <p style={{ fontSize: 24, letterSpacing: 5, color: "#2c2c2c", margin: 0 }}>
                INFINITY
              </p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: 60, height: 1, background: "#c0aa80", margin: "14px 0 20px" }} />

          {/* Pricing Cards */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
            
            {/* Unit 1 */}
            <div style={{ border: "1px solid #d4c8aa", padding: "16px 20px", borderRadius: 6, background: "#fff", flex: 1 }}>
              <p style={{ fontSize: 10, color: "#888" }}>
                {data?.unit1Type}
              </p>
              <p style={{ fontSize: 20, color: "#c0392b" }}>
                {data?.unit1Price}
              </p>
            </div>

            {/* Unit 2 */}
            <div style={{ border: "1px solid #d4c8aa", padding: "16px 20px", borderRadius: 6, background: "#fff", flex: 1 }}>
              <p style={{ fontSize: 10, color: "#888" }}>
                {data?.unit2Type}
              </p>
              <p style={{ fontSize: 20, color: "#c0392b" }}>
                {data?.unit2Price}
              </p>
            </div>

          </div>

          {/* Divider */}
          <div style={{ width: "100%", height: 1, background: "#e8dfc8", marginBottom: 16 }} />

          {/* Address */}
          <p style={{ fontSize: 11, color: "#666", lineHeight: 1.6 }}>
            {data?.address}
          </p>

        </div>
      </div>
    </section>
  );
}
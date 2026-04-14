'use client'
import { useState, useEffect } from "react";

export default function Navbar({ onAdminClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "Overview", id: "overview" },
    { name: "Connectivity", id: "connectivity" },
    { name: "Amenities", id: "amenities" },
    { name: "Floor Plans", id: "floor-plans" },
    { name: "Developer", id: "developer" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #e0f0e8" : "none",
        transition: "all 0.3s",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 60,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 32,
            height: 32,
            background: "linear-gradient(135deg, #1a8a5a, #2ec87a)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>
            M
          </span>
        </div>
        <span
          style={{
            fontWeight: 700,
            fontSize: 15,
            color: "#1a4a30",
            fontFamily: "Georgia, serif",
            letterSpacing: 1,
          }}
        >
          MEGAPLEX
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(l.id);
            }}
            style={{
              fontSize: 12,
              color: "#444",
              textDecoration: "none",
              fontWeight: 500,
              letterSpacing: 0.5,
              cursor: "pointer",
            }}
          >
            {l.name}
          </a>
        ))}
      </div>

      {/* Button */}
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={onAdminClick}
          style={{
            background: "#1a8a5a",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 18px",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: 0.5,
          }}
        >
          Enquiry Now
        </button>
      </div>
    </nav>
  );
}
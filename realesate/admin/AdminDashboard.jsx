'use client'
import { useState } from "react";

/* ---------- FIELD COMPONENT ---------- */
const Field = ({ label, value, onChange, multiline }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#1a8a5a",
          letterSpacing: 1,
          display: "block",
          marginBottom: 6
        }}
      >
        {label.toUpperCase()}
      </label>

      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          rows={4}
          style={{
            width: "100%",
            color: "#000",
            padding: "10px 12px",
            borderRadius: 8,
            border: "1.5px solid #d0f0e0",
            fontSize: 13,
            outline: "none",
            resize: "vertical",
            boxSizing: "border-box",
            fontFamily: "inherit"
          }}
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          style={{
            width: "100%",
            color: "#000",
            padding: "10px 12px",
            borderRadius: 8,
            border: "1.5px solid #d0f0e0",
            fontSize: 13,
            outline: "none",
            boxSizing: "border-box"
          }}
        />
      )}
    </div>
  );
};

/* ---------- MAIN COMPONENT ---------- */
export default function AdminDashboard({ content, onSave, onLogout, onBack , backToDefault}) {
  const [active, setActive] = useState("hero");
const [local, setLocal] = useState(
  content ? JSON.parse(JSON.stringify(content)) : {}
);  const [saved, setSaved] = useState(false);

 const sections = [ 
  { key: "hero", label: "🏠 Hero" },
   { key: "overview", label: "📋 Overview" }, 
   { key: "connectivity", label: "🗺️ Connectivity" }, 
   { key: "amenities", label: "⭐ Amenities" }, 
   { key: "floorPlans", label: "📐 Floor Plans" }, 
   { key: "about", label: "👥 About Dev" },
    { key: "construction", label: "🏗️ Construction" },
     { key: "faq", label: "❓ FAQ" }, ];

  /* ---------- SAVE ---------- */
const handleSave = async () => {
  const result = await onSave(local);

  if (result?.success === true) {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  } else {
    alert(result?.message || "Save failed");
  }
};

  /* ---------- UPDATE (FIXED NO BLUR BUG) ---------- */
  const update = (path, value) => {
    setLocal(prev => {
      const keys = path.split(".");
      const newData = { ...prev };

      let obj = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        const nextKey = keys[i + 1];

        // handle array cloning
        if (!isNaN(Number(nextKey))) {
          obj[key] = [...obj[key]];
        } else {
          obj[key] = { ...obj[key] };
        }

        obj = obj[key];
      }

      obj[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  /* ---------- EDITOR ---------- */
const renderEditor = () => {
  switch (active) {

    case "hero":
      return (
        <div>
          <Field label="Tagline" value={local.hero.tagline} onChange={e => update("hero.tagline", e.target.value)} />
          <Field label="Sub Tagline" value={local.hero.subTagline} onChange={e => update("hero.subTagline", e.target.value)} />
          <Field label="Project Name" value={local.hero.projectName} onChange={e => update("hero.projectName", e.target.value)} />
          <Field label="Project Sub" value={local.hero.projectSub} onChange={e => update("hero.projectSub", e.target.value)} />
          <Field label="Unit 1 Type" value={local.hero.unit1Type} onChange={e => update("hero.unit1Type", e.target.value)} />
          <Field label="Unit 1 Price" value={local.hero.unit1Price} onChange={e => update("hero.unit1Price", e.target.value)} />
          <Field label="Unit 2 Type" value={local.hero.unit2Type} onChange={e => update("hero.unit2Type", e.target.value)} />
          <Field label="Unit 2 Price" value={local.hero.unit2Price} onChange={e => update("hero.unit2Price", e.target.value)} />
          <Field label="Address" multiline value={local.hero.address} onChange={e => update("hero.address", e.target.value)} />
        </div>
      );

    case "overview":
      return (
        <div>
          <Field label="Title" value={local.overview.title} onChange={e => update("overview.title", e.target.value)} />
          <Field label="Description" multiline value={local.overview.description} onChange={e => update("overview.description", e.target.value)} />
          <Field label="CTA Text" value={local.overview.ctaText} onChange={e => update("overview.ctaText", e.target.value)} />
        </div>
      );

    case "connectivity":
      return (
        <div>
          <Field label="Title" value={local.connectivity.title} onChange={e => update("connectivity.title", e.target.value)} />

          {local.connectivity.items.map((item, i) => (
            <div key={i} style={{ background: "#f0faf4", padding: 14, borderRadius: 10, marginBottom: 12 }}>
              <Field label="Icon" value={item.icon} onChange={e => update(`connectivity.items.${i}.icon`, e.target.value)} />
              <Field label="Label" value={item.label} onChange={e => update(`connectivity.items.${i}.label`, e.target.value)} />
              <Field label="Distance" value={item.distance} onChange={e => update(`connectivity.items.${i}.distance`, e.target.value)} />
            </div>
          ))}
        </div>
      );

    case "amenities":
      return (
        <div>
          <Field label="Title" value={local.amenities.title} onChange={e => update("amenities.title", e.target.value)} />
          <Field label="Subtitle" multiline value={local.amenities.subtitle} onChange={e => update("amenities.subtitle", e.target.value)} />

          {local.amenities.items.map((item, i) => (
            <div key={i} style={{ background: "#f0faf4", padding: 14, borderRadius: 10, marginBottom: 12 }}>
              <Field label="Icon" value={item.icon} onChange={e => update(`amenities.items.${i}.icon`, e.target.value)} />
              <Field label="Label" value={item.label} onChange={e => update(`amenities.items.${i}.label`, e.target.value)} />
            </div>
          ))}
        </div>
      );

    case "floorPlans":
      return (
        <div>
          <Field label="Title" value={local.floorPlans.title} onChange={e => update("floorPlans.title", e.target.value)} />
          <Field label="Subtitle" value={local.floorPlans.subtitle} onChange={e => update("floorPlans.subtitle", e.target.value)} />

          {local.floorPlans.types.map((t, i) => (
            <div key={i} style={{ background: "#f0faf4", padding: 14, borderRadius: 10, marginBottom: 12 }}>
              <Field label="Type" value={t.label} onChange={e => update(`floorPlans.types.${i}.label`, e.target.value)} />
              <Field label="Area" value={t.area} onChange={e => update(`floorPlans.types.${i}.area`, e.target.value)} />
              <Field label="Price" value={t.price} onChange={e => update(`floorPlans.types.${i}.price`, e.target.value)} />
            </div>
          ))}
        </div>
      );

    case "about":
      return (
        <div>
          <Field label="Title" value={local.about.title} onChange={e => update("about.title", e.target.value)} />
          <Field label="Description" multiline value={local.about.description} onChange={e => update("about.description", e.target.value)} />

          {local.about.stats.map((s, i) => (
            <div key={i} style={{ background: "#f0faf4", padding: 14, borderRadius: 10, marginBottom: 12 }}>
              <Field label="Value" value={s.value} onChange={e => update(`about.stats.${i}.value`, e.target.value)} />
              <Field label="Label" value={s.label} onChange={e => update(`about.stats.${i}.label`, e.target.value)} />
            </div>
          ))}
        </div>
      );

    case "construction":
      return (
        <div>
          <Field label="Title" value={local.construction.title} onChange={e => update("construction.title", e.target.value)} />

          {local.construction.updates.map((u, i) => (
            <div key={i} style={{ background: "#f0faf4", padding: 14, borderRadius: 10, marginBottom: 12 }}>
              <Field label="Update" value={u.label} onChange={e => update(`construction.updates.${i}.label`, e.target.value)} />
            </div>
          ))}
        </div>
      );

    case "faq":
      return (
        <div>
          <Field label="Title" value={local.faq.title} onChange={e => update("faq.title", e.target.value)} />

          {local.faq.items.map((item, i) => (
            <div key={i} style={{ background: "#f0faf4", padding: 14, borderRadius: 10, marginBottom: 12 }}>
              <Field label="Question" multiline value={item.q} onChange={e => update(`faq.items.${i}.q`, e.target.value)} />
              <Field label="Answer" multiline value={item.a} onChange={e => update(`faq.items.${i}.a`, e.target.value)} />
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
};

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>

      {/* ---------- SIDEBAR ---------- */}
      <div style={{
        width: 240,
        background: "#0f3320",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh"
      }}>
        <nav style={{ flex: 1, padding: "16px 12px" }}>
          {sections.map(s => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 14px",
                borderRadius: 8,
                background: active === s.key ? "#1a8a5a" : "transparent",
                color: active === s.key ? "#fff" : "#a0c8b0",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                marginBottom: 4
              }}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: "16px 12px" }}>
          <button
            onClick={onLogout}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: 8,
              background: "rgba(255,255,255,0.08)",
              color: "#a0c8b0",
              border: "none",
              cursor: "pointer"
            }}
          >
            ← Logout
          </button>
        </div>
      </div>

      {/* ---------- MAIN ---------- */}
      <div style={{ marginLeft: 240, flex: 1, background: "#f8fcfa" }}>

        {/* HEADER */}
        <div style={{
          background: "#fff",
          borderBottom: "1px solid #e0f0e8",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h1 style={{
            fontSize: 18,
            fontFamily: "Georgia, serif",
            color: "#0f3320",
            margin: 0,
            textTransform: "capitalize"
          }}>
            {active} Editor
          </h1>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {saved && (
              <span style={{ fontSize: 12, color: "#1a8a5a", fontWeight: 600 }}>
                ✓ Changes saved!
              </span>
            )}

            <button
  onClick={backToDefault}
  style={{
    background: "#e6f5ee",
    color: "#1a8a5a",
    border: "1px solid #1a8a5a",
    borderRadius: 8,
    padding: "10px 20px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer"
  }}
>
  Reset to Default
</button>

<button
  onClick={onBack}
  style={{
    background: "#e6f5ee",
    color: "#1a8a5a",
    border: "1px solid #1a8a5a",
    borderRadius: 8,
    padding: "10px 20px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer"
  }}
>
  Undo Changes
</button>

            <button
              onClick={handleSave}
              style={{
                background: "#1a8a5a",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "10px 24px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ padding: 32, maxWidth: 720 }}>
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: 28,
            border: "1px solid #e0f0e8"
          }}>
            {renderEditor()}
          </div>
        </div>
      </div>
    </div>
  );
}
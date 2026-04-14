export default function VideoSection() {
  return (
    <section style={{ background: "#0f3320", padding: 0, position: "relative", overflow: "hidden" }}>
      <div style={{
        height: 400,
        background: "linear-gradient(rgba(15,51,32,0.5), rgba(15,51,32,0.7)), url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200') center/cover",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <div style={{ width: 72, height: 72, background: "rgba(255,255,255,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <div style={{ width: 0, height: 0, borderTop: "16px solid transparent", borderBottom: "16px solid transparent", borderLeft: "26px solid #1a8a5a", marginLeft: 6 }} />
        </div>
      </div>
    </section>
  );
}
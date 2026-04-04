import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ background: "#0d0c0a", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16, fontFamily: "'Syne', sans-serif", color: "#ede9e0" }}>
    <div style={{ fontSize: 80, fontWeight: 800, color: "rgba(212,164,50,.15)" }}>404</div>
    <h1 style={{ fontSize: 28, fontWeight: 700 }}>Page not found</h1>
    <Link to="/" style={{ color: "#d4a432", textDecoration: "none", fontSize: 14, fontFamily: "'IBM Plex Mono', monospace" }}>← Back to BobiFX</Link>
  </div>
);

export default NotFound;

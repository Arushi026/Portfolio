import { useEffect, useState } from "react";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      padding:"0 6vw", height:"64px",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      background: scrolled ? "rgba(5,15,5,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(74,222,128,0.1)" : "none",
      transition:"all 0.4s ease",
    }}>
      {/* Logo */}
      <a href="#home" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"4px" }}>
        <span style={{ color:"#fff", fontWeight:800, fontSize:"18px" }}>Arushi</span>
        <span style={{ color:"#4ade80", fontWeight:800, fontSize:"18px" }}>.OS</span>
      </a>

      {/* Desktop links */}
      <div className="navbar-links" style={{ display:"flex", gap:"4px" }}>
        {links.map((link) => {
          const isActive = active === link;
          return (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => { setActive(link); setMenuOpen(false); }} style={{
              color: isActive ? "#4ade80" : "rgba(255,255,255,0.55)",
              textDecoration:"none", fontSize:"13px", fontWeight: isActive ? 600 : 400,
              padding:"8px 14px", borderRadius:"6px",
              borderBottom: isActive ? "2px solid #4ade80" : "2px solid transparent",
              transition:"all 0.2s",
            }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color="#fff"; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color="rgba(255,255,255,0.55)"; }}
            >{link}</a>
          );
        })}
      </div>

      {/* Desktop CV button */}
      <a href="/Arushi_Singh_Resume.pdf" download className="navbar-links" style={{
        border:"1.5px solid #4ade80", color:"#4ade80",
        padding:"8px 22px", borderRadius:"8px",
        fontSize:"13px", fontWeight:600, textDecoration:"none", transition:"all 0.2s",
      }}
        onMouseEnter={e => { e.currentTarget.style.background="#4ade80"; e.currentTarget.style.color="#000"; }}
        onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#4ade80"; }}
      >Download Resume</a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display:"none", background:"none", border:"none", cursor:"pointer",
          flexDirection:"column", gap:"5px", padding:"4px",
        }}
        className="navbar-mobile"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display:"block", width:"22px", height:"2px", background:"#4ade80",
            borderRadius:"2px", transition:"all 0.3s",
            transform: menuOpen && i===0 ? "rotate(45deg) translate(5px,5px)" : menuOpen && i===1 ? "scaleX(0)" : menuOpen && i===2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
          }} />
        ))}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position:"fixed", top:"64px", left:0, right:0,
          background:"rgba(5,15,5,0.98)", backdropFilter:"blur(20px)",
          borderBottom:"1px solid rgba(74,222,128,0.15)",
          padding:"20px 6vw 28px", display:"flex",
          flexDirection:"column", gap:"4px", zIndex:99,
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => { setActive(link); setMenuOpen(false); }}
              style={{
                color: active===link ? "#4ade80" : "rgba(255,255,255,0.7)",
                textDecoration:"none", fontSize:"16px", fontWeight: active===link ? 600 : 400,
                padding:"12px 0", borderBottom:"1px solid rgba(255,255,255,0.05)",
                transition:"color 0.2s",
              }}
            >{link}</a>
          ))}
          <a href="/Arushi_Singh_Resume.pdf" download style={{
            marginTop:"12px", background:"#4ade80", color:"#000",
            padding:"12px 24px", borderRadius:"8px",
            fontWeight:700, fontSize:"14px", textDecoration:"none",
            textAlign:"center",
          }}>Download Resume</a>
        </div>
      )}
    </nav>
  );
}

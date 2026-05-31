import { useEffect, useRef, useState } from "react";
import PhotoFrame from "../components/PhotoFrame";

function StarField() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.1 + 0.2,
      speed: Math.random() * 0.25 + 0.04,
      depth: Math.random(), opacity: Math.random() * 0.5 + 0.2,
    }));
    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("resize", onResize);
    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const mx = (mouseRef.current.x / W - 0.5) * 2;
      const my = (mouseRef.current.y / H - 0.5) * 2;
      stars.forEach(s => {
        s.y += s.speed;
        if (s.y > H) { s.y = 0; s.x = Math.random() * W; }
        ctx.beginPath();
        ctx.arc(s.x + mx * s.depth * 10, s.y + my * s.depth * 10, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,220,80,${s.opacity * 0.5})`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("mousemove", onMouse); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position:"fixed", top:0, left:0, zIndex:0, pointerEvents:"none" }} />;
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e) => setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  return (
    <section id="home" style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg, #050f05 0%, #0a0a0a 50%, #050f08 100%)",
      padding: "0 8vw",
    }}>
      <StarField />

      <div style={{
        position: "relative", zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        gap: "40px",
      }}>
        {/* LEFT */}
        <div style={{
          flex: "1 1 0",
          transform: `translate(${mouse.x * -10}px, ${mouse.y * -6}px)`,
          transition: "transform 0.12s ease-out",
        }}>
          {/* Pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            border: "1px solid rgba(74,222,128,0.45)", borderRadius: "20px",
            padding: "5px 16px", marginBottom: "24px",
            background: "rgba(74,222,128,0.06)",
          }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#4ade80", display:"inline-block", animation:"pulse 1.5s infinite" }} />
            <span style={{ color:"#4ade80", fontSize:"10px", letterSpacing:"0.15em", fontWeight:600 }}>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Headline */}
          <div style={{ transform:`translate(${mouse.x * -14}px, ${mouse.y * -9}px)`, transition:"transform 0.1s ease-out" }}>
            <h1 style={{ fontSize:"clamp(1.9rem, 4vw, 3.4rem)", fontWeight:800, color:"#fff", margin:"0", lineHeight:1.1, letterSpacing:"-0.02em" }}>
              Hi, I'm <span style={{ color:"#4ade80" }}>Arushi</span>
            </h1>
            <h1 style={{ fontSize:"clamp(1.9rem, 4vw, 3.4rem)", fontWeight:800, color:"#4ade80", margin:"0 0 10px", lineHeight:1.1, letterSpacing:"-0.02em" }}>
              Singh
            </h1>
            <p style={{ color:"rgba(255,255,255,0.35)", fontSize:"10px", letterSpacing:"0.18em", fontWeight:500, marginBottom:"16px" }}>
              FULL STACK DEVELOPER · MERN STACK · AI BUILDER
            </p>
          </div>

          <p style={{
            color:"rgba(255,255,255,0.58)", fontSize:"0.9rem", lineHeight:1.75,
            maxWidth:"420px", marginBottom:"28px",
            transform:`translate(${mouse.x * -5}px, ${mouse.y * -3}px)`,
            transition:"transform 0.14s ease-out",
          }}>
            MERN Stack Developer focused on creating innovative, AI-powered web applications with advanced user interfaces and real-world impact.
          </p>

          {/* Buttons */}
          <div style={{ display:"flex", gap:"12px", flexWrap:"wrap", marginBottom:"32px" }}>
            <a href="#projects" style={{
              background:"#4ade80", color:"#000", padding:"11px 26px",
              borderRadius:"8px", fontWeight:700, fontSize:"13px",
              textDecoration:"none", transition:"all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background="#86efac"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="#4ade80"; e.currentTarget.style.transform="translateY(0)"; }}
            >View My Work ↗</a>
            <a href="#contact" style={{
              border:"1.5px solid rgba(255,255,255,0.18)", color:"#fff",
              padding:"11px 26px", borderRadius:"8px",
              fontWeight:500, fontSize:"13px",
              textDecoration:"none", transition:"all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="#4ade80"; e.currentTarget.style.color="#4ade80"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; e.currentTarget.style.color="#fff"; }}
            >Contact Me</a>
          </div>

          {/* Stats — always visible */}
          <div style={{
            display:"flex", borderTop:"1px solid rgba(255,255,255,0.07)",
            paddingTop:"20px", maxWidth:"360px",
          }}>
            {[["3+","LIVE PROJECTS"],["1+","YEARS EXP."],["10+","TECHNOLOGIES"]].map(([num, label], i) => (
              <div key={label} style={{
                flex:1, textAlign:"center",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                padding:"0 6px",
              }}>
                <div style={{ fontSize:"1.7rem", fontWeight:800, color:"#4ade80", lineHeight:1 }}>{num}</div>
                <div style={{ color:"rgba(255,255,255,0.3)", fontSize:"9px", letterSpacing:"0.1em", marginTop:"4px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{
          flex:"0 0 auto",
          transform:`translate(${mouse.x * 8}px, ${mouse.y * 5}px)`,
          transition:"transform 0.12s ease-out",
        }}>
          <PhotoFrame />
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
        @keyframes scanline { 0%{top:-2%;} 100%{top:102%;} }
      `}</style>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => setMouse({ x:(e.clientX/window.innerWidth-0.5)*2, y:(e.clientY/window.innerHeight-0.5)*2 });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const facts = [
    { icon: "🎓", label: "Education", value: "B.Tech CSE — Galgotias University (2022–2026)" },
    { icon: "💼", label: "Internship", value: "Prodigy InfoTech — Full Stack Developer" },
    { icon: "📍", label: "Location", value: "India" },
    { icon: "🚀", label: "Focus", value: "MERN Stack · AI Integration · 3D UI" },
  ];

  return (
    <section id="about" ref={ref} style={{
      minHeight:"100vh",
      background:"linear-gradient(160deg, #050f05 0%, #080808 60%, #050f08 100%)",
      display:"flex", alignItems:"center",
      padding:"80px 8vw", position:"relative", overflow:"hidden",
    }}>
      {/* Big BG text */}
      <div style={{
        position:"absolute", right:"-2vw", top:"50%",
        transform:"translateY(-50%)",
        fontSize:"clamp(6rem,15vw,14rem)", fontWeight:900,
        color:"rgba(74,222,128,0.03)", letterSpacing:"-0.05em",
        pointerEvents:"none", userSelect:"none", lineHeight:1,
      }}>ABOUT</div>

      <div style={{ maxWidth:"1100px", margin:"0 auto", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"center" }}>
        {/* Left */}
        <div style={{
          opacity:visible?1:0,
          transform:visible?`translate(${mouse.x*-8}px, ${mouse.y*-5}px)`:"translateX(-40px)",
          transition:"opacity 0.7s ease, transform 0.12s ease-out",
        }}>
          <div style={{ color:"#4ade80", fontSize:"11px", letterSpacing:"0.2em", fontWeight:600, marginBottom:"14px" }}>ABOUT ME</div>
          <h2 style={{ fontSize:"clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight:800, color:"#fff", lineHeight:1.15, marginBottom:"20px", letterSpacing:"-0.02em" }}>
            Turning ideas into<br /><span style={{ color:"#4ade80" }}>digital reality.</span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"0.92rem", lineHeight:1.8, marginBottom:"16px" }}>
            I'm a final-year B.Tech CSE student at Galgotias University with a passion for building intelligent, visually stunning web applications.
          </p>
          <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"0.92rem", lineHeight:1.8, marginBottom:"28px" }}>
            My expertise spans the MERN stack, AI integration, and immersive 3D user interfaces. During my internship at Prodigy InfoTech, I built production-ready features and sharpened my full-stack skills.
          </p>
          <div style={{ display:"flex", gap:"20px", flexWrap:"wrap" }}>
            {[
              { label:"GitHub", href:"https://github.com/Arushi026" },
              { label:"LinkedIn", href:"https://www.linkedin.com/in/arushi-dhigurvar-08556a236" },
              { label:"Email", href:"mailto:arushisingh02602@gmail.com" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ color:"rgba(255,255,255,0.4)", fontSize:"13px", textDecoration:"none", display:"flex", alignItems:"center", gap:"5px", transition:"color 0.2s" }}
                onMouseEnter={e=>e.currentTarget.style.color="#4ade80"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.4)"}
              >↗ {label}</a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{
          display:"flex", flexDirection:"column", gap:"12px",
          opacity:visible?1:0,
          transform:visible?`translate(${mouse.x*8}px, ${mouse.y*5}px)`:"translateX(40px)",
          transition:"opacity 0.7s ease 0.2s, transform 0.12s ease-out",
        }}>
          {facts.map(({ icon, label, value }, i) => (
            <div key={label} style={{
              background:"rgba(255,255,255,0.02)", border:"1px solid rgba(74,222,128,0.12)",
              borderLeft:"3px solid rgba(74,222,128,0.5)",
              borderRadius:"10px", padding:"16px 20px",
              opacity:visible?1:0,
              transform:visible?"translateY(0)":"translateY(20px)",
              transition:`opacity 0.5s ease ${0.3+i*0.1}s, transform 0.5s ease ${0.3+i*0.1}s`,
            }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(74,222,128,0.05)"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.02)"}
            >
              <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <span style={{ fontSize:"16px" }}>{icon}</span>
                <div>
                  <div style={{ color:"#4ade80", fontSize:"10px", letterSpacing:"0.12em", fontWeight:600, marginBottom:"3px" }}>{label.toUpperCase()}</div>
                  <div style={{ color:"rgba(255,255,255,0.8)", fontSize:"13px", fontWeight:500 }}>{value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

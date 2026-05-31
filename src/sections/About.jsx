import { useEffect, useRef, useState } from "react";

export default function About() {
  const [mouse, setMouse] = useState({ x:0, y:0 });
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth<=768);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => setMouse({x:(e.clientX/window.innerWidth-0.5)*2,y:(e.clientY/window.innerHeight-0.5)*2});
    const r = () => setIsMobile(window.innerWidth<=768);
    window.addEventListener("mousemove",h);
    window.addEventListener("resize",r);
    return ()=>{ window.removeEventListener("mousemove",h); window.removeEventListener("resize",r); };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.1});
    if(ref.current) obs.observe(ref.current);
    return ()=>obs.disconnect();
  }, []);

  const facts = [
    {icon:"🎓",label:"Education",value:"B.Tech in Computer Science & Engineering — Lucknow University  • (2021 – 2025)"},
    {icon:"💼",label:"Internship",value:"Full Stack Developer Intern at Analyze InfoTech"},
    {icon:"📍",label:"Location",value:"India"},
    {icon:"🚀",label:"Focus",value:"MERN Stack • Java • AI Applications • Full Stack DevelopmentI"},
  ];

  return (
    <section id="about" ref={ref} style={{
      minHeight:"100vh",
      background:"linear-gradient(160deg,#050f05 0%,#080808 60%,#050f08 100%)",
      display:"flex", alignItems:"center",
      padding:"80px 8vw", position:"relative", overflow:"hidden",
    }}>
      <div style={{
        position:"absolute",right:"-2vw",top:"50%",transform:"translateY(-50%)",
        fontSize:"clamp(4rem,12vw,14rem)",fontWeight:900,
        color:"rgba(74,222,128,0.03)",letterSpacing:"-0.05em",
        pointerEvents:"none",userSelect:"none",lineHeight:1,
      }}>ABOUT</div>

      <div style={{
        maxWidth:"1100px",margin:"0 auto",width:"100%",
        display:"grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "40px" : "80px",
        alignItems:"center",
      }}>
        <div style={{
          opacity:visible?1:0,
          transform:visible?`translate(${isMobile?0:mouse.x*-8}px,${isMobile?0:mouse.y*-5}px)`:"translateX(-40px)",
          transition:"opacity 0.7s ease, transform 0.12s ease-out",
        }}>
          <div style={{color:"#4ade80",fontSize:"11px",letterSpacing:"0.2em",fontWeight:600,marginBottom:"14px"}}>ABOUT ME</div>
          <h2 style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:800,color:"#fff",lineHeight:1.15,marginBottom:"20px",letterSpacing:"-0.02em"}}>
            Building Impactful<br /><span style={{color:"#4ade80"}}>Software Solutions.</span>
          </h2>
          <p style={{color:"rgba(255,255,255,0.55)",fontSize:"0.92rem",lineHeight:1.8,marginBottom:"16px"}}>
             I'm a B.Tech Computer Science graduate from Lucknow University with a strong interest in software development, problem-solving, and building user-focused web applications. I enjoy transforming ideas into scalable digital products that create real-world impact.
          </p>
          <p style={{color:"rgba(255,255,255,0.55)",fontSize:"0.92rem",lineHeight:1.8,marginBottom:"28px"}}>
            My technical expertise includes MERN Stack, Java, MongoDB, and modern web technologies. During my internship at Analyze InfoTech, I contributed to full-stack development projects and gained practical experience building scalable, responsive, and production-ready applications.
          </p>
          <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
            {[{label:"GitHub",href:"https://github.com/Arushi026"},{label:"LinkedIn",href:"https://www.linkedin.com/in/arushi-dhigurvar-08556a236"},{label:"Email",href:"mailto:arushisingh02602@gmail.com"}].map(({label,href})=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{color:"rgba(255,255,255,0.4)",fontSize:"13px",textDecoration:"none",display:"flex",alignItems:"center",gap:"5px",transition:"color 0.2s"}}
                onMouseEnter={e=>e.currentTarget.style.color="#4ade80"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.4)"}
              >↗ {label}</a>
            ))}
          </div>
        </div>

        <div style={{
          display:"flex",flexDirection:"column",gap:"12px",
          opacity:visible?1:0,
          transform:visible?`translate(${isMobile?0:mouse.x*8}px,${isMobile?0:mouse.y*5}px)`:"translateX(40px)",
          transition:"opacity 0.7s ease 0.2s, transform 0.12s ease-out",
        }}>
          {facts.map(({icon,label,value},i)=>(
            <div key={label} style={{
              background:"rgba(255,255,255,0.02)",border:"1px solid rgba(74,222,128,0.12)",
              borderLeft:"3px solid rgba(74,222,128,0.5)",
              borderRadius:"10px",padding:"16px 20px",
              opacity:visible?1:0,
              transform:visible?"translateY(0)":"translateY(20px)",
              transition:`opacity 0.5s ease ${0.3+i*0.1}s, transform 0.5s ease ${0.3+i*0.1}s`,
            }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(74,222,128,0.05)"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.02)"}
            >
              <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <span style={{fontSize:"16px"}}>{icon}</span>
                <div>
                  <div style={{color:"#4ade80",fontSize:"10px",letterSpacing:"0.12em",fontWeight:600,marginBottom:"3px"}}>{label.toUpperCase()}</div>
                  <div style={{color:"rgba(255,255,255,0.8)",fontSize:"13px",fontWeight:500}}>{value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

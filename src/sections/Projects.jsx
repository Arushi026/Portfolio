import { useEffect, useRef, useState } from "react";

const projects = [
  { name:"PadhAI", role:"Full Stack Developer", desc:"AI-powered learning platform with personalized study plans, smart quizzes, and progress tracking. Built with MERN stack and integrated OpenAI for intelligent content generation.", tech:["React","Node.js","MongoDB","OpenAI API","Express"], live:"https://padh-ai-pied.vercel.app/", github:"https://github.com/Arushi026", tag:"AI · EDUCATION", num:"01", emoji:"🤖" },
  { name:"MySphere", role:"Full Stack Developer", desc:"Modern social media platform with real-time features, post sharing, follow system, and responsive design. Features JWT authentication and cloud image storage.", tech:["React","Node.js","MongoDB","Socket.io","Cloudinary"], live:null, github:"https://github.com/Arushi026", tag:"SOCIAL · REAL-TIME", num:"02", emoji:"🌐" },
  { name:"Portfolio OS", role:"Designer & Developer", desc:"This portfolio — a futuristic OS-inspired personal site with 3D mouse interactions, magnetic effects, cinematic animations, and a cohesive dark design system.", tech:["React","Vite","CSS Animations","Canvas API"], live:"#", github:"https://github.com/Arushi026", tag:"3D · INTERACTIVE", num:"03", emoji:"✨" },
];

function Card({p,i,visible}) {
  const [hovered,setHovered]=useState(false);
  return (
    <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} style={{
      background:hovered?"rgba(74,222,128,0.04)":"rgba(255,255,255,0.015)",
      border:`1px solid ${hovered?"rgba(74,222,128,0.4)":"rgba(255,255,255,0.07)"}`,
      borderRadius:"14px",padding:"28px 24px",position:"relative",overflow:"hidden",cursor:"pointer",
      opacity:visible?1:0,
      transform:visible?`translateY(${hovered?-4:0}px)`:"translateY(40px)",
      transition:`opacity 0.6s ease ${i*0.12}s, transform 0.3s ease, border-color 0.3s, background 0.3s`,
      display:"flex",flexDirection:"column",
    }}>
      <div style={{position:"absolute",right:"18px",top:"14px",fontSize:"2.5rem",opacity:hovered?0.15:0.05,transition:"opacity 0.3s",userSelect:"none"}}>{p.emoji}</div>
      <div style={{color:"#4ade80",fontSize:"10px",letterSpacing:"0.18em",fontWeight:600,marginBottom:"8px"}}>{p.tag}</div>
      <h3 style={{color:"#fff",fontSize:"1.3rem",fontWeight:700,marginBottom:"6px"}}>{p.name}</h3>
      <div style={{color:"rgba(255,255,255,0.3)",fontSize:"11px",letterSpacing:"0.08em",marginBottom:"14px"}}>{p.role}</div>
      <p style={{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem",lineHeight:1.7,marginBottom:"18px",flex:1}}>{p.desc}</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"20px"}}>
        {p.tech.map(t=><span key={t} style={{background:"rgba(74,222,128,0.07)",border:"1px solid rgba(74,222,128,0.2)",borderRadius:"4px",padding:"2px 9px",fontSize:"11px",color:"rgba(255,255,255,0.55)"}}>{t}</span>)}
      </div>
      <div style={{display:"flex",gap:"16px",alignItems:"center"}}>
        {p.live&&p.live!=="#"&&<a href={p.live} target="_blank" rel="noopener noreferrer" style={{color:"#4ade80",fontSize:"12px",letterSpacing:"0.08em",textDecoration:"none",fontWeight:700}}>↗ LIVE DEMO</a>}
        <a href={p.github} target="_blank" rel="noopener noreferrer" style={{color:"rgba(255,255,255,0.35)",fontSize:"12px",textDecoration:"none",letterSpacing:"0.08em",transition:"color 0.2s"}}
          onMouseEnter={e=>e.currentTarget.style.color="#fff"} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.35)"}
        >↗ GITHUB</a>
        <span style={{marginLeft:"auto",color:"rgba(74,222,128,0.15)",fontSize:"1.4rem",fontWeight:900}}>{p.num}</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [mouse,setMouse]=useState({x:0,y:0});
  const [visible,setVisible]=useState(false);
  const [isMobile,setIsMobile]=useState(window.innerWidth<=768);
  const ref=useRef(null);

  useEffect(()=>{
    const h=(e)=>setMouse({x:(e.clientX/window.innerWidth-0.5)*2,y:(e.clientY/window.innerHeight-0.5)*2});
    const r=()=>setIsMobile(window.innerWidth<=768);
    window.addEventListener("mousemove",h);
    window.addEventListener("resize",r);
    return()=>{window.removeEventListener("mousemove",h);window.removeEventListener("resize",r);};
  },[]);

  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.05});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[]);

  return (
    <section id="projects" ref={ref} style={{
      minHeight:"100vh",
      background:"linear-gradient(180deg,#080808 0%,#050f05 50%,#080808 100%)",
      padding:"80px 8vw",position:"relative",overflow:"hidden",
    }}>
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <div style={{
          display:"flex",justifyContent:"space-between",alignItems: isMobile?"flex-start":"flex-end",
          flexDirection: isMobile?"column":"row",
          marginBottom:"48px",gap: isMobile?"16px":"0",
          transform:isMobile?"none":`translate(${mouse.x*-6}px,${mouse.y*-4}px)`,
          transition:"transform 0.12s ease-out",
        }}>
          <div>
            <div style={{color:"#4ade80",fontSize:"11px",letterSpacing:"0.2em",fontWeight:600,marginBottom:"10px"}}>SELECTED WORK</div>
            <h2 style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:800,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.1}}>
              Projects that<br /><span style={{color:"#4ade80"}}>speak for me.</span>
            </h2>
          </div>
          <a href="https://github.com/Arushi026" target="_blank" rel="noopener noreferrer"
            style={{color:"rgba(255,255,255,0.35)",fontSize:"12px",letterSpacing:"0.1em",textDecoration:"none",borderBottom:"1px solid rgba(255,255,255,0.12)",paddingBottom:"2px",transition:"color 0.2s",whiteSpace:"nowrap"}}
            onMouseEnter={e=>e.currentTarget.style.color="#4ade80"}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.35)"}
          >View all on GitHub →</a>
        </div>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:"20px"}}>
          {projects.map((p,i)=><Card key={p.name} p={p} i={i} visible={visible}/>)}
        </div>
      </div>
    </section>
  );
}

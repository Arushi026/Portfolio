import { useEffect, useState, useRef } from "react";

const skillGroups = [
  { category:"Frontend", skills:[{name:"React.js",level:90},{name:"JavaScript / ES6+",level:88},{name:"HTML & CSS",level:98},{name:"Tailwind CSS",level:95},{name:"Three.js / 3D UI",level:92}] },
  { category:"Backend", skills:[{name:"Node.js",level:85},{name:"Express.js",level:88},{name:"JAVA",level:90},{name:"JSP & SERVLET",level:90},{name:"MongoDB & MySQL",level:90},{name:"REST APIs",level:88},{name:"JWT Auth",level:82}] },
  { category:"AI & Tools", skills:[{name:"OpenAI API Integration",level:88},{name:"Git & GitHub",level:97},{name:"VS Code",level:95},{name:"NETBEANS",level:90},{name:"Postman",level:92},{name:"RAILWAY",level:95},{name:"Vercel / Netlify Deploy",level:94}] },
];

function SkillBar({name,level,visible,delay}) {
  const [animated,setAnimated]=useState(false);
  useEffect(()=>{ if(visible){const t=setTimeout(()=>setAnimated(true),delay);return()=>clearTimeout(t);} },[visible,delay]);
  return (
    <div style={{marginBottom:"16px"}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6px"}}>
        <span style={{color:"rgba(255,255,255,0.75)",fontSize:"13px",fontWeight:500}}>{name}</span>
        <span style={{color:"#4ade80",fontSize:"12px",fontWeight:600}}>{level}%</span>
      </div>
      <div style={{height:"3px",background:"rgba(255,255,255,0.06)",borderRadius:"3px",overflow:"hidden"}}>
        <div style={{height:"100%",width:animated?`${level}%`:"0%",background:"linear-gradient(90deg,#4ade80,#86efac)",borderRadius:"3px",boxShadow:"0 0 8px rgba(74,222,128,0.4)",transition:`width 1s cubic-bezier(0.4,0,0.2,1) ${delay}ms`}} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [mouse,setMouse]=useState({x:0,y:0});
  const [visible,setVisible]=useState(false);
  const [isMobile,setIsMobile]=useState(window.innerWidth<=768);
  const sectionRef=useRef(null);

  useEffect(()=>{
    const h=(e)=>setMouse({x:(e.clientX/window.innerWidth-0.5)*2,y:(e.clientY/window.innerHeight-0.5)*2});
    const r=()=>setIsMobile(window.innerWidth<=768);
    window.addEventListener("mousemove",h);
    window.addEventListener("resize",r);
    return()=>{window.removeEventListener("mousemove",h);window.removeEventListener("resize",r);};
  },[]);

  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisible(true);},{threshold:0.1});
    if(sectionRef.current)obs.observe(sectionRef.current);
    return()=>obs.disconnect();
  },[]);

  return (
    <section id="skills" ref={sectionRef} style={{
      minHeight:"100vh",
      background:"linear-gradient(160deg,#050f05 0%,#080808 50%,#050f05 100%)",
      padding:"80px 8vw",position:"relative",overflow:"hidden",
    }}>
      {[20,40,60,80].map(pct=>(
        <div key={pct} style={{position:"absolute",top:0,bottom:0,left:`${pct}%`,width:"1px",background:"rgba(255,255,255,0.02)",pointerEvents:"none"}} />
      ))}
      <div style={{maxWidth:"1100px",margin:"0 auto"}}>
        <div style={{marginBottom:"50px",transform:isMobile?"none":`translate(${mouse.x*-5}px,${mouse.y*-3}px)`,transition:"transform 0.12s ease-out"}}>
          <div style={{color:"#4ade80",fontSize:"11px",letterSpacing:"0.2em",fontWeight:600,marginBottom:"10px"}}>MY EXPERTISE</div>
          <h2 style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:800,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.1}}>
            Tools I use to<br /><span style={{color:"#4ade80"}}>build the future.</span>
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:isMobile?"40px":"50px"}}>
          {skillGroups.map((group,gi)=>(
            <div key={group.category} style={{
              opacity:visible?1:0,
              transform:visible?`translate(${isMobile?0:mouse.x*(gi%2===0?-4:4)}px,${isMobile?0:mouse.y*-3}px)`:"translateY(30px)",
              transition:`opacity 0.6s ease ${gi*0.15}s, transform 0.12s ease-out`,
            }}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"22px",paddingBottom:"12px",borderBottom:"1px solid rgba(74,222,128,0.2)"}}>
                <span style={{color:"#fff",fontSize:"13px",fontWeight:700,letterSpacing:"0.1em"}}>{group.category.toUpperCase()}</span>
                <span style={{color:"#4ade80",fontSize:"10px",background:"rgba(74,222,128,0.08)",padding:"2px 10px",borderRadius:"20px"}}>{group.skills.length} skills</span>
              </div>
              {group.skills.map((skill,si)=>(
                <SkillBar key={skill.name} name={skill.name} level={skill.level} visible={visible} delay={gi*200+si*120} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

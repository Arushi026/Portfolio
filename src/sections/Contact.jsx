import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
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

  const input = {
    width:"100%", background:"rgba(255,255,255,0.03)",
    border:"1px solid rgba(255,255,255,0.1)", borderRadius:"8px",
    padding:"12px 14px", color:"#fff", fontSize:"13px",
    outline:"none", boxSizing:"border-box",
    transition:"border-color 0.2s", fontFamily:"inherit",
  };

  return (
    <section id="contact" ref={ref} style={{
      minHeight:"100vh",
      background:"linear-gradient(160deg, #030b08 0%, #050f05 40%, #030808 100%)",
      padding:"80px 8vw",
      position:"relative", overflow:"hidden",
      display:"flex", flexDirection:"column", justifyContent:"center",
    }}>
      {/* Glow accents */}
      <div style={{ position:"absolute", bottom:"-15%", right:"-5%", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"10%", left:"-5%", width:"280px", height:"280px", borderRadius:"50%", background:"radial-gradient(circle, rgba(74,222,128,0.03) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1100px", margin:"0 auto", width:"100%" }}>
        {/* Header */}
        <div style={{
          marginBottom:"44px", opacity:visible?1:0, transition:"opacity 0.7s ease",
          transform:`translate(${mouse.x*-6}px, ${mouse.y*-4}px)`,
        }}>
          <div style={{ color:"#4ade80", fontSize:"11px", letterSpacing:"0.2em", fontWeight:600, marginBottom:"10px" }}>LET'S TALK</div>
          <h2 style={{ fontSize:"clamp(1.8rem, 4vw, 3rem)", fontWeight:800, color:"#fff", letterSpacing:"-0.02em", lineHeight:1.1, marginBottom:"12px" }}>
            Let's build something<br /><span style={{ color:"#4ade80" }}>extraordinary.</span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.9rem", maxWidth:"420px", lineHeight:1.65 }}>
            Open to full-time roles, internships, and freelance projects. Drop a message or connect on socials!
          </p>
        </div>

        {/* Two columns */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px", alignItems:"start" }}>
          {/* Form */}
          <div style={{
            opacity:visible?1:0,
            transform:visible?`translate(${mouse.x*-7}px, ${mouse.y*-4}px)`:"translateX(-30px)",
            transition:"opacity 0.7s ease 0.2s, transform 0.12s ease-out",
          }}>
            {sent ? (
              <div style={{ border:"1px solid rgba(74,222,128,0.3)", borderRadius:"12px", padding:"40px", textAlign:"center", background:"rgba(74,222,128,0.04)" }}>
                <div style={{ fontSize:"2rem", marginBottom:"12px" }}>🎉</div>
                <div style={{ color:"#4ade80", fontSize:"18px", fontWeight:700, marginBottom:"6px" }}>Message sent!</div>
                <div style={{ color:"rgba(255,255,255,0.4)", fontSize:"13px" }}>I'll get back to you shortly.</div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
                <input required placeholder="Your Name" value={form.name}
                  onChange={e => setForm(f=>({...f, name:e.target.value}))} style={input}
                  onFocus={e=>e.target.style.borderColor="rgba(74,222,128,0.5)"}
                  onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"} />
                <input required type="email" placeholder="Your Email" value={form.email}
                  onChange={e => setForm(f=>({...f, email:e.target.value}))} style={input}
                  onFocus={e=>e.target.style.borderColor="rgba(74,222,128,0.5)"}
                  onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"} />
                <textarea required placeholder="Your Message" rows={4} value={form.message}
                  onChange={e => setForm(f=>({...f, message:e.target.value}))}
                  style={{...input, resize:"vertical"}}
                  onFocus={e=>e.target.style.borderColor="rgba(74,222,128,0.5)"}
                  onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"} />
                <button type="submit" style={{
                  background:"#4ade80", color:"#000", border:"none",
                  padding:"13px 28px", borderRadius:"8px", fontWeight:700,
                  fontSize:"13px", cursor:"pointer", transition:"all 0.2s",
                  marginTop:"4px",
                }}
                  onMouseEnter={e=>{e.target.style.background="#86efac"; e.target.style.transform="translateY(-2px)";}}
                  onMouseLeave={e=>{e.target.style.background="#4ade80"; e.target.style.transform="translateY(0)";}}
                >Send Message ↗</button>
              </form>
            )}
          </div>

          {/* Right — socials */}
          <div style={{
            opacity:visible?1:0,
            transform:visible?`translate(${mouse.x*7}px, ${mouse.y*4}px)`:"translateX(30px)",
            transition:"opacity 0.7s ease 0.3s, transform 0.12s ease-out",
          }}>
            <div style={{ color:"rgba(255,255,255,0.3)", fontSize:"10px", letterSpacing:"0.15em", fontWeight:600, marginBottom:"16px" }}>FIND ME ON</div>
            {[
              { label:"GitHub", href:"https://github.com/Arushi026", sub:"github.com/Arushi026" },
              { label:"LinkedIn", href:"https://www.linkedin.com/in/arushi-dhigurvar-08556a236", sub:"arushi-dhigurvar" },
              { label:"Email", href:"mailto:arushisingh02602@gmail.com", sub:"arushisingh02602@gmail.com" },
            ].map(({ label, href, sub }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 0", borderBottom:"1px solid rgba(255,255,255,0.05)", textDecoration:"none", transition:"all 0.2s" }}
                onMouseEnter={e=>{e.currentTarget.querySelector('.lbl').style.color="#4ade80"; e.currentTarget.querySelector('.arr').style.opacity="1";}}
                onMouseLeave={e=>{e.currentTarget.querySelector('.lbl').style.color="#fff"; e.currentTarget.querySelector('.arr').style.opacity="0.3";}}
              >
                <div>
                  <div className="lbl" style={{ color:"#fff", fontSize:"14px", fontWeight:600, transition:"color 0.2s" }}>{label}</div>
                  <div style={{ color:"rgba(255,255,255,0.3)", fontSize:"11px", marginTop:"2px" }}>{sub}</div>
                </div>
                <span className="arr" style={{ color:"#4ade80", fontSize:"16px", opacity:0.3, transition:"opacity 0.2s" }}>↗</span>
              </a>
            ))}

            <div style={{ background:"rgba(74,222,128,0.05)", border:"1px solid rgba(74,222,128,0.2)", borderRadius:"12px", padding:"20px", marginTop:"24px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"6px" }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"#4ade80", display:"inline-block", animation:"pulse 1.5s infinite" }} />
                <span style={{ color:"#4ade80", fontSize:"10px", letterSpacing:"0.12em", fontWeight:600 }}>AVAILABLE FOR WORK</span>
              </div>
              <div style={{ color:"rgba(255,255,255,0.45)", fontSize:"12px", lineHeight:1.6 }}>
                Open to full-time roles and internships. Response within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}`}</style>
    </section>
  );
}

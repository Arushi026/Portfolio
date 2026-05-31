export default function Footer() {
  return (
    <footer style={{
      background: "#030b08",
      borderTop: "1px solid rgba(74,222,128,0.1)",
      padding: "28px 6vw",
      display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px",
    }}>
      <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", letterSpacing: "0.04em" }}>
        © <span style={{ color: "#4ade80" }}>Arushi Singh</span>. Built with React & passion.
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        {[["GitHub","https://github.com/Arushi026"],["LinkedIn","https://www.linkedin.com/in/arushi-dhigurvar-08556a236"],["Leetcode","https://leetcode.com/u/Arush_i26/"],["Email","mailto:arushisingh02602@gmail.com"]].map(([l,h]) => (
          <a key={l} href={h} target="_blank" rel="noopener noreferrer"
            style={{ color:"rgba(255,255,255,0.25)", fontSize:"12px", textDecoration:"none", letterSpacing:"0.06em", transition:"color 0.2s" }}
            onMouseEnter={e=>e.target.style.color="#4ade80"}
            onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.25)"}
          >{l}</a>
        ))}
      </div>
    </footer>
  );
}

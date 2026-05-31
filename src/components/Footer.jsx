// export default function Footer() {
//   return (
//     <footer className="bg-[#050816] border-t border-cyan-400/10 py-8 px-8 md:px-24">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//         <span className="text-cyan-400 font-black text-lg">
//           Arushi<span className="text-white">.OS</span>
//         </span>
//         <p className="text-gray-600 text-xs text-center">
//           © 2025 Arushi Singh. Built with React + Tailwind CSS + Framer Motion.
//         </p>
//         <div className="flex gap-5">
//           <a href="https://github.com/Arushi026" target="_blank" rel="noreferrer"
//             className="text-gray-500 hover:text-cyan-400 transition text-xs">GitHub</a>
//           <a href="https://www.linkedin.com/in/arushi-dhigurvar-08556a236" target="_blank" rel="noreferrer"
//             className="text-gray-500 hover:text-cyan-400 transition text-xs">LinkedIn</a>
//           <a href="mailto:singharushi073@gmail.com"
//             className="text-gray-500 hover:text-cyan-400 transition text-xs">Email</a>
//         </div>
//       </div>
//     </footer>
//   );
// }




// export default function Footer() {
//   return (
//     <footer className="py-8 px-8 md:px-24" style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//         <span className="font-black text-lg text-white">Arushi<span style={{ color: "#69ff47" }}>.OS</span></span>
//         <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.2)" }}>
//           © 2025 Arushi Singh · Built with React + Tailwind CSS + Framer Motion
//         </p>
//         <div className="flex gap-6">
//           {[
//             { label: "GitHub", href: "https://github.com/Arushi026" },
//             { label: "LinkedIn", href: "https://www.linkedin.com/in/arushi-dhigurvar-08556a236" },
//             { label: "Email", href: "mailto:singharushi073@gmail.com" },
//           ].map((l) => (
//             <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
//               className="text-xs transition"
//               style={{ color: "rgba(255,255,255,0.25)" }}
//               onMouseEnter={e => e.currentTarget.style.color = "#69ff47"}
//               onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}
//             >{l.label}</a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }














// export default function Footer() {
//   return (
//     <footer style={{
//       background: "linear-gradient(160deg, #020d04 0%, #000 60%)",
//       borderTop: "1px solid rgba(255,255,255,0.06)",
//       padding: "32px 6vw",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       flexWrap: "wrap",
//       gap: "12px",
//     }}>
//       <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", letterSpacing: "0.05em" }}>
//         © 2025 Arushi Singh. Built with React + passion.
//       </div>
//       <div style={{ display: "flex", gap: "24px" }}>
//         {[
//           ["GitHub", "https://github.com/Arushi026"],
//           ["LinkedIn", "https://www.linkedin.com/in/arushi-dhigurvar-08556a236"],
//           ["Email", "mailto:arushisingh02602@gmail.com"],
//         ].map(([label, href]) => (
//           <a key={label} href={href} target="_blank" rel="noopener noreferrer"
//             style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textDecoration: "none", letterSpacing: "0.08em", transition: "color 0.2s" }}
//             onMouseEnter={e => e.target.style.color = "#69ff47"}
//             onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
//           >{label}</a>
//         ))}
//       </div>
//     </footer>
//   );
// }










export default function Footer() {
  return (
    <footer style={{
      background: "#030b08",
      borderTop: "1px solid rgba(74,222,128,0.1)",
      padding: "28px 6vw",
      display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px",
    }}>
      <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", letterSpacing: "0.04em" }}>
        © 2025 <span style={{ color: "#4ade80" }}>Arushi Singh</span>. Built with React & passion.
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        {[["GitHub","https://github.com/Arushi026"],["LinkedIn","https://www.linkedin.com/in/arushi-dhigurvar-08556a236"],["Email","mailto:arushisingh02602@gmail.com"]].map(([l,h]) => (
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

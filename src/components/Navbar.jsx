// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const links = ["Home", "About", "Projects", "Skills", "Contact"];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState("Home");

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollTo = (id) => {
//     setActive(id);
//     document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <motion.nav
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.7 }}
//       className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-20 py-4 transition-all duration-300 ${
//         scrolled ? "bg-[#050816]/90 backdrop-blur border-b border-cyan-400/10" : "bg-transparent"
//       }`}
//     >
//       <span
//         className="text-cyan-400 font-black text-xl tracking-wide cursor-pointer"
//         onClick={() => scrollTo("Home")}
//       >
//         Arushi<span className="text-white">.OS</span>
//       </span>

//       <div className="hidden md:flex gap-8">
//         {links.map((l) => (
//           <button
//             key={l}
//             onClick={() => scrollTo(l)}
//             className={`text-sm font-medium tracking-wide transition-all duration-200 ${
//               active === l
//                 ? "text-cyan-400 border-b border-cyan-400 pb-0.5"
//                 : "text-gray-300 hover:text-cyan-400"
//             }`}
//           >
//             {l}
//           </button>
//         ))}
//       </div>

//       <a
//         href="/Arushi_Singh_Resume.pdf"
//         download
//         className="hidden md:block px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 text-xs font-bold hover:bg-cyan-400 hover:text-black transition duration-300"
//       >
//         Download CV
//       </a>
//     </motion.nav>
//   );
// }






// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const links = ["Home", "About", "Projects", "Skills", "Contact"];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState("Home");

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollTo = (id) => {
//     setActive(id);
//     document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <motion.nav
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.7 }}
//       className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-20 py-4 transition-all duration-300"
//       style={{
//         background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
//         backdropFilter: scrolled ? "blur(12px)" : "none",
//         borderBottom: scrolled ? "1px solid rgba(105,255,71,0.08)" : "none",
//       }}
//     >
//       <span className="font-black text-xl tracking-wide cursor-pointer text-white" onClick={() => scrollTo("Home")}>
//         Arushi<span style={{ color: "#69ff47" }}>.OS</span>
//       </span>

//       <div className="hidden md:flex gap-8">
//         {links.map((l) => (
//           <button key={l} onClick={() => scrollTo(l)}
//             className="text-sm font-medium tracking-wide transition-all duration-200"
//             style={{ color: active === l ? "#69ff47" : "rgba(255,255,255,0.45)", borderBottom: active === l ? "1px solid #69ff47" : "none", paddingBottom: active === l ? "2px" : "0" }}
//           >
//             {l}
//           </button>
//         ))}
//       </div>

//       <a href="/Arushi_Singh_Resume.pdf" download
//         className="hidden md:block px-5 py-2 rounded-lg font-bold text-xs transition-all duration-300 hover:scale-105"
//         style={{ border: "1px solid rgba(105,255,71,0.4)", color: "#69ff47", background: "rgba(105,255,71,0.06)" }}
//       >
//         Download CV
//       </a>
//     </motion.nav>
//   );
// }











// import { useEffect, useState } from "react";

// const links = ["Home", "About", "Projects", "Skills", "Contact"];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState("Home");

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav style={{
//       position: "fixed",
//       top: 0,
//       left: 0,
//       right: 0,
//       zIndex: 100,
//       padding: "0 6vw",
//       height: "64px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       background: scrolled ? "rgba(0,0,0,0.9)" : "transparent",
//       backdropFilter: scrolled ? "blur(20px)" : "none",
//       borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
//       transition: "all 0.4s ease",
//     }}>
//       {/* Logo */}
//       <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
//         onClick={() => setActive("Home")}>
//         <div style={{
//           width: "28px", height: "28px",
//           border: "1px solid #69ff47",
//           borderRadius: "3px",
//           display: "flex", alignItems: "center", justifyContent: "center",
//         }}>
//           <span style={{ color: "#69ff47", fontSize: "12px", fontWeight: 800 }}>A</span>
//         </div>
//         <span style={{ color: "#fff", fontWeight: 700, fontSize: "14px", letterSpacing: "0.05em" }}>
//           Arushi<span style={{ color: "#69ff47" }}>.</span>
//         </span>
//       </a>

//       {/* Links */}
//       <div style={{ display: "flex", gap: "8px" }}>
//         {links.map((link) => {
//           const isActive = active === link;
//           return (
//             <a
//               key={link}
//               href={`#${link.toLowerCase()}`}
//               onClick={() => setActive(link)}
//               style={{
//                 color: isActive ? "#69ff47" : "rgba(255,255,255,0.5)",
//                 textDecoration: "none",
//                 fontSize: "12px",
//                 letterSpacing: "0.1em",
//                 fontWeight: isActive ? 600 : 400,
//                 padding: "8px 12px",
//                 borderRadius: "3px",
//                 transition: "all 0.2s",
//                 background: isActive ? "rgba(105,255,71,0.08)" : "transparent",
//               }}
//               onMouseEnter={e => {
//                 if (!isActive) e.currentTarget.style.color = "#fff";
//               }}
//               onMouseLeave={e => {
//                 if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.5)";
//               }}
//             >
//               {link.toUpperCase()}
//             </a>
//           );
//         })}
//       </div>

//       {/* CTA */}
//       <a
//         href="/Arushi_Singh_Resume.pdf"
//         download
//         style={{
//           border: "1px solid rgba(105,255,71,0.4)",
//           color: "#69ff47",
//           padding: "8px 20px",
//           borderRadius: "3px",
//           fontSize: "11px",
//           letterSpacing: "0.1em",
//           fontWeight: 600,
//           textDecoration: "none",
//           transition: "all 0.2s",
//         }}
//         onMouseEnter={e => { e.currentTarget.style.background = "#69ff47"; e.currentTarget.style.color = "#000"; }}
//         onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#69ff47"; }}
//       >
//         RESUME
//       </a>
//     </nav>
//   );
// }








import { useEffect, useState } from "react";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 6vw", height: "64px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(5,15,5,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(74,222,128,0.1)" : "none",
      transition: "all 0.4s ease",
    }}>
      <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: "18px", letterSpacing: "-0.01em" }}>Arushi</span>
        <span style={{ color: "#4ade80", fontWeight: 800, fontSize: "18px" }}>.OS</span>
      </a>

      <div style={{ display: "flex", gap: "4px" }}>
        {links.map((link) => {
          const isActive = active === link;
          return (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setActive(link)} style={{
              color: isActive ? "#4ade80" : "rgba(255,255,255,0.55)",
              textDecoration: "none", fontSize: "13px", fontWeight: isActive ? 600 : 400,
              padding: "8px 14px", borderRadius: "6px",
              borderBottom: isActive ? "2px solid #4ade80" : "2px solid transparent",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
            >{link}</a>
          );
        })}
      </div>

      <a href="/Arushi_Singh_Resume.pdf" download style={{
        border: "1.5px solid #4ade80", color: "#4ade80",
        padding: "8px 22px", borderRadius: "8px",
        fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s",
      }}
        onMouseEnter={e => { e.currentTarget.style.background = "#4ade80"; e.currentTarget.style.color = "#000"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4ade80"; }}
      >Download CV</a>
    </nav>
  );
}

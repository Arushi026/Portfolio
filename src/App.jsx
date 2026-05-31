// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Navbar from "./components/Navbar";
// import AIAssistant from "./components/AIAssistant";
// import PhotoFrame from "./components/PhotoFrame";

// export default function App() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animId;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const stars = Array.from({ length: 160 }, () => ({
//       x: Math.random(),
//       y: Math.random(),
//       r: Math.random() * 1.4 + 0.3,
//       speed: Math.random() * 0.00008 + 0.00003,
//       opacity: Math.random() * 0.6 + 0.2,
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       stars.forEach((s) => {
//         s.y += s.speed;
//         if (s.y > 1) s.y = 0;
//         ctx.beginPath();
//         ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
//         ctx.fill();
//       });
//       animId = requestAnimationFrame(draw);
//     };
//     draw();

//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-screen bg-[#050816] overflow-hidden">

//       {/* Animated star background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full"
//         style={{ zIndex: 0 }}
//       />

//       <Navbar />

//       {/* Main layout */}
//       <div className="relative z-10 flex flex-row items-center justify-between h-full px-12 md:px-24 pt-16">

//         {/* LEFT — text */}
//         <div className="max-w-lg text-white">

//           <motion.p
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-cyan-400 tracking-[0.25em] text-xs mb-5 uppercase"
//           >
//             Futuristic AI Portfolio
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             className="text-5xl font-black leading-tight mb-6"
//           >
//             <span className="text-white">Building</span>
//             <br />
//             <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">
//               AI Experiences
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="text-gray-400 text-base leading-7 mb-10 max-w-sm"
//           >
//             MERN Stack Developer crafting immersive AI-powered web experiences
//             with futuristic UI, cinematic interactions, and intelligent systems.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2 }}
//             className="flex gap-5"
//           >
//             <button className="px-7 py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm hover:scale-105 hover:shadow-[0_0_25px_cyan] transition duration-300">
//               Explore Work
//             </button>
//             <button className="px-7 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-bold text-sm hover:bg-cyan-400 hover:text-black transition duration-300">
//               Contact Me
//             </button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5 }}
//             className="flex gap-10 mt-10"
//           >
//             {[
//               { num: "12+", label: "Projects" },
//               { num: "3+", label: "Years Exp." },
//               { num: "8+", label: "Clients" },
//             ].map((s, i) => (
//               <div key={i} className="text-center">
//                 <div className="text-cyan-400 text-xl font-black">{s.num}</div>
//                 <div className="text-gray-500 text-xs mt-1">{s.label}</div>
//               </div>
//             ))}
//           </motion.div>

//         </div>

//         {/* RIGHT — photo */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="flex flex-col items-center"
//         >
//           <PhotoFrame />
//         </motion.div>

//       </div>

//       {/* AI Assistant — bottom right, not overlapping photo */}
//       <div className="absolute bottom-6 right-6 z-20">
//         <AIAssistant />
//       </div>

//     </div>
//   );
// }




// import Navbar from "./components/Navbar";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import Skills from "./sections/Skills";
// import Contact from "./sections/Contact";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div className="bg-[#050816]">
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Skills />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }







// import Navbar from "./components/Navbar";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import Skills from "./sections/Skills";
// import Contact from "./sections/Contact";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div style={{ background: "#000", minHeight: "100vh" }}>
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Skills />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }










import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#050f05", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}



// git add .
// git commit -m "remove deprecated packages"
// git push
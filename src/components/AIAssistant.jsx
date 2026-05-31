import { motion } from "framer-motion";

export default function AIAssistant() {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="
      w-[260px]
      p-5
      rounded-3xl
      backdrop-blur-xl
      bg-black/40
      border
      border-cyan-400/20
      shadow-[0_0_30px_rgba(0,255,255,0.15)]
      text-white
      "
    >

      {/* Top */}
      <div className="flex items-center gap-3 mb-4">

        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>

        <h2 className="text-cyan-400 text-sm tracking-[0.2em] font-bold">
          AI ONLINE
        </h2>

      </div>

      {/* Text */}
      <p className="text-gray-300 text-sm leading-7">
        Ask me about projects,
        MERN stack, AI systems,
        skills, and experience.
      </p>

      {/* Button */}
      <button
        className="
        mt-5
        w-full
        py-3
        rounded-xl
        bg-cyan-400
        text-black
        font-bold
        hover:scale-105
        hover:shadow-[0_0_20px_cyan]
        transition
        "
      >
        Open AI
      </button>

    </motion.div>
  );
}
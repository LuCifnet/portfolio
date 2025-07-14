"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";

const stats = [
  { label: "Years of experience", value: 12 },
  { label: "Projects completed", value: 26 },
  { label: "Technologies mastered", value: 8 },
  { label: "Code commits", value: 10 },
];

export default function Home() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCounts((prev) =>
          prev.map((val, idx) =>
            val < stats[idx].value ? val + 1 : stats[idx].value
          )
        );
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-screen min-h-screen relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/images/main-bg.webp)" }}
    >
      <Navbar />

      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-cyan-600 to-purple-700 opacity-25 animate-gradient-x pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md pointer-events-none" />

      {/* Hero section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 flex flex-col md:flex-row items-center justify-center gap-28 min-h-[80vh]">
        {/* Text */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 max-w-xl pr-16 text-center md:text-left"
        >
          <h1 className="text-[50px] md:text-[50px] font-extrabold leading-tight text-white select-text">
            Hi, I’m{" "}
            <span className="text-[90px] md:text-[70px] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 leading-tight inline-block">
              <TypeAnimation
                sequence={[
                  "Kapil Rokaya", // type text
                  3000,           // wait after typing
                  "",             // delete
                  800             // wait before retyping
                ]}
                speed={30}        // slower typing speed
                repeat={Infinity}
                cursor={true}
                style={{ display: "inline-block" }}
              />

            </span>
            <br />
            <span className="text-white text-[22px] md:text-[28px] font-poppins font-medium tracking-wide">
              Security Enthusiast & Web Developer
            </span>
          </h1>

          <p className="text-gray-300 text-[18px] md:text-[20px] leading-relaxed font-poppins max-w-lg mx-auto md:mx-0">
            I build secure, scalable web applications focused on cybersecurity and user experience,
            combining creativity with strong technical expertise.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start mt-6 gap-5">
            {/* GitHub */}
            <a
              href="https://github.com/kapilrokaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                  3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 
                  1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 
                  2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 
                  0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                  0 0 1.005-.322 3.3 1.23a11.52 11.52 0 
                  013.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 
                  3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                  1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
                  5.92.42.36.81 1.096.81 2.22 0 1.606-.015 
                  2.896-.015 3.286 0 .315.21.69.825.57C20.565 
                  22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/kapilrokaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 
                  2.239-5 5v14c0 2.761 2.239 5 5 
                  5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 
                  19h-3v-10h3v10zm-1.5-11.268c-.966 
                  0-1.75-.784-1.75-1.75s.784-1.75 
                  1.75-1.75 1.75.784 1.75 1.75-.783 
                  1.75-1.75 1.75zm13.5 
                  11.268h-3v-5.604c0-3.368-4-3.113-4 
                  0v5.604h-3v-10h3v1.528c1.396-2.586 
                  7-2.777 7 2.476v5.996z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/kapilrokaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 
                01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 
                1.195a4.916 4.916 0 00-8.384 4.482c-4.083-.195-7.699-2.158-10.126-5.127a4.822 
                4.822 0 00-.664 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 
                0 01-2.228-.616c-.054 2.385 1.675 4.624 4.15 
                5.118a4.935 4.935 0 01-2.224.084 4.93 4.93 0 004.604 
                3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 
                2.212c9.058 0 14.01-7.513 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 
                10.012 0 0024 4.557z" />
              </svg>
            </a>
          </div>
        </motion.section>

        {/* Profile image with tilt */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, perspective: 900 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="relative w-[320px] md:w-[450px] h-[420px] md:h-[600px] cursor-pointer"
        >
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-dotted border-purple-400 shadow-lg"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-6 rounded-full border-2 border-dotted border-cyan-400 shadow-md"
            animate={{ rotate: [360, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
          <Image
            src="/images/kapil.png"
            alt="Kapil Rokaya"
            width={450}
            height={600}
            className="relative rounded-full object-cover shadow-xl"
            sizes="(max-width: 768px) 320px, 450px"
            priority
          />
        </motion.div>
      </div>

      {/* Counters */}
      <div
        ref={statsRef}
        className="relative z-10 mt-10 pb-20 px-6 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((item, i) => (
          <div key={item.label}>
            <motion.h3
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 * i }}
            >
              {counts[i]}
            </motion.h3>
            <p className="text-gray-300 text-lg font-medium mt-2">{item.label}</p>
          </div>
        ))}
      </div>

      {/* CSS for background animation */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </motion.main>
  );
}

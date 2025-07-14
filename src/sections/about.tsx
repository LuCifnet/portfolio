"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const counters = [
  { label: "YEARS OF EXPERIENCE", value: 10 },
  { label: "SATISFIED CLIENTS", value: 250 },
  { label: "FINISHED PROJECTS", value: 650 },
  { label: "AWARDS WINNING", value: 8 },
];

const skills = [
  "Web Development",
  "UI/UX Design",
  "Penetration Testing",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
];

const experienceList = [
  "Freelance Developer",
  "Startup Consultant",
  "Remote Web Engineer",
];

const credentialsList = [
  "Bachelor’s in CS",
  "Certified Ethical Hacker",
  "Frontend Mentor (Top 5%)",
];

// Variants for container and list items for staggered animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Captivating stories <br className="hidden md:block" />
            birth magnificent designs.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300">
            10 years ago, I began freelancing as a developer. Since then, I've done
            remote work for agencies, consulted for startups, and collaborated on digital
            products for business and consumer use.
          </p>
        </motion.div>

        {/* Counters */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {counters.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                {item.value}+
              </h3>
              <p className="mt-2 text-sm font-medium uppercase text-gray-600 dark:text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills, Experience & Credentials */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md mx-auto md:mx-0"
          >
            <Image
              src="/images/kapil.png"
              alt="Kapil Rokaya"
              width={500}
              height={600}
              className="rounded-3xl object-cover shadow-xl border border-purple-500 w-full h-auto"
              priority
            />
          </motion.div>

          {/* Right: Skills, Experience & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Skills */}
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Skills</h3>
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  className="px-4 py-2 text-sm bg-purple-600/10 border border-purple-400 text-purple-300 dark:text-purple-200 rounded-full backdrop-blur-sm cursor-default select-none"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.3)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

            {/* Experience & Credentials */}
            <div className="grid grid-cols-2 gap-6">
              {/* Experience */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-2 text-cyan-400">Experience</h4>
                <motion.ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                  {experienceList.map((exp) => (
                    <motion.li
                      key={exp}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, color: "#22d3ee" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer select-none"
                    >
                      {exp}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Credentials */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-2 text-cyan-400">Credentials</h4>
                <motion.ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                  {credentialsList.map((cred) => (
                    <motion.li
                      key={cred}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, color: "#22d3ee" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer select-none"
                    >
                      {cred}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

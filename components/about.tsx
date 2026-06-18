"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a Bachelor of Technology in{" "}
        <span className="font-medium">Computer Science and Cyber Security</span> from Malla Reddy Engineering College,
        I embarked on a journey to become a{" "}
        <span className="font-medium">Machine Learning Engineer</span>. What
        drives me most is the thrill of uncovering insights from data and
        building intelligent, automated solutions. My core skill set revolves around{" "}
        <span className="font-medium">
          Python, SQL, Machine Learning, Deep Learning, and Natural Language Processing (NLP)
        </span>{" "}
        allowing me to design AI pipelines and RAG applications. I am also
        familiar with tools and libraries like{" "}
        <span className="font-medium">
          LangChain, Pandas, NumPy, Scikit-learn, Jupyter Notebook, and Git/GitHub
        </span>
        . I am always looking to learn and implement new advancements in AI. I am currently seeking
        a <span className="font-medium">full-time position</span> as a
        Machine Learning Engineer.
      </p>

      <p>
        <span className="italic">My objective</span> is to apply my skills, gain industry experience, and contribute to real-world AI solutions that make a meaningful impact.
      </p>
    </motion.section>
  );
}

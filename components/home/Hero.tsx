"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export default function Hero() {
  return (
    <section className="snap-start min-h-[calc(100vh-64px)]">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto text-pretty"
        >
          With match right, you can{" "}
          <Highlight className="text-black dark:text-white">
            Get Hired Faster with Smart Resume Matching.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </section>
  );
}

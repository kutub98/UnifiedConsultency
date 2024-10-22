"use client";
import { motion, useScroll } from "framer-motion";
import React from "react";
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="   w-full max-w-7xl mx-auto z-[999]  h-1 bg-red-900"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
};

export default ScrollProgressBar;

import { Button } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
  const variants = {
    hidden: (direction) => ({
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.9 }
    }
  };

  return (
    <div className="w-full overflow-hidden lg:px-8 px-8 sm:px-8 gap-6 max-w-7xl mx-auto grid grid-cols-1 my-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
      {/* textPart */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        custom="left"
        variants={variants}
        viewport={{ once: false }} // Animation will trigger every time it comes into view
      >
        <h1 className="text-3xl font-bold text-[#741212] my-2">About Us</h1>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          odit voluptatem accusamus quod repudiandae numquam commodi, distinctio
          quisquam saepe dolores libero accusantium aut delectus, qui doloremque
          soluta quidem, temporibus architecto vitae a aliquid ab sit maxime
          quibusdam. Fuga inventore et deleniti nesciunt ipsum eveniet repellat
          velit nobis eaque quisquam tempore voluptas repellendus dolorum,{" "}
        </h1>
        <Button className="bg-[#741212] text-white font-semibold px-4 py-3 my-3">
          Know more
        </Button>
      </motion.div>
      {/* video */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        custom="right"
        variants={variants}
        viewport={{ once: false }} // Animation will trigger every time it comes into view
      >
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/9Om0FMBz1yU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  );
};

export default About;

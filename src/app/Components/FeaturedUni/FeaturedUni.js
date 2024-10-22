import Image from "next/image";
import React from "react";

import { Carousel } from "@material-tailwind/react";

import uni2 from "@/app/Assets/du.png";

import { motion } from "framer-motion";
const FeaturedUni = () => {
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
    <div className="relative  w-full  h-[400px] FeaturedBg my-14">
      {/* <div className=" absolute top-0 left-0 w-full h-full  bg-gradient-to-tr from-transparent via-slate-100 to-[#76000D] ">
        
      </div> */}
      <div className="w-full h-full text-center bg-[#e9f0e9d7] py-10 px-8 border-2">
        <motion.h1
          initial="hidden"
          whileInView={"visible"}
          custom="left"
          variants={variants}
          viewport={{ once: false }}
          className="lg:text-4xl md:text-3xl sm:text-3xl text-2xl PrimaryColor my-4 font-bold text-center"
        >
          Featured University
        </motion.h1>
        <div className="lg:max-w-5xl w-full mx-auto h-auto lg:h-72 my-10">
          <Carousel
            autoplay={true}
            autoplayDelay={4000}
            loop={true}
            className=""
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2  gap-4">
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni2}
                  height={100}
                  width={100}
                  alt="uni2"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base mt-2">Dhaka University</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni2}
                  height={100}
                  width={100}
                  alt="uni2"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base mt-2">Dhaka University</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni2}
                  height={100}
                  width={100}
                  alt="uni2"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base mt-2">Dhaka University</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni2}
                  height={100}
                  width={100}
                  alt="uni2"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base mt-2">Dhaka University</h1>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2  gap-4">
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni2}
                  height={100}
                  width={100}
                  alt="uni2"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base mt-2">Dhaka University</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni2}
                  height={100}
                  width={100}
                  alt="uni2"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base mt-2">Dhaka University</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni2}
                  height={100}
                  width={100}
                  alt="uni2"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base mt-2">Dhaka University</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni2}
                  height={100}
                  width={100}
                  alt="uni2"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base mt-2">Dhaka University</h1>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeaturedUni;

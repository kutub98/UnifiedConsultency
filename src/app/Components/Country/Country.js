import Image from "next/image";
import React from "react";

import { Carousel } from "@material-tailwind/react";
import uni1 from "@/app/Assets/ctg.png";
import uni2 from "@/app/Assets/du.png";
import uni3 from "@/app/Assets/bg.png";
const Country = () => {
  return (
    <div className="relative  w-full  h-[400px] countryBg my-14">
      <div className="w-full h-full text-center bg-[#e9f0e9d7] py-6 px-8 border-2">
        <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-2xl PrimaryColor my-2 font-bold text-center">
          Country We Covered
        </h1>
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
                  src={uni3}
                  height={300}
                  width={300}
                  alt="uni3"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base ">Bangladesh</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni3}
                  height={300}
                  width={300}
                  alt="uni3"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base ">Bangladesh</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni3}
                  height={300}
                  width={300}
                  alt="uni3"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base ">Bangladesh</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni3}
                  height={300}
                  width={300}
                  alt="uni3"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base ">Bangladesh</h1>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2  gap-4">
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni3}
                  height={300}
                  width={300}
                  alt="uni3"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base ">Bangladesh</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni3}
                  height={300}
                  width={300}
                  alt="uni3"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base ">Bangladesh</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni3}
                  height={300}
                  width={300}
                  alt="uni3"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base ">Bangladesh</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={uni3}
                  height={300}
                  width={300}
                  alt="uni2"
                  className="max-w-full h-auto"
                />
                <h1 className="text-sm lg:text-base ">Bangladesh</h1>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Country;

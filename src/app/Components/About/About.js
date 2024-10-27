import { Button } from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // State to track if video is playing

  const handlePlay = () => {
    if (videoRef.current) {
      // Request fullscreen mode on the video element
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        // For Firefox
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        // For Chrome, Safari, and Opera
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        // For IE/Edge
        videoRef.current.msRequestFullscreen();
      }

      videoRef.current.play(); // Play the video
      setIsPlaying(true); // Hide the play button overlay
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false); // Show the play button overlay when video ends
  };

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

  const videoSrc = "/video.mp4"; // Path from the public folder
  const thumbnailSrc = "/thumbnil.png"; // Path from the public folder for the thumbnail image

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
          velit nobis eaque quisquam tempore voluptas repellendus dolorum.
        </h1>
        <Button className="bg-[#741212] text-white font-semibold px-4 py-3 my-3">
          Know more
        </Button>
      </motion.div>

      {/* video */}
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        custom="right"
        variants={variants}
        viewport={{ once: false }} // Animation will trigger every time it comes into view
      >
        <video
          ref={videoRef}
          controls
          preload="auto"
          width="100%"
          height={375}
          loop={false}
          muted
          aria-label="Video player"
          poster={thumbnailSrc} // Thumbnail image
          onEnded={handleVideoEnd} // Event listener for video end
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        {!isPlaying && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-30 flex justify-center items-center cursor-pointer"
            onClick={handlePlay}
          >
            <FaPlay className="h-32 w-32 text-white" />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default About;

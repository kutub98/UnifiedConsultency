import { Button } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  const variant = {
    hidden: (direction) => ({
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  return (
    <div className="w-full overflow-hidden bg-orange-50 py-8 rounded lg:px-8 px-8 sm:px-8 gap-6 max-w-7xl mx-auto grid grid-cols-1 my-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center">
      {/* textPart */}
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        custom={"left"}
        viewport={{ once: false }}
        variants={variant}
        className="lg:p-12 p-6 "
      >
        <h1 className="text-3xl font-bold text-[#741212] my-2">Contact Us</h1>
        <h1 className="flex space-x-2 my-1">
          <label>Phone:</label>
          <span>+0194747474</span>
        </h1>
        <h1 className="flex space-x-2 my-1">
          <label>Email:</label>
          <span>unified@gmail.com</span>
        </h1>
        <h1 className="flex space-x-2 my-1">
          <label>WhatsApp:</label>
          <span>unified@gmail.com</span>
        </h1>
      </motion.div>
      {/* video  */}
      <motion.div
        initial="hidden"
        whileInView={"visible"}
        custom={"right"}
        variants={variant}
        viewport={{
          once: false
          
        }}
      >
        <form className="border border-[#7c01011e] lg:p-8 p-3 shadow-md">
          <div className="flex space-x-3 items-center my-3 ">
            <label>Name</label>
            <input
              name="name"
              placeholder="name"
              className="px-2 py-2 w-full border border-black rounded "
            />
          </div>
          <div className="flex space-x-3 items-center my-3">
            <label>Email</label>
            <input
              name="email"
              placeholder="Email"
              className="px-2 py-2 w-full border border-black rounded "
            />
          </div>
          <div className="flex justify-center">
            <Button className="bg-red-900 px-5 py-3  text-xl " type="submit">
              Submit
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;

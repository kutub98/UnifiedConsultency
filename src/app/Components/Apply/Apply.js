import { Button } from "@material-tailwind/react";
import React from "react";

const Apply = () => {
  return (
    <div className="my-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center bg-red-900 text-white px-6 py-4 lg:py-8 lg:px-10 rounded">
        <h1 className="text-2xl lg:text-4xl font-medium mb-4 lg:mb-0 text-center lg:text-left">
          Ready to Chase Your Dream?
        </h1>
        <Button className="bg-white text-red-800 font-medium px-6 py-4 font-medium">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default Apply;

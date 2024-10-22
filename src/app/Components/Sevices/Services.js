import { FaUserDoctor } from "react-icons/fa6";
import { GrVisa } from "react-icons/gr";
import { PiExam } from "react-icons/pi";
import {
  Button,
  CardBody,
  CardFooter,
  Carousel,
  Typography
} from "@material-tailwind/react";
import React from "react";

const services = [
  {
    title: "Career Counselling",
    des: "Impedit dolorem ipsum suscipit reprehenderit maxime quidem architecto voluptatem veniam sequi dicta.",
    icon: <FaUserDoctor className="mb-4 h-12 w-12" />
  },
  {
    title: "Visa Consultancy",
    des: "Impedit dolorem ipsum suscipit reprehenderit maxime quidem architecto voluptatem veniam sequi dicta.",
    icon: <GrVisa className="mb-4 h-12 w-12" />
  },
  {
    title: "University Admissions",
    des: "Impedit dolorem ipsum suscipit reprehenderit maxime quidem architecto voluptatem veniam sequi dicta.",
    icon: <PiExam className="mb-4 h-12 w-12" />
  },
  {
    title: "Career Counselling",
    des: "Impedit dolorem ipsum suscipit reprehenderit maxime quidem architecto voluptatem veniam sequi dicta.",
    icon: <FaUserDoctor className="mb-4 h-12 w-12" />
  },
  {
    title: "Visa Consultancy",
    des: "Impedit dolorem ipsum suscipit reprehenderit maxime quidem architecto voluptatem veniam sequi dicta.",
    icon: <GrVisa className="mb-4 h-12 w-12" />
  },
  {
    title: "University Admissions",
    des: "Impedit dolorem ipsum suscipit reprehenderit maxime quidem architecto voluptatem veniam sequi dicta.",
    icon: <PiExam className="mb-4 h-12 w-12" />
  },
  {
    title: "Career Counselling",
    des: "Impedit dolorem ipsum suscipit reprehenderit maxime quidem architecto voluptatem veniam sequi dicta.",
    icon: <FaUserDoctor className="mb-4 h-12 w-12" />
  },
  {
    title: "Visa Consultancy",
    des: "Impedit dolorem ipsum suscipit reprehenderit maxime quidem architecto voluptatem veniam sequi dicta.",
    icon: <GrVisa className="mb-4 h-12 w-12" />
  }
];

const Services = () => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-[#e0b64313] py-10">
      {/* textPart */}
      <div className="w-full max-w-5xl mx-auto text-center px-8">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#741212] my-2">
          Our Services
        </h1>
        <h1 className="max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          odit voluptatem accusamus quod repudiandae numquam commodi,
        </h1>
      </div>

      {/* Grid for large screens */}
      <div className="hidden lg:grid md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center px-8 my-14">
        {services.map((item, ind) => (
          <div
            className="text-left hover:bg-[#8a012e] hover:text-white transition-all shadow-md rounded bg-white"
            key={ind}
          >
            <CardBody>
              {item.icon}
              <Typography variant="h6" className="mb-2">
                {item.title}
              </Typography>
              <Typography>{item.des}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                Learn More
              </Button>
            </CardFooter>
          </div>
        ))}
      </div>

      {/* Carousel for small screens */}
      <div className="lg:hidden  md:hidden block">
        <Carousel autoplay={true} autoplayDelay={4000} loop={true}>
          {services.map((item, ind) => (
            <div
              className="text-left hover:bg-[#8a012e] hover:text-white transition-all shadow-md rounded bg-white"
              key={ind}
            >
              <CardBody>
                {item.icon}
                <Typography variant="h6" className="mb-2">
                  {item.title}
                </Typography>
                <Typography>{item.des}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  Learn More
                </Button>
              </CardFooter>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
import { StarIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Carousel,
  Typography
} from "@material-tailwind/react";

import React from "react";

const services = [
  {
    name: "Tanzim Sakib",
    des: "Unified Consultancy is the best in Chattogram",
    title: "CEO of GMIT"
  },
  {
    name: "Visa Consultancy",
    des: "Unified Consultancy is the best in Chattogram",
    title: "CEO of GMIT"
  },
  {
    name: "University Admissions",
    des: "Unified Consultancy is the best in Chattogram",
    title: "CEO of GMIT"
  },
  {
    name: "Tanzim Sakib",
    des: "Unified Consultancy is the best in Chattogram",
    title: "CEO of GMIT"
  },
  {
    name: "Visa Consultancy",
    des: "Unified Consultancy is the best in Chattogram",
    title: "CEO of GMIT"
  },
  {
    name: "University Admissions",
    des: "Unified Consultancy is the best in Chattogram",
    title: "CEO of GMIT"
  },
  {
    name: "Tanzim Sakib",
    des: "Unified Consultancy is the best in Chattogram",
    title: "CEO of GMIT"
  },
  {
    name: "Visa Consultancy",
    des: "Unified Consultancy is the best in Chattogram",
    title: "CEO of GMIT"
  }
];

const Testimonial = () => {
  return (
    <div className="w-full h-full my-20 bg-[#e9f0e9d7] py-6 p-8 border-2">
      <div className="w-full h-full text-center bg-[#e9f0e9d7] py-6 px-8 border-2">
        <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-2xl PrimaryColor  font-bold text-center">
          What clients say
        </h1>
      </div>

      {/* Carousel */}

      <Carousel
        autoplay={true}
        autoplayDelay={4000}
        loop={true}
        className="bg-none  mx-auto"
      >
        {services.map((item, ind) => (
          <Card
            color="transparent"
            shadow={false}
            className="w-full m-8 p-8 bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  border-2 max-w-[36rem] mx-auto"
            key={ind}
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar
                size="lg"
                variant="circular"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="avatar"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    {item.name}
                  </Typography>
                </div>
                <Typography color="blue-gray">{item.title}</Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>&quot;{item.des}&quot;</Typography>
            </CardBody>
            <div className=" flex justify-center">
              <div className="flex items-center gap-1">
                {/* Add color and size to the StarIcon */}
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;

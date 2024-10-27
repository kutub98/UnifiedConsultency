"use client";
import React from "react";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/app/Assets/logo.jpg";

function NavList() {
  return (
    <ul
      className={`flex flex-col text-white w-full lg:text-[#76000d] lg:bg-white PrimaryBg font-semibold gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 p-3 rounded  items-center`}
    >
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-black transition-colors font-"
        >
          Home
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-black transition-colors font-"
        >
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-black transition-colors font-"
        >
          Services
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-black transition-colors font-"
        >
          Client Review
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-black transition-colors font-"
        >
          Testimonial
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <a
          href="#"
          className="flex items-center hover:text-black transition-colors font-"
        >
          <Button className="bg-red-700 px-6 py-4 font-medium md:block lg:block  hidden">
            Apply Now
          </Button>
        </a>
      </Typography>
    </ul>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto w-full py-1">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <Image src={logo} height={40} width={180} alt="logo" />
        </Typography>
        <div className="hidden lg:block px-0">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 PrimaryColor" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 PrimaryColor " strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};
export default NavBar;

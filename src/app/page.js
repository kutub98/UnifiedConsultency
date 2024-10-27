"use client";

import About from "./Components/About/About";
import Apply from "./Components/Apply/Apply";
import Contact from "./Components/Contact/Contact";
import Country from "./Components/Country/Country";
import FeaturedUni from "./Components/FeaturedUni/FeaturedUni";
import HeroSection from "./Components/HeroSection/HeroSection";
import Services from "./Components/Sevices/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Video from "./Components/Video/Video";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Video />
      <About />
      <div className="bg-black w-full h-full">
        <FeaturedUni />
      </div>
      <Services />
      <Country />
      <Testimonial />
      <Contact />
      <Apply />
    </>
  );
}

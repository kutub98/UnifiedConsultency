import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import slide1 from "@/app/Assets/slide1.jpg";
import slide2 from "@/app/Assets/slide1.jpg";
import slide3 from "@/app/Assets/slide1.jpg";
const HeroSection = () => {
  return (
    <Carousel className="" loop={true} autoplay={true} autoplayDelay={4000}>
      <Image
        src={slide1}
        height={300}
        width={500}
        layout="responsive"
        alt="slide1"
      />
      <Image
        src={slide2}
        height={300}
        width={500}
        layout="responsive"
        alt="slide1"
      />
      <Image
        src={slide3}
        height={300}
        width={500}
        layout="responsive"
        alt="slide1"
      />
    </Carousel>
  );
};

export default HeroSection;

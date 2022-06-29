import homeCarouselImages from "../../homeCarouselImages";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const HomeCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = homeCarouselImages.length;

  const handlePrevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleNextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <main className="flex justify-center w-full overflow-hidden relative pt-[4.5rem]">
      <div className="absolute w-[90%] md:w-[85%] xl:w-[75%] mx-auto bottom-4 z-10 flex justify-end mr-10 lg:mr-0 lg:justify-center items-center gap-2 opacity-80">
        <div
          onClick={handlePrevImage}
          className="bg-lightGreen text-green hover:text-lightGreen hover:bg-green rounded py-1 px-2 md:py-2 md:px-4 cursor-pointer group"
        >
          <AiOutlineArrowLeft className="text-xl md:text-2xl group-hover:text-primary" />
        </div>
        <div
          onClick={handleNextImage}
          className="bg-lightGreen text-green hover:text-lightGreen hover:bg-green rounded py-1 px-2 md:py-2 md:px-4 cursor-pointer group"
        >
          <AiOutlineArrowRight className="text-xl md:text-2xl group-hover:text-primary" />
        </div>
      </div>
      {homeCarouselImages.map((image, idx) => {
        return (
          <div key={idx}>
            {current === idx && (
              <Image
                className="w-full select-none pointer-events-none"
                src={image}
                alt="product"
              />
            )}
          </div>
        );
      })}
      <div className="absolute bottom-12 md:top-1/2 md:-translate-y-1/2 w-[90%] md:w-[85%] xl:w-[75%] mx-auto space-y-6 xl:space-y-10">
        <h1 className="font-bold text-xl md:text-4xl lg:text-5xl xl:text-6xl text-lightWhite w-1/2">
          You Will Find The Best Courses Here!
        </h1>
        <p className="hidden sm:block sm:text-sm md:text-[1rem] lg:text-lg w-1/2 text-lightGreen opacity-90">
          Curious to learn something new? Or you want to shape your career
          future?
        </p>
        <Link href="/courses">
          <a className="bg-lightGreen inline-block text-green text-xs md:text-sm lg:text-lg xl:text-xl px-4 py-2 rounded hover:bg-green hover:text-lightGreen">
            Get Started
          </a>
        </Link>
      </div>
    </main>
  );
};

export default HomeCarousel;

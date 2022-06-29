import sponsorImg1 from "../../public/assets/partners/partner-logo-1.png";
import sponsorImg2 from "../../public/assets/partners/partner-logo-2.png";
import sponsorImg3 from "../../public/assets/partners/partner-logo-3.png";
import sponsorImg4 from "../../public/assets/partners/partner-logo-4.png";
import sponsorImg5 from "../../public/assets/partners/partner-logo-5.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const Partners = () => {
  function slideLeft() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  }

  function slideRight() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  }
  return (
    <section className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto duration-300 ease-in my-20">
      <div className="flex items-center">
        <div
          id="slider"
          className="relative overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth h-full w-full space-x-10"
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className="inline-block text-center cursor-pointer rounded relative group overflow-hidden"
            >
              <div className="flex items-center justify-center relative w-[150px] h-[150px]">
                <Image
                  layout="intrinsic"
                  objectFit="cover"
                  src={image}
                  alt="our partners"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center text-2xl my-10 gap-2">
        <div
          onClick={slideLeft}
          className="bg-green py-2 px-4 rounded text-lightGreen hover:bg-lightGreen hover:text-green cursor-pointer"
        >
          <AiOutlineArrowLeft />
        </div>
        <div
          onClick={slideRight}
          className="bg-green py-2 px-4 rounded text-lightGreen hover:bg-lightGreen hover:text-green cursor-pointer"
        >
          <AiOutlineArrowRight />
        </div>
      </div>
    </section>
  );
};

const images = [
  sponsorImg1,
  sponsorImg2,
  sponsorImg3,
  sponsorImg4,
  sponsorImg5,
  sponsorImg1,
  sponsorImg2,
  sponsorImg3,
  sponsorImg4,
  sponsorImg5,
];

export default Partners;

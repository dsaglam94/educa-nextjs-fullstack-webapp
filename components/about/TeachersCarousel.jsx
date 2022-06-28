import teachersData from "../../teachersData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const TeachersCarousel = ({ carouselID }) => {
  function slideLeft() {
    let slider = document.getElementById("slider" + carouselID);
    slider.scrollLeft = slider.scrollLeft - 300;
  }

  function slideRight() {
    let slider = document.getElementById("slider" + carouselID);
    slider.scrollLeft = slider.scrollLeft + 300;
  }

  return (
    <section className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto duration-300 ease-in my-10">
      <h2 className="text-2xl font-bold py-10 md:text-3xl lg:text-4xl text-center">
        Expert Teachers
      </h2>
      <div className="flex items-center">
        <div
          id={"slider" + carouselID}
          className="relative overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth h-full w-full space-x-10"
        >
          {teachersData.map((item, idx) => (
            <div
              key={idx}
              className="w-[350px] inline-block text-center cursor-pointer rounded relative group overflow-hidden"
            >
              <div>
                <div className="relative bg-lightGreen group-hover:bg-green pt-10 duration-150 ease-in">
                  <Image
                    width="300"
                    height="350"
                    objectFit="cover"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="flex items-center justify-between py-6">
                  <h3 className="text-[1rem] font-bold">{item.name}</h3>
                  <h4 className="text-sm text-lightBlack opacity-80">
                    {item.work_title}
                  </h4>
                </div>
              </div>
              <div className="absolute left-0 -bottom-[110%] bg-lightBlack w-full p-6 whitespace-normal space-y-6 group-hover:bottom-0 duration-200 ease-in">
                <div className="flex items-center justify-between text-lightWhite">
                  <a
                    aria-label="facebook link"
                    href={item.social_links["facebook"]}
                    className="hover:text-green duration-150 ease-in text-4xl"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    aria-label="twitter link"
                    href={item.social_links["twitter"]}
                    className="hover:text-green duration-150 ease-in text-4xl"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    aria-label="linkedin link"
                    href={item.social_links["linkedin"]}
                    className="hover:text-green duration-150 ease-in text-4xl"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    aria-label="instagram link"
                    href={item.social_links["instagram"]}
                    className="hover:text-green duration-150 ease-in text-4xl"
                  >
                    <FaInstagram />
                  </a>
                </div>
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

export default TeachersCarousel;

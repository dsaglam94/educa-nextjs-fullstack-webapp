import popularCoursesData from "../../popularCoursesData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const PopularCourses = () => {
  function slideLeft() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  }

  function slideRight() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  }

  return (
    <section className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto duration-300 ease-in my-10">
      <h2 className="text-2xl font-bold py-10 md:text-3xl lg:text-4xl text-center">
        Our Popular Courses
      </h2>
      <div className="flex items-center">
        <div
          id="slider"
          className="relative overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth h-full w-full space-x-6"
        >
          {popularCoursesData.map((item, idx) => (
            <div
              key={idx}
              className="w-[300px] inline-block text-center space-y-4 cursor-pointer bg-lightGreen p-10 rounded border-2 border-green relative group overflow-hidden"
            >
              <Image
                width="300"
                height="300"
                src={item.image}
                alt={item.title}
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <div className="absolute left-0 -bottom-[110%] bg-green w-full p-6 whitespace-normal space-y-6 group-hover:bottom-0 duration-150 ease-in">
                <h3 className="text-lg font-bold text-lightGreen">
                  {item.title}
                </h3>
                <p className="text-[1rem] text-lightGreen opacity-90">
                  {item.description}
                </p>
                <Link href="/">
                  <a className="inline-block text-lightGreen border-2 px-6 py-2 rounded hover:bg-lightGreen hover:text-green hover:border-transparent">
                    Read More
                  </a>
                </Link>
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

export default PopularCourses;

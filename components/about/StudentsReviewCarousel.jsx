import { useState, useEffect } from "react";
import studentsReviewsData from "../../studentsReviewsData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiMessageAdd } from "react-icons/bi";
import Image from "next/image";
import ReviewPost from "./ReviewPost";
import { useSession } from "next-auth/react";

const StudentsReviewCarousel = ({ carouselID }) => {
  const { data: session } = useSession();
  const [isReviewFormOpen, setReviewFormOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  function slideLeft() {
    let slider = document.getElementById("slider" + carouselID);
    slider.scrollLeft = slider.scrollLeft - 300;
  }

  function slideRight() {
    let slider = document.getElementById("slider" + carouselID);
    slider.scrollLeft = slider.scrollLeft + 300;
  }

  const handleReviewForm = () => {
    setReviewFormOpen((prevFormValue) => !prevFormValue);
  };

  const replaceRatingWithStars = (num) => {
    return "⭐️".repeat(Number(num));
  };

  const fetchReviews = async () => {
    const data = await fetch("/api/reviews");
    const response = await data.json();
    console.log(response.data);
    setReviews(response.data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto duration-300 ease-in my-10">
      <div className="flex items-center justify-center gap-4">
        <h2 className="text-2xl font-bold py-10 md:text-3xl lg:text-4xl text-center">
          Our Students Reviews
        </h2>
        <BiMessageAdd
          onClick={handleReviewForm}
          className={
            session
              ? "text-4xl text-green cursor-pointer hover:scale-110"
              : "hidden"
          }
        />
      </div>
      <ReviewPost isReviewFormOpen={isReviewFormOpen} />
      <div className="flex items-center">
        <div
          id={"slider" + carouselID}
          className="relative overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth h-full w-full space-x-10"
        >
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="w-[400px] inline-block text-center rounded relative group overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center gap-10">
                <div className="w-full whitespace-normal bg-lightGreen p-6 border-2 border-green rounded relative">
                  <p className="text-lightBlack opacity-80 leading-7">
                    {item.review}
                  </p>
                  <div className="absolute w-7 h-7 -bottom-4 left-1/2 -translate-x-1/2 bg-lightGreen border-r-2 border-b-2 border-green rotate-45"></div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="relative h-28 w-full">
                    <Image
                      className="rounded-full"
                      layout="fill"
                      objectFit="cover"
                      src={item.profile_picture}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-between gap-2">
                    <h3 className="text-[1rem] font-bold">{item.name}</h3>
                    <h4 className="text-sm text-lightBlack opacity-80">
                      {replaceRatingWithStars(item.rating)}
                    </h4>
                  </div>
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

export default StudentsReviewCarousel;

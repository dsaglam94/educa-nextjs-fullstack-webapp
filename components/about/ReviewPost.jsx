import { useSession } from "next-auth/react";
import { useState } from "react";
import { Router } from "next/router";

const ReviewPost = ({ isReviewFormOpen }) => {
  const { data: session } = useSession();
  const [reviewMessage, setReviewMessage] = useState("");
  const [rating, setRating] = useState("");

  const fetcher = async (e) => {
    e.preventDefault();
    const { name, image } = session?.user;
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          review: reviewMessage,
          rating: rating,
          profile_picture: image,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        Router.reload(window.location.pathname);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={
        isReviewFormOpen
          ? "w-full border-2 border-green p-5 rounded mb-10"
          : "hidden"
      }
    >
      <form onSubmit={fetcher} className="flex flex-col items-start gap-4">
        <label className="font-bold" htmlFor="review">
          Enter Your Review
        </label>
        <textarea
          onChange={(e) => setReviewMessage(e.target.value)}
          className="border-2 border-green rounded px-2 py-4 w-full"
          name="review"
          id="review"
          cols="30"
          rows="10"
          placeholder="Write your awesome review about our company"
        ></textarea>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-between gap-4">
            <label className="font-bold whitespace-nowrap" htmlFor="rating">
              Rate Our Service
            </label>
            <input
              onChange={(e) => setRating(e.target.value)}
              className="border-2 border-green px-2 py-1 rounded"
              type="number"
              max="5"
              min="1"
              required
            />
          </div>
          <button
            className="w-full md:w-1/3 bg-green border-2 border-transparent py-4 rounded text-lightGreen text-lg hover:border-green hover:bg-transparent hover:text-green duration-150 ease-in"
            type="submit"
          >
            Save Your Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewPost;

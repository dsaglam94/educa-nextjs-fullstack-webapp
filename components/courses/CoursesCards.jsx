import { AiOutlineClockCircle } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const CoursesCards = ({ item, idx }) => {
  return (
    <div key={idx} className="rounded overflow-hidden group">
      <div className="relative w-full h-[250px]">
        <Image
          className="group-hover:scale-110 duration-300 ease-in"
          layout="fill"
          objectFit="cover"
          src={item.image}
          alt={item.label}
        />
        <div className="absolute top-4 left-4 bg-lightWhite px-4 py-2 rounded">
          <span className="font-bold uppercase text-xs tracking-wider">
            {item.label}
          </span>
        </div>
      </div>
      <div className="text-center border-2 border-green border-t-transparent px-10 py-6">
        <div className="space-y-4 border-b-2 border-green pb-10">
          <h3 className="font-bold text-xl whitespace-nowrap">
            Choose What's Best For You
          </h3>
          <p className="text-sm text-lightBlack opacity-80 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore
            facere voluptatem.
          </p>
          <Link href="/">
            <a className="inline-block px-4 py-2 border-2 border-green rounded hover:bg-green hover:text-lightGreen">
              Read More
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-between pt-10">
          <div className="flex items-center gap-2">
            <BiBook className="text-xl text-green" />
            <span>{item.modules} modules</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineClockCircle className="text-xl text-green" />
            <span>{item.duration} hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCards;

import Image from "next/image";
import aboutCoursesData from "../../aboutCoursesData";

const AboutMain = () => {
  return (
    <main className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto flex items-center justify-between duration-300 ease-in my-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="relative w-full md:w-1/2 xl:w-1/3 bg-lightGreen p-10 rounded flex items-center justify-center">
          <Image
            height="320"
            width="300"
            layout="intrinsic"
            src="/assets/popular-courses/course-1-2.png"
            alt="illustration of two people"
          />
        </div>
        <div className="md:w-1/2 xl:w-2/3 space-y-6 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="font-bold text-2xl md:text-3xl">
              We have the best courses for you!
            </h2>
            <p className="text-sm md:text-[1rem] text-lightBlack opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam
              libero itaque commodi, blanditiis, doloremque quia natus earum
              expedita ad sequi beatae id delectus distinctio. Eligendi
              distinctio ea nulla similique!
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutCoursesData.map((item, idx) => (
              <div className="bg-lightGreen flex flex-col items-center justify-center gap-2 p-10 border-2 border-green rounded">
                <div className="relative w-12 h-14">
                  <Image layout="fill" src={item.image} alt={item.name} />
                </div>
                <h3 className="font-bold text-3xl">{item.numbers}+</h3>
                <span className="text-lightBlack opacity-80 text-sm">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMain;

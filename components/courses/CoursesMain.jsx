import allCoursesData from "../../allCoursesData";
import CoursesCards from "./CoursesCards";

const CoursesMain = () => {
  return (
    <main className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto flex flex-col items-center justify-between duration-300 ease-in my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {allCoursesData.map((item, idx) => (
          <CoursesCards item={item} idx={idx} />
        ))}
      </div>
    </main>
  );
};

export default CoursesMain;

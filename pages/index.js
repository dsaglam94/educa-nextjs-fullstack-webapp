import HomeCarousel from "../components/home/HomeCarousel";
import PopularCourses from "../components/home/PopularCourses";
import PopularSubjects from "../components/home/PopularSubjects";
import Meta from "../components/Meta";

export default function Home() {
  return (
    <>
      <Meta title={"Educa | Homepage"} />
      <HomeCarousel />
      <PopularSubjects />
      <PopularCourses />
    </>
  );
}

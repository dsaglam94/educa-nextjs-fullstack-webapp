import CoursesMain from "../components/courses/CoursesMain";
import Meta from "../components/Meta";
import NavBanner from "../components/NavBanner";

export default function Courses() {
  return (
    <>
      <Meta title={"Educa | Courses"} />
      <NavBanner title="Our Courses" page="Courses" />
      <CoursesMain />
    </>
  );
}

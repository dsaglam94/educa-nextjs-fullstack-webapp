import AboutMain from "../components/about/AboutMain";
import StudentsReviewCarousel from "../components/about/StudentsReviewCarousel";
import TeachersCarousel from "../components/about/TeachersCarousel";
import Meta from "../components/Meta";
import NavBanner from "../components/NavBanner";

export default function About() {
  return (
    <>
      <Meta title={"Educa | About"} />
      <NavBanner title="About Us" page="About" />
      <AboutMain />
      <TeachersCarousel carouselID={1} />
      <StudentsReviewCarousel carouselID={2} />
    </>
  );
}

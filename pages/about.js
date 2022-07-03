import AboutMain from "../components/about/AboutMain";
import StudentsReviewCarousel from "../components/about/StudentsReviewCarousel";
import TeachersCarousel from "../components/about/TeachersCarousel";
import Meta from "../components/Meta";
import NavBanner from "../components/NavBanner";

const About = () => {
  return (
    <>
      <Meta title={"Educa | About"} />
      <NavBanner title="About Us" page="About" />
      <AboutMain />
      <TeachersCarousel carouselID={1} />
      <StudentsReviewCarousel carouselID={2} />
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   console.log(context);
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// };

export default About;

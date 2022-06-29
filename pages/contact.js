import Info from "../components/contact/Info";
import Meta from "../components/Meta";
import NavBanner from "../components/NavBanner";
import ContactForm from "../components/contact/ContactForm";
import Accordion from "../components/contact/Accordion";
import Partners from "../components/contact/Partners";

export default function Contact() {
  return (
    <>
      <Meta title={"Educa | Contact"} />
      <NavBanner title="Contact Us" page="Contact" />
      <Info />
      <ContactForm />
      <Accordion />
      <Partners />
    </>
  );
}

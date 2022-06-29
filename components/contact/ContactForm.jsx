import Image from "next/image";
import contactImg from "../../public/assets/contact-img.png";

const ContactForm = () => {
  return (
    <section className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto duration-300 ease-in my-20">
      <div className="flex flex-col items-center md:flex-row gap-10">
        <div className="relative w-full md:w-1/2 ">
          <Image
            layout="responsive"
            objectFit="cover"
            height="300"
            width="350"
            src={contactImg}
            alt="woman making phone calls"
          />
        </div>
        <div className="w-full md:w-1/2 border-2 border-green p-5 rounded">
          <form className="flex flex-col items-start w-full gap-2">
            <h2 className="font-bold text-2xl">Send Us a Message</h2>
            <label className="sr-only" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="border-2 border-green p-2 w-full bg-white focus:bg-green placeholder:focus:text-white focus:text-white rounded focus:outline-none"
              type="text"
              id="fullName"
              placeholder="Full Name"
              required
            />
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-green p-2 w-full bg-white focus:bg-green placeholder:focus:text-white focus:text-white rounded focus:outline-none"
              type="email"
              id="email"
              placeholder="Email"
              required
            />
            <label className="sr-only" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="border-2 border-green p-2 w-full bg-white focus:bg-green placeholder:focus:text-white focus:text-white rounded focus:outline-none"
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              required
            />
            <textarea
              className="border-2 border-green p-2 w-full bg-white focus:bg-green placeholder:focus:text-white focus:text-white rounded focus:outline-none"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              className="px-6 py-3 text-lg rounded border-2 border-transparent text-lightGreen bg-green hover:bg-lightGreen hover:text-green hover:border-green"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

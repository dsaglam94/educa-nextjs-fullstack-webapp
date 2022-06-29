import React from "react";
import { BsClockFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Info = () => {
  const infoItems = [
    {
      title: "Opening Hours",
      info: ["00:07 AM - 06:00 PM"],
      icon: <BsClockFill />,
    },
    {
      title: "Phone",
      info: ["+123-456-7890", "+111-222-3333"],
      icon: <AiFillPhone />,
    },
    {
      title: "Email",
      info: ["info@imdawn.me", "dogan.saglam94@gmail.com"],
      icon: <MdEmail />,
    },
    {
      title: "Address",
      info: ["Aydin Hatboyu 276/4", "Turkey, Izmir"],
      icon: <FaMapMarkedAlt />,
    },
  ];
  return (
    <section className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto flex flex-col items-center justify-between duration-300 ease-in my-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {infoItems.map((item, idx) => {
          const { title, info, icon } = item;
          return (
            <div
              key={idx}
              className="w-full flex flex-col items-center text-center gap-4 bg-lightGreen border-2 border-green p-10 rounded"
            >
              <div className="text-3xl text-white bg-green p-6 rounded-full">
                {icon}
              </div>
              <div className="space-y-2">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p>{info[0]}</p>
                <p>{info[1]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Info;

import popularSubjectsData from "../../popularSubjectsData";
import Image from "next/image";

const Subjects = () => {
  return (
    <section className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto flex flex-col items-center duration-300 ease-in mt-10">
      <h2 className="text-2xl font-bold py-10 md:text-3xl lg:text-4xl">
        Our Popular Subjects
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {popularSubjectsData.map((item, idx) => {
          return (
            <div
              key={idx}
              className="bg-lightGreen text-black hover:text-lightGreen py-6 px-12 rounded border-2 border-green flex flex-col items-center gap-6 hover:bg-green cursor-pointer duration-150 ease-in"
            >
              <div>
                <Image
                  width="100"
                  height="100"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <h3 className="font-bold whitespace-nowrap">{item.title}</h3>
              <span className="text-lightBlack text-sm whitespace-nowrap">
                {item.modules}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Subjects;
